import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { cryptidsService } from "../services/CryptidsService.js";
import BaseController from "../utils/BaseController.js";

export class CryptidsController extends BaseController {

  constructor() {
    super('api/cryptids')
    this.router
      .get('', this.getCryptids)
      .get('/:id', this.getCryptidById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.addCryptid)
      .delete('/:id', this.deleteCryptid)
    // .get('/:id/comments', this.getComments)
  }
  async getCryptidById(req, res, next) {
    try {
      const cryptid = await (await cryptidsService.getCryptidById(req.params.id)).populate('agent', 'name picture')
      res.send(cryptid)
    } catch (error) {
      next(error)
    }
  }

  async deleteCryptid(req, res, next) {
    try {
      const cryptid = await cryptidsService.deleteCryptid(req.params.id, req.userInfo)
      res.send(cryptid)
    } catch (error) {
      next(error)
    }
  }


  async addCryptid(req, res, next) {
    try {
      req.body.agentId = req.userInfo.id
      const cryptid = await (await cryptidsService.addCryptid(req.body)).populate('agent', 'name picture')
      res.send(cryptid)
    } catch (error) {
      next(error)
    }
  }


  async getCryptids(req, res, next) {
    try {
      const cryptids = await cryptidsService.getCryptids()
      res.send(cryptids)
    } catch (error) {
      next(error)
    }
  }
}