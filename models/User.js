import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    minlength: 3,
    maxlength: 20,
    trim: true,
    unique: true,
    // validator: isUnique, is between length, no special chars, etc.
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
})

export default mongoose.model('User', UserSchema)
