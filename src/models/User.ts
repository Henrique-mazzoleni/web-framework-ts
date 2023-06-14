import { Atributes } from './Atributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000';
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Atributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Atributes<UserProps>(attrs);
  }
}
