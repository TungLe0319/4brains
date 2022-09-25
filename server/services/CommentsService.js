import { dbContext } from '../db/DbContext.js';
import { BadRequest, Forbidden } from '../utils/Errors.js';

class CommentsService {
  async removeComment(cryptidId, userInfo, agentId) {
    console.log(cryptidId, userInfo, 'remove coment', agentId);

    const comment = await this.getCommentById(cryptidId);

    // if (comment.agentId != userInfo.id) {
    //   throw new Forbidden('not yo comment, not yo problem')
    // }
    await comment.remove();
    return comment;
  }

  async getComments(cryptidId) {
    const allComments = await dbContext.Comments.find({ cryptidId });

    // console.log(allComments);
    return allComments;
  }
  async getCommentById(commentId) {
    const comments = await dbContext.Comments.findById(commentId).populate(
      'agent',
      'name picture'
    );
    if (!comments) {
      throw new BadRequest('Invalid Id');
    }
    // console.log(comments);
    return comments;
  }
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
