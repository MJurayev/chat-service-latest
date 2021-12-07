// Infrastructure

import config from "config"
import "./infrastructure/http/app"
import "./infrastructure/websocket/ws-init"
import "./infrastructure/redis/init"
// import { client } from "./infrastructure/redis/init"

// const client2 = client.duplicate()
// setInterval(() => {
    
//     client2.publish("app:notification", "salom " + Date.now(), res => {
//         console.log(res);
//     })

// }, 1000)
