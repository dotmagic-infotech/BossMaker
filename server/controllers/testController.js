import Test from '../models/Test.js';

export const getTestData = async (req, res) => {
  try {
    const data = await Test.find(); // get all
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
