import mongoose from 'mongoose';

const MONGODB_URI =
  'mongodb+srv://todoListAPIVercel:xYI8viys49RDuSWB@cluster-db-todolistapiv.chnompw.mongodb.net/todoListAPIVercel?retryWrites=true&w=majority';

// const MONGODB_URI = process.env.MONGODB_URI;

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

// import mongoose from 'mongoose';

// const MONGODB_URI =
//   'mongodb+srv://todoListAPIVercel:xYI8viys49RDuSWB@cluster-db-todolistapiv.chnompw.mongodb.net/todoListAPIVercel?retryWrites=true&w=majority';

// const connectDB = async (req, res, next) => {
//   try {
//     if (!global.mongoose) {
//       global.mongoose = await mongoose.connect(MONGODB_URI);
//     }
//     console.log('MongoDB Connected!');
//     global.mongoose = mongoose;
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('database error');
//   }
//   return next();
// };

// export default connectDB;

// // const connectDB = async (req, res, next) => {
// //   try {
// //     if (!global.mongoose) {
// //       await mongoose.connect(MONGODB_URI, {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true,
// //       });
// //       console.log('MongoDB Connected!');
// //       global.mongoose = mongoose;
// //     }
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send('database error');
// //   }
// //   return next();
// // };

// // export default connectDB;
