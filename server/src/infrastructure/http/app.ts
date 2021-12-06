require('express-async-errors')

import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { v1Router } from './api/v1'
import { BadRequestError, NotFoundError } from '../../domain/Exceptions/Errors'

const app:Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((err:Error,req:Request, res:Response, next:NextFunction)=> {
    console.log("Middleware ishladi")
    if(err instanceof BadRequestError){
        return res.status(400).json({
            data:null,
            error:"err.message"
        })
    }
    if(err instanceof NotFoundError){
        return res.status(404).json({
            data:null,
            error:"Resource not found"
        })
    }
   
        return res.status(500).json({
            data:null,
            error:"Something went wrong"
        })
    // next(err)
    next()
})
process.on("unhandledRejection", (err) => {
    console.log(err)
})
// Api versions

app.use("/api/v1",v1Router)
const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log(`${PORT} - portda server ishlayapti`);  
})

export { app }