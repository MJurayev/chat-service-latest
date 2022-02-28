import { client } from "../../../infrastructure/redis/init";
import { WebSocket } from "ws";

export function addWsUser(ws:WebSocket):void{
    console.log((<any>ws).id + "added to redis");
    
   client.hmset("user", {
    [(<any>ws).id]:""
   })
}

export function removeWsUser(ws:WebSocket):void{
    const isHas = client.hexists('user',(<any>ws).id)
    if(isHas){
        client.hdel("user",(<any>ws).id)
    }
}
