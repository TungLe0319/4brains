import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";


export class CommentsController extends BaseController {
  constructor() {
    super('api/cryptids')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:id/comments', this.postComment)
      .get('/:id/comments', this.getComments)
  }


  async getComments(req, res, next) {
    try {
      const comments = await commentsService.getComments()
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async postComment(req, res, next) {
    try {

      req.body.agentId = req.userInfo.id
      const comment = await (await commentsService.postComment(req.body, req.params.id))
      //NOTE Had to throw this one line down due to not working with .create or .post
      comment.populate('agent', 'name picture')
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}