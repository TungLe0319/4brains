import { appState } from "../AppState.js";
import { Cryptid } from "../Models/Cryptid.js";
import { server } from "./AxiosService.js"

class CryptidsService{
  async addCryptid(formData) {
  const res = await server.post('/api/cryptids',formData)
  // console.log(res.data);
  appState.cryptids = [...appState.cryptids, new Cryptid(res.data)]
 }
 async  getCryptids() {
  const res = await server.get('/api/cryptids')
console.log(res.data);
appState.cryptids = res.data.map(c => new Cryptid(c))
  }

}

export const cryptidsService = new CryptidsService()