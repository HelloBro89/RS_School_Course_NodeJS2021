import { Request, Response, Router } from 'express';
// import bcrypt from 'bcryptjs';
import { User } from '../../entities/user';
import { usersService } from './user.service';

const routerUser = Router();

routerUser.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.allUsers();
  res.status(200).json(users.map(User.toResponse));
});

routerUser.route('/:userId').get(async (req: Request, res: Response) => {
  const id = req.params['userId'];
  if (!id) return res.status(404).json({});
  const userID = await usersService.userByID(id);
  if (!userID) return res.status(404).json({});

  return res.status(200).json(User.toResponse(userID));
});

routerUser.route('/').post(async (req: Request, res: Response) => {
  // req.body.password = bcrypt.hashSync(req.body.password, 10);
  const addedUser = await usersService.createdUser(req.body);
  res.status(201).json(User.toResponse(addedUser));
});

routerUser.route('/:userId').put(async (req: Request, res: Response) => {
  const { body } = req;
  const id = req.params['userId'];
  if (!id) return res.status(200).json({});

  const changedUser = await usersService.updatedUser(id, body);
  if (!changedUser) return res.status(200).json({});
  return res.status(200).json(User.toResponse(changedUser));
});

routerUser.route('/:userId').delete(async (req: Request, res: Response) => {
  const id = req.params['userId'];
  if (!id) return res.status(200).json({});
  const deletedUser = await usersService.deletesUser(id);

  return res.status(200).json(User.toResponse(deletedUser))

});

export { routerUser };
