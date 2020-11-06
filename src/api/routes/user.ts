import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
import { Container } from 'typedi';
import { Logger } from 'winston';
const route = Router();

export default function User(app: Router) {
  const logger: Logger = Container.get('logger');

  app.use('/users', (req, res) => {
    logger.info('user hit /users');
    res.json({ status: 'working' });
  });

  // route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
  //   return res.json({ user: req.currentUser }).status(200);
  // });
}
