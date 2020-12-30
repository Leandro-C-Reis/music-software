import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const server = express();
const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3333;

server.use(morgan('dev'));
server.use(express.json());
server.use(routes);

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));