import { dbContext } from '../db/DbContext.js';
import { Forbidden } from "../utils/Errors.js";

class CommentsService {
  // async removeComment(id, userInfo) {
  //   const comment = await this.getComments(id)
  //   if (agent.Id != userInfo.id) {
  //     throw new Forbidden('not yo comment, not yo problem')
  //   }
  //   await comment.delete()
  //   return comment
  // }



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
