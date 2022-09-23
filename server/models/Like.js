import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const LikeSchema = new Schema({

  fieldAgentId: { type: ObjectId, required: true, ref: 'Account' },
  cryptidId: { type: ObjectId, required: true, ref: 'Cryptid' },

}, {
  timestamps: true, toJSON: { virtuals: true }
})

LikeSchema.virtual('fieldAgent', {
  localField: 'fieldAgentId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

LikeSchema.virtual('cryptid', {
  localField: 'cryptidId',
  foreignField: '_id',
  justOne: true,
  ref: 'Cryptid'
})

LikeSchema.index({ fieldAgentId: 1, cryptidId: 1 }, { unique: true })



