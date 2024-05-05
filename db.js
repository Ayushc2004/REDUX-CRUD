const mongoose = require('mongoose');

// Replace the URI below with your MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://chandakag2:1234@cluster0.o4dbhpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  }
};

module.exports = connectToMongo;

