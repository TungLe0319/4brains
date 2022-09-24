import { dbContext } from "../db/DbContext.js"


class CommentsService {

  async getAllComments() {
    const allComments = await dbContext.Comments.find()
    console.log(allComments);
    return allComments
  }
  async getComments() {
    const comments = await dbContext.Comments.find()
    console.log(comments);
    return comments
  }
  async postComment(agentId, cryptidId) {
    const cryptid = await dbContext.Cryptids.findById(cryptidId)
    const comment = await dbContext.Comments.create(agentId)
    await comment.populate('agent', 'name picture')
    await comment.populate('cryptid')
    return comment
  }
}

export const commentsService = new CommentsService()