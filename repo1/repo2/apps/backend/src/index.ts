import express, { Request, Response } from 'express'
import {BACKEND_URL}  from "@akash09/common/urls"

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(BACKEND_URL);
});

app.listen(4000, () => {
    console.log('Server started on port 4000');
});