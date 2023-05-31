import { StatusCodes } from 'http-status-codes'
import User from '../models/User.js'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const register = async (req, res, next) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    throw new BadRequestError('please provide all values')
  }

  const emailAlreadyExists = await User.findOne({ email })
  const usernameAlreadyExists = await User.findOne({ username })
  if (emailAlreadyExists) throw new BadRequestError('Email already in use')
  if (usernameAlreadyExists)
    throw new BadRequestError('Username already in use')

  const user = await User.create({ username, email, password })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      username: user.username,
    },
    token,
  })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    throw new UnAuthenticatedError('Invalid credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid credentials')
  }

  const token = user.createJWT()

  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token })
}
const updateUser = async (req, res) => {
  const { email, username } = req.body

  if (!email || !username) {
    throw new BadRequestError('Please provide all values')
  }

  const user = await User.findOne({ _id: req.user.userId })

  user.email = email
  user.name = username

  await user.save()

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({ user, token })
}

export { register, login, updateUser }
