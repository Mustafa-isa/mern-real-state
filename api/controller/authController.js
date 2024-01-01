const User = require("../modales/userModale.js");
const bcrypt = require("bcrypt");
const errorHandler = require("../utilities/error");
const jwt = require("jsonwebtoken");
async function Register(req, res, next) {
  try {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email, and password are required." });
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      next(errorHandler(409, "user already exist try with another one"));
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Send success response
    user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      userInfo: user,
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
}

// create token
function generateToken(user) {
  return jwt.sign({ userId: user.id, username: user.username }, "Mustafa1912", {
    expiresIn: "1h",
  });
}
// stor token in cokies
function setTokenCookie(res, token ,user) {
  res.cookie("access_token", token, {
    maxAge: 3600000, // 1 hour expiration (in milliseconds)
  }).json({success:"User Login Successfully" ,user})
}

// login route controller

async function Login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user);
      setTokenCookie(res, token ,user);
    } else {
      next(errorHandler(401, "Invalid credentials"));
    }
  } catch (error) {
    next(error);
  }
}

module.exports.register = Register;
module.exports.login = Login;
