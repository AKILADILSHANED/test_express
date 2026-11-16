import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;
app.listen(port);

type User = {
  id: number,
  name: string,
  age: number,
  email: string,
  isMarried: boolean
}

const users: User[] = [
  {
    id: 1,
    name: 'Akila',
    age: 32,
    email: 'edirisooriyaakila@gmail.com',
    isMarried: true
  }
]

app.get("/getUser/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const matchedUser = users.find((user) => user.id === id);
  res.json(matchedUser);
});
