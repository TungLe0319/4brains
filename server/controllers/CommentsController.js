import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";


export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('/:cryptidId', this.getComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:cryptidId', this.postComment)
    // .delete('/:id', this.removeComment)
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

      const formData = req.body

      // removed req.params.id to test something in .postComment()
      const comment = await (await commentsService.postComment(formData, req.params.cryptidId, req.userInfo))
      //NOTE Had to throw this one line down due to not working with .create or .post
      comment.populate('agent', 'name picture')
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }




  // async removeComment(req, res, next) {
  //   try {
  //     const comment = await commentsService.removeComment(req.params.id, req.userInfo)
  //     res.send(comment)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}