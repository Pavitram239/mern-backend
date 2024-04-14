import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    username: {
      type: String,
      required: [true, 'username is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: [true, 'role is required'],
    },
  },
  {
    timeStamps: true,
    strict: false,
  }
);

export default mongoose.model('User', userSchema);
