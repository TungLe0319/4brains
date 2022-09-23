import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CryptidsService {
  async dislike(query = {}) {
    const dislikes = await dbContext.Likes.find(query).populate('cryptid')
    return dislikes
  }
  async getLikes(query = {}) {
    const likes = await dbContext.Likes.find(query).populate('cryptid')
    return likes
  }


  async like(formData) {
    const cryptid = await this.getCryptidById(formData.cryptidId)
    const like = await dbContext.Likes.create(formData)
    await like.populate('cryptid')
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
    const cryptid = await dbContext.Cryptids.findById(id).populate('agent', 'name picture')
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
    const cryptids = await dbContext.Cryptids.find()
    return cryptids
  }
}

export const cryptidsService = new CryptidsService()