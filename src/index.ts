import { User } from './models/User';

const user = new User({ name: 'Henrique', age: 38 });

user.on('change', () => {
  console.log('Something has changed');
});

user.set({ name: 'Henry ' });

console.log(user);
