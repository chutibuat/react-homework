import mongoose from 'mongoose';
import User from './models/user';

const users = [
  {
    firstname: 'john',
    lastname: 'doe',
    avatar: '',
    email: 'testreact1@netmail.com',
    mobile: '0123456789',
  },
  {
    firstname: 'jane',
    lastname: 'doe',
    avatar: '',
    email: 'testreact2@netmail.com',
    mobile: '0123456789',
  },
  {
    firstname: 'jason',
    lastname: 'doe',
    avatar: '',
    email: 'testreact3@netmail.com',
    mobile: '0123456789',
  }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/users');

// Go through each movie
users.map(data => {
  const user = new User(data);
  user.save();
});