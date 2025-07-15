import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  name: String,
  city: String,
  mNumber: String,
}, { collection: 'test' });

const Test = mongoose.model('Test', testSchema);

export default Test;
