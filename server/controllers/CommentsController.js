import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";


export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.postComment)
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