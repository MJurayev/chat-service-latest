import { RedisClient } from 'redis';
import config from 'config';

const client= new RedisClient({
    host:config.get("redis.host"),
    port:config.get("redis.port"),
    // password:config.get("redis.password"),
    // db:
})
const subscriber = client.duplicate()

subscriber.subscribe('app:notification')

client.on("error", (err:Error) => {
    console.log(err);
})

client.hmset('test', {"user1":"salom", "user2":"salom2"})

client.hdel('test', "user1")
export { client, subscriber }