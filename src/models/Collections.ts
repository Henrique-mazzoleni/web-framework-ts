import { Eventing } from './Eventing';

import axios, { AxiosResponse } from 'axios';

export class Collection<T, V> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: V) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse = await axios.get(this.rootUrl);

    response.data.forEach((value: V) => {
      this.models.push(this.deserialize(value));
    });

    this.trigger('change');
  }
}
