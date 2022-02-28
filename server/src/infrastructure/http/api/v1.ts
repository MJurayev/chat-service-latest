import express from 'express'
import userRouter from './routes/UserRoutes';
import messageRouter from './routes/MessageRoutes';
import authRouter from './routes/AuthRoutes';

const v1Router = express.Router();

v1Router.use('/user',userRouter);
v1Router.use('/message',messageRouter);
v1Router.use('/auth',authRouter);

// All routes go here 

export { v1Router }