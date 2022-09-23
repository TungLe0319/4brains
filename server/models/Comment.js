import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      default: '',
      minLength: 3,
      maxLength: 100,
    },

    //USER INFO
    //RELATIONSHIPS-------------------------------------V magic string here
    exampleId: { type: ObjectId, required: true, ref: 'Account' },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

CommentSchema.virtual('example', {
  localField: 'exampleId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account',
});
