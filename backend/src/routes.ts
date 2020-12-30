import express from 'express';

import UserController from './controllers/UserController';
import MusicController from './controllers/MusicController';

const routes = express();

routes.get('/', (req, res) => res.send({ msg: 'message' }));

export default routes;