const User = require("../modales/userModale.js");
const bcrypt = require("bcrypt");
const errorHandler = require('../utilities/error')
async function authContrllerRegister(req, res ,next) {
  try {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email, and password are required." });
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      next(errorHandler(409 ,"user already exist try with another one"))

    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
  const user =  await User.create({ username, email, password: hashedPassword });

    // Send success response
    user.save();
    res.status(201).json({success:true , message: "User created successfully." ,userInfo:user});
  } catch (error) {
    next(errorHandler(500 ,error.message))
  }
}

module.exports = authContrllerRegister;
