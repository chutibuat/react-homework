import express, { Router } from 'express';
import user from './controllers/users';

const router = Router();

router.route('/users').get(user.index);
router.route('/user/create').post(user.create);
// router.route('/user/:userId').get(user.update);
router.route('/user/:userId').put(user.update);
router.route('/user/:userId').delete(user.delete);

export default router;