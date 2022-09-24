import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CryptidsService {
  async getDislikes() {
    const dislikes = await dbContext.Dislikes.find()
    return dislikes
  }
  async getLikes() {
    const likes = await dbContext.Likes.find()
    return likes
  }

  async dislike(formData){
    const cryptid = await this.getCryptidById(formData.cryptidId)
    const dislike = await dbContext.Dislikes.create(formData)
    return dislike
    // await (await dislike.populate('cryptid')).populate('dislikes')
  }

  async like(formData) {
    const cryptid = await this.getCryptidById(formData.cryptidId)
    const like = await dbContext.Likes.create(formData)
    return like
    // await (await like.populate('cryptid')).populate('likes')
  }
  async deleteCryptid(id, userInfo) {
    const cryptid = await this.getCryptidById(id)
    if (cryptid.agentId != userInfo.id) {
      throw new Forbidden('Access Denied')
    }
    await cryptid.delete()
    return cryptid

  }
  async getCryptidById(id) {
    const cryptid = await dbContext.Cryptids.findById(id).populate('agent', 'name picture').populate('likes').populate('dislikes')
    if (!cryptid) {
      throw new BadRequest('Access Denied')
    }
    return cryptid
  }
  async addCryptid(formData) {
    const cryptid = await (await dbContext.Cryptids.create(formData)).populate('agent', 'name picture')
    return cryptid
  }

  async getCryptids() {
    const cryptids = await dbContext.Cryptids.find().populate('likes').populate('dislikes')
    return cryptids
  }

  
}

export const cryptidsService = new CryptidsService()