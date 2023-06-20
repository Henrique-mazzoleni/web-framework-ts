import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Gabriella', age: 2 });
const root = document.querySelector('#root');
const userForm = root ? new UserForm(root, user) : null;
userForm?.render();
