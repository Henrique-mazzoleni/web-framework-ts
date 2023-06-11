import { User } from './models/User';

const user = new User({ name: 'Henrique', age: 38 });

console.log(user.get('name'));
console.log(user.get('age'));
