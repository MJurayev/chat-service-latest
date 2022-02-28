require('express-async-errors')

import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { v1Router } from './api/v1'
import errorHandler from './middleware/error-handler'
import http from 'http'

const app:Application = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res:Response) => {
    return res.sendFile(`${process.cwd()}/web_client/index.html`)
})

app.get('/admin', (req:Request, res:Response) => {
    return res.sendFile(`${process.cwd()}/web_client/index.html`)
})
//api versions
app.use("/api/v1",v1Router)

// Error handling middleware
app.use(errorHandler)
const PORT = process.env.PORT || 8001
server.listen(PORT, () => {
    console.log(`${PORT} - portda server ishlayapti`);  
})

export { server, app }