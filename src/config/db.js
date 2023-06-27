import mongoose from 'mongoose'
import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database ✅');
})

export default db;