import express from 'express'
import userRouter from './routes/UserRoutes';
import messageRouter from './routes/MessageRoutes';

const v1Router = express.Router();


v1Router.use('/user',userRouter);
v1Router.use('/message',messageRouter);

// All routes go here 

export { v1Router }