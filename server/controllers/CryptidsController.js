import { Auth0Provider } from "@bcwdev/auth0provider";
import { cryptidsService } from "../services/CryptidsService.js";
import BaseController from "../utils/BaseController.js";

export class CryptidsController extends BaseController {

  constructor(){
    super('api/cryptids')
    this.router
    .get('', this.getCryptids)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.addCryptid)
    .get('/:id', this.getCryptidbyId)
  }
  async getCryptidbyId(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) 
    {
      
    }
  }

    async addCryptid(req, res, next){
      try {
        req.body.agentId = req.userInfo.id
        const cryptid = await cryptidsService.addCryptid(req.body)
        res.send(cryptid)
      } catch (error) {
        next(error)
      }
    }


  async getCryptids(req,res,next){
    try {
      const cryptids = await cryptidsService.getCryptids()
      res.send(cryptids)
    } catch (error) {
      next(error)
    }
  }
}