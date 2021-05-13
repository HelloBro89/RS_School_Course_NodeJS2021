const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const id = req.params.userId;
  const userID = await usersService.userID(id);
  res.status(200).json(User.toResponse(userID));
});

router.route('/').post(async (req, res) => {
  const addedUser = await usersService.createUser(new User(
    {
      login: req.body.login,
      password: req.body.password,
     name: req.body.name
     }
  ));
  res.status(201).json(User.toResponse(addedUser));
});

router.route('/:userId').put(async (req, res) => {

  const {body} = req;
  const id = req.params.userId;

  const changedUser = await usersService.changeUser(id, body);
  res.status(200).json(User.toResponse(changedUser));
});

router.route('/:userId').delete(async (req, res) => {

  const id = req.params.userId;

  const deletedUser = await usersService.deleteUser(id);
  res.status(200).json(User.toResponse(deletedUser));
});

module.exports = router;
