import { server as httpServer } from '../../infrastructure/http/app';
import { WebSocket, WebSocketServer } from 'ws'
import { Blob } from 'buffer';
import { bufferToJson } from './utils/BufferToJson';
import { joinRoom, sendMessage, setDbUserId } from './userHandler';
import { addWsUser, removeWsUser } from './utils/globalActions';
import { client } from '../../infrastructure/redis/init';


const wss = new WebSocketServer({server:httpServer });
const gb = global as any
gb.clients = {}
wss.on('connection', function connection(ws, req) {
    const id = req.headers['sec-websocket-key'];
    (<any>ws).id = id
    addWsUser(ws)
    console.log("connected")
    
    client.on('message', (channel, message) => {
        ws.send(message)
    })
    

    ws.on('message', function message(buffer:Buffer) {
        const data = bufferToJson(buffer)

        switch(data.event){
            case "user:setDbUserId":setDbUserId(ws, data); break;
            case "user:sendMessage": sendMessage(data); break;
        }
    });
    
    ws.on("close", (code:number, reason:Buffer) => {
        removeWsUser(ws)
        console.log(reason + "reason")
        // Buni logga yozish kerak
        console.log(code + "code")
    })
});

gb.wss = wss



