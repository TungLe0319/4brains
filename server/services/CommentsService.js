import { dbContext } from '../db/DbContext.js';

class CommentsService {
  async getComments() {
    const allComments = await dbContext.Comments.find().populate('agent', 'name picture');
    // console.log(allComments);
    return allComments;
  }
  // async getComments() {
  //   const comments = await dbContext.Comments.find();
  //   // console.log(comments);
  //   return comments;
  // }
  async postComment(formData, cryptidId, userInfo) {
    formData.cryptidId = cryptidId;
    formData.agentId = userInfo.id;

    const comment = await dbContext.Comments.create(formData);
    await comment.populate('agent', 'name picture');
    await comment.populate('cryptid');
    return comment;
  }
}

export const commentsService = new CommentsService();
