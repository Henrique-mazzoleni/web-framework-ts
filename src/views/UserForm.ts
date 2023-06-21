import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAge,
      'click:.update-name': this.onUpdateName,
      'click:.save-user': this.onSaveUser,
    };
  }

  onSaveUser = (): void => {
    this.model.save();
  };

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  onUpdateName = (): void => {
    const name: HTMLInputElement | null = this.parent.querySelector('#name');
    if (name) this.model.set({ name: name.value });
  };

  template(): string {
    return `
      <div>
        <input id="name" placeholder=${this.model.get('name')} />
        <button class="update-name" >Update Name</button>
        <button class="set-age" >Set Random Age!</button>
        <button class="save-user" >Save</button>
      </div>
    `;
  }
}
