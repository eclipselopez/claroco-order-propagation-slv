import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/ping', async(req: Request, res: Response) => {
    return res.status(200).json({"message":"pong"})
})

export default routes