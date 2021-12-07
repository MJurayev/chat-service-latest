import { WebSocket } from "ws";
import { client } from "../init";

const result =  client.hset("message", "1", "salom", () => {

})

export function addUser(dbId:string, ws:WebSocket){
    client.hset((<any>ws).id, dbId, () => {})
}

