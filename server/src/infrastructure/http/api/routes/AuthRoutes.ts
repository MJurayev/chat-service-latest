import express, { Request, Response } from 'express'

const router = express.Router()
router.get('/', (req:Request, res:Response) => {
    return res.json("Auth Routes")
})

export default router