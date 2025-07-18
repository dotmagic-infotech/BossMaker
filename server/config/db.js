import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'admin',
        });
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ Mongo connection failed:', err);
        process.exit(1);
    }
};

export default connectDB;
