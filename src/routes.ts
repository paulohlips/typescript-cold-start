import { Request, Response } from "express";
import createuser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createuser({
    email: "paulo@email.com",
    password: "123456",
    techs: ["NodeJS", { title: "JS", experience: 60 }],
  });

  return response.json(user);
}
