import express, { Router } from 'express';
import user from './controllers/users';

const router = Router();

router.route('/users').get(user.index);
router.post('/user/create', user.create);
router.route('/user/:userId')
	.get(user.show)
	.put(user.update)
	.delete(user.delete);

export default router;