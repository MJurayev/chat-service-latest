import express from 'express'
import userRouter from './routes/UserRoutes';

const v1Router = express.Router();


v1Router.use('/user',userRouter);

// All routes go here 

export { v1Router }