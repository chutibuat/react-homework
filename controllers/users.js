import User from '../models/user';
import moment from 'moment';

const user = {
	index: (req, res, next) => {
	  User.find().lean().exec((err, users) => res.json(users));
	},

	create: (req, res, next) => {
	  'yeah this create method'
	},

	show: (req, res, next) => {
	  User.find({
	  	_id: req.params.userId
	  }).lean().exec((err, users) => res.json(users));
	},

	update: (req, res, next) => {
	  User.update(
		   { _id: req.params.userId },
		   {
		      firstname: "testname",
		      lastname: 'testlast',
		      avatar: '',
		      email: 'aaa@bbb.ccc',
		      mobile: '1234567890'
		   },
		   { upsert: true }
		)
	},

	delete: (req, res, next) => {
	  'yeah this delete method'
	}
} 

export default user;