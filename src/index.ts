import express, { Express, Request, Response } from "express";
import { schema } from '../src/zodSchemas'
import { number } from "zod";

const app: Express = express();
const port = 3000;
app.listen(port);

type User = {
  id: number,
  fname: string,
  lname: string,
  age: number
}

const user01: User[] = [{ id: 1, fname: 'Akila', lname: 'Edirisooriya', age: 32 },
{ id: 20, fname: 'Saman', lname: 'Ekanayake', age: 23 },
{ id: 30, fname: 'Jeewan', lname: 'Samaraweera', age: 32 },
{ id: 40, fname: 'Daham', lname: 'Sirisena', age: 40 }
];

app.get("/get-user/:id", (req: Request, res: Response) => {
  const result = schema.safeParse(Number(req.params.id));
  if(!result.success){
    return res.status(400).json({
      Error: result.error.issues
    })
  }
  const searched = user01.find((u)=>{
    return u.id === Number(req.params.id)
  })
  res.status(200).json(searched);
});



