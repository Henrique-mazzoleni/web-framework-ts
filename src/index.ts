import { User } from './models/User';

const user = new User({ id: 4, name: 'Anja' });

user.on('save', () => {
  console.log(user);
});

user.save();
