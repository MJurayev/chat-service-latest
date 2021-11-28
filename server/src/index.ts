import express,{ Application, Request, Response } from 'express'

const app:Application = express()

app.get('/', (req, res) => {
    return res.send("Api is working...")
})

app.listen(3000, () => {
    console.log("Server started in 3000 port");
})