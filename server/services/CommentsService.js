import { dbContext } from "../db/DbContext.js"


class CommentsService {
  async getComments() {
    const comments = await dbContext.Comments.find()
    console.log(comments);
    return comments
  }
  async postComment(agentId, cryptidId) {
    const cryptid = await dbContext.Cryptids.findById(cryptidId)
    const comment = await dbContext.Comments.create(agentId)
    return comment
  }
}

export const commentsService = new CommentsService()