import { WebSocket } from "ws";
import { client } from "../init";

const result =  client.hset("message", "1", "salom", () => {

})

export function addUser(dbId:string, wsId:string){
    client.hset(wsId, dbId, () => {})
}

