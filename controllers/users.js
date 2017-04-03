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
	  'yeah this update method'
	},

	delete: (req, res, next) => {
	  'yeah this delete method'
	}
} 

export default user;