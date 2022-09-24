import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CryptidSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 2, maxLength: 20 },
    imgUrl: { type: String, default: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/bigfoot-1498563912.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*' },
    location: { type: String, default: 'The hazy nightmares of humanity' },
    description: { type: String, required: true },
    agentId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    likes:  { type: Number},
    dislikes: { type: Number}

  },
  { timestamps: true, toJSON: { virtuals: true } })

CryptidSchema.virtual('agent', {
  localField: 'agentId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CryptidSchema.virtual('likes', {
  localField: '_id',
  foreignField: 'cryptidId',
  count: true,
  ref: 'Like'
})

CryptidSchema.virtual('dislikes', {
  localField: '_id',
  foreignField: 'cryptidId',
  count: true,
  ref: 'Dislike'
})

CryptidSchema.virtual('comments', {
  localField: '_id',
  foreignField: 'cryptidId',

  ref: 'Comment'
})
