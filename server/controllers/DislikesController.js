import { Auth0Provider } from "@bcwdev/auth0provider"
import { cryptidsService } from "../services/CryptidsService.js"
import BaseController from "../utils/BaseController.js"
import { BadRequest } from "../utils/Errors.js"

    export class DislikesController extends BaseController{
      constructor(){
        super('api/dislikes')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.dislike)
      }

      async dislike(req, res, next) {
        try {
          const formData = {
            cryptidId: req.body.id,
            fieldAgentId: req.userInfo.id,
          }
          const dislike = await cryptidsService.dislike(formData)
          res.send(dislike)
        } catch (error) {
          next(error)
        }
      }
      
      async getDislikes(req,res,next){
        try {
          const dislikes = await cryptidsService.getDislikes()
          res.send(dislikes)
      } catch (error) {
        next(error)
      }
  }
      
      
}