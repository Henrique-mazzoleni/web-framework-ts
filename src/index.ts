import { User } from './models/User';

// const user = User.buildUser({ id: 4 });

// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();

const collection = User.buildCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
