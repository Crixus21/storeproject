const jsonServer = require('json-server');
const authMiddleware = require('./authMiddleware');

const server = jsonServer.create();
const router = jsonServer.router(require('./data')());
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);  // hogy a req.body is működjön POST kéréseknél
server.use(middlewares);

server.use(authMiddleware);  // a saját auth middleware-ed

server.use(router);

const PORT = 4210;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});