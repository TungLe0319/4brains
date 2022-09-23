import { dbContext } from "../db/DbContext.js"

class CryptidsService{
  async addCryptid(formData) {
    const cryptid = await dbContext.Cryptids.create(formData)
    return cryptid
  }

  async getCryptids(){
    const cryptids = await dbContext.Cryptids.find()
    return cryptids
  }
}

export const cryptidsService = new CryptidsService()