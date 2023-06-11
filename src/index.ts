import { User } from './models/User';

const user = new User({ name: 'Henrique', age: 38 });

user.on('event', () => {
  console.log('event');
});
user.on('event', () => {
  console.log('another event');
});
user.on('close', () => {
  console.log('closing');
});

console.log(user);

user.trigger('event');