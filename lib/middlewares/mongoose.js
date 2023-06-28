import mongoose from 'mongoose';

const MONGODB_URI =
  'mongodb+srv://todoListAPIVercel:xYI8viys49RDuSWB@cluster-db-todolistapiv.chnompw.mongodb.net/todoListAPIVercel?retryWrites=true&w=majority';


const databaseMiddleware = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI);
    }
    console.log('MongoDB Connected!');
  } catch (err) {
    console.error(err);
    res.status(500).send('database error');
  }
  return next();
};

export default databaseMiddleware;
