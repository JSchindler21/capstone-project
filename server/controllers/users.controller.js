import User from "../models/users.model.js";
import generateToken from "../lib/generateToken.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    alert("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.username,
      email: user.userMail,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    alert("Error");
  }
};



const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    console.log("Invalid Email or Password !");
  }
};
export { authUser, registerUser,};