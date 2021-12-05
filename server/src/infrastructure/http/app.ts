import express, { Application } from 'express'
import cors from 'cors'
import { v1Router } from './api/v1'


const app:Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Api versions

app.use("/api/v1",v1Router)
const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log(`${PORT} - portda server ishlayapti`);  
})

export { app }