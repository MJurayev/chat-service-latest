import { IBaseWsEvent } from "@domain/DTO/websocketEvents"

export function bufferToJson(data:Buffer):IBaseWsEvent{
    const dataBuffer= JSON.parse(data.toString('utf-8'))
    return dataBuffer
}
