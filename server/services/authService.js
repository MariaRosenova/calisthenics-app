const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');


exports.register = async (userData) => {
   const user = await User.findOne({email : userData.email});

   if (user) {
    throw new Error('User already exists');
   }

   const createdUser = await User.create(userData);

   const token = await generateToken(createdUser);

   return {token, email: user.email, username: user.username, _id: user._id };
   //return token;
}

exports.login = async (loginData) => {
  const user = await User.findOne({ email: loginData.email });

  if (!user) {
    throw new Error('Authentication failed');
  }

  const isValid = await bcrypt.compare(loginData.password, user.password);
  
  if (!isValid) {
  throw new Error('Authentication failed');
  }

  const token = await generateToken(user);

  return { token, email: user.email, username: user.username, _id: user._id };
  //return token;
};


function generateToken(user) {
  
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  
  return jwt.sign(payload, SECRET, {expiresIn: '2h'});
  
};

exports.getProfile = async (user) => {
 const foundedUser = User.findOne({user: user});
 return foundedUser;
} 