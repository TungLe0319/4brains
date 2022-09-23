import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const DislikesSchema = new Schema({

  fieldAgentId: { type: ObjectId, required: true, ref: 'Account' },
  cryptidId: { type: ObjectId, required: true, ref: 'Cryptid' },
}, {
  timestamps: true, toJSON: { virtuals: true }
})

DislikesSchema.virtual('fieldAgent', {
  localField: 'fieldAgentId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

DislikesSchema.virtual('cryptid', {
  localField: 'cryptidId',
  foreignField: '_id',
  justOne: true,
  ref: 'Cryptid'
})

DislikesSchema.index({ fieldAgentId: 1, cryptidId: 1 }, { unique: true })



