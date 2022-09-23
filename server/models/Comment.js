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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

CommentSchema.virtual('comment', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account',
});
