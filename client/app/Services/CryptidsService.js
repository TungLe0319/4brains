
import { appState } from "../AppState.js";
import { ActiveCryptid } from "../Models/ActiveCryptid.js";
import { Cryptid } from "../Models/Cryptid.js";
import { server } from "./AxiosService.js"

class CryptidsService {
  async activeCryptid(id) {
    const res = await server.get(`api/cryptids/${id}`)
    console.log(res.data);
    // appState.activeCryptid = new ActiveCryptid(res.data)
  }


  async likePost(cryptidId) {
    const res = await server.post(`/api/likes/like`, { cryptidId })
    console.log(res.data);
  }


  async removeCryptid(id) {
    await server.delete(`api/cryptids/${id}`)
    appState.cryptids = appState.cryptids.filter(c => c.id != id)
    appState.emit('cryptids')
  }
  async addCryptid(formData) {
    const res = await server.post('/api/cryptids', formData)
    // console.log(res.data);
    appState.cryptids = [...appState.cryptids, new Cryptid(res.data)]
  }
  async getCryptids() {
    const res = await server.get('/api/cryptids')
    console.log(res.data);
    appState.cryptids = res.data.map(c => new Cryptid(c))
  }

}

export const cryptidsService = new CryptidsService()