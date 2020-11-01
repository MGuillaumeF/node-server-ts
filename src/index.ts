import * as http from 'http';
import LOGGER from './Logger/Logger';

const DEFAULT_SOCKET = 4040;

http
  .createServer((r: http.IncomingMessage, s: http.ServerResponse) => {
	LOGGER.debug(r.method, r.url, r.headers);
    var body = "";
    r.on('readable', function() {
		const text = r.read();
		if (text != null) {
			body += text;
		}	
    });
    r.on('end', function() {
        LOGGER.debug(body);
		s.writeHead(200, { 'Content-Type': 'text/plain' });
        s.write("OK"); 
        s.end(); 
    });
  })
  .listen(DEFAULT_SOCKET);

LOGGER.debug(`Server Listen on socket ${DEFAULT_SOCKET}`, 333, { a: 12 });
LOGGER.info(`Server Listen on socket ${DEFAULT_SOCKET}`);
LOGGER.warn(`Server Listen on socket ${DEFAULT_SOCKET}`);
LOGGER.error(`Server Listen on socket ${DEFAULT_SOCKET}`);
