import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAge,
      'click:.update-name': this.updateName,
    };
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  updateName = (): void => {
    const name: HTMLInputElement | null = this.parent.querySelector('#name');
    if (name) this.model.set({ name: name.value });
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
      <div>
        <h1>User Input</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <input id="name" placeholder=${this.model.get('name')} />
        <button class="update-name" >Update Name</button>
        <button class="set-age" >Set Random Age!</button>
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    // this.parent.append(templateElement.content);
    this.parent.replaceChildren(templateElement.content);
  }
}
