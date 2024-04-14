import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
    },
  },
  {
    timeStamps: true,
    strict: false,
  }
);

export default mongoose.model('Product', productSchema);
