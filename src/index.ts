import * as http from 'http';
import LOGGER from './Logger/Logger';

const DEFAULT_SOCKET = 4040;

http
  .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    LOGGER.info('test');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello');
  })
  .listen(DEFAULT_SOCKET);

LOGGER.debug(`Server Listen on socket ${DEFAULT_SOCKET}`);
LOGGER.info(`Server Listen on socket ${DEFAULT_SOCKET}`);
LOGGER.warn(`Server Listen on socket ${DEFAULT_SOCKET}`);
LOGGER.error(`Server Listen on socket ${DEFAULT_SOCKET}`);
