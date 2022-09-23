import { Auth0Provider } from "@bcwdev/auth0provider";
import { cryptidsService } from "../services/CryptidsService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";

export class LikesController extends BaseController {

  constructor() {
    super('api/likes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/like/', this.like)
      .post('/dislike', this.dislike)
      .get('/like/', this.getLikes)
  }
  async dislike(req, res, next) {
    try {
      const formData = {
        cryptidId: req.body.id,
        fieldAgentId: req.userInfo.id,
      }
      const dislike = await cryptidsService.dislike(formData)
      // res.send(dislike)
    } catch (error) {
      next(error)
    }
  }

  async like(req, res, next) {
    try {
      const formData = {
        cryptidId: req.body.id,
        fieldAgentId: req.userInfo.id,
      }
      const like = await cryptidsService.like(formData)
      res.send(like)
    } catch (error) {
      next(error)
    }
  }
  async getLikes(req, res, next) {
    try {
      if (!req.query.cryptidId) {
        throw new BadRequest('Error!')
      }
      const likes = await cryptidsService.getLikes(req.query)
      res.send(likes)
    } catch (error) {
      next(error)
    }
  }
}