class BadRequestError extends Error{
    constructor(message:string = "Bad value",private status:number=400){
        super(message)
    }
}

class NotFoundError extends Error{
    constructor(message:string = "Resource not found",private status:number=404){
        super(message)
    }
}

export { BadRequestError, NotFoundError }