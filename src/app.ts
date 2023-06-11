import express, { Application, Request, Response } from 'express'
import usersService from './app/modules/users/users.service'
import cors from 'cors'
import usersRouter from './app/modules/users/users.router'
const app: Application = express()
// const port = 5000;

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('working properly')
})

export default app
