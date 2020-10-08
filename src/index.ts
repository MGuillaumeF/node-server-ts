import * as http from 'http';
http
  .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello');
  })
  .listen(4040);
