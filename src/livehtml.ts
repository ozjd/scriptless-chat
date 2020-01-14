import Express from 'express';

const marker: string = '<!-- STARTLIVESTREAM -->';

export default function(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
  const originalSend = res.send;
  res.send = (body?: any): Express.Response => {
    if (typeof body !== 'string') {
      originalSend.call(res, body);
    }
    else {
      const markerPos = body.indexOf(marker);
      if (markerPos === -1) {
        originalSend.call(res, body);
      }
      else { // It's alive!
        body = body.substring(0, markerPos);
        const originalEnd = res.end;
        res.type('html');
        res.write(body, 'utf8');
        res.flushHeaders();

        const everySecond = setInterval(()=>{
          res.write(`<span>The current time is ${new Date()}</span><br>`);
        }, 1000);
        res.connection.on('close', (hadError: boolean) => {
          clearInterval(everySecond);
          console.log(`Connection closed. Had error: ${hadError}`);
        });
      }
    }
    res.send = originalSend;
    return res;
  };
  next();
}