import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export const CommentSchema = new Schema(
  {
    body: {
      type: String,
      default: '',


    },

    //USER INFO
    //RELATIONSHIPS-------------------------------------V magic string here
    agentId: { type: ObjectId, required: true, ref: 'Account' },
    cryptidId: { type: ObjectId, required: true, ref: 'Cryptid' }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

CommentSchema.virtual('agent', {
  localField: 'agentId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account',
});
CommentSchema.virtual('cryptid', {
  localField: 'cryptidId',
  foreignField: '_id',
  justOne: true,
  ref: 'Cryptid',
});
