import { IBaseWsEvent } from "@domain/DTO/websocketEvents";
import { client } from "../../infrastructure/redis/init";
import { WebSocket, WebSocketServer } from "ws";




export function joinRoom (ws:WebSocket, userId:string):void{
    client.hmset('user', (<any>ws).id, userId)
    // const clients = (<any>global).clients
    // clients[userId] = ws
    // console.log("Client joined to " + userId);
}

export function sendMessage(data:IBaseWsEvent){
    const {toUserId, message} = data.data
    // save Message in redis
    const clients = (<any>global).clients
    const wsServer:WebSocketServer = (<any>global).wss
    wsServer.clients.forEach((client) => {
        if((<any>client).userId === toUserId){
            client.send(message)
        }
    })
    console.log(clients)
}

export function setDbUserId(ws:WebSocket, data:IBaseWsEvent){
    client.hmset('user', (<any>ws).id, data.data)
}
