import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { PlayRequest } from './models/Requests';

export function initServer() {
  const app = express();
  app.use(express.json());
  const port = 3000;

  app.post('/play', PlayRequest, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({"error": errors.array()[0]});
    }
    res.send('Hello World!');
  });

  return app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
};
