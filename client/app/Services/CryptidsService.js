
import { appState } from "../AppState.js";
import { ActiveCryptid } from "../Models/ActiveCryptid.js";
import { Comment } from "../Models/Comment.js";
import { Cryptid } from "../Models/Cryptid.js";
import { server } from "./AxiosService.js"

class CryptidsService {
  async activeCryptid(id) {
    
    const res = await server.get(`api/cryptids/${id}`)
    // console.log(res.data);
    appState.activeCryptids = new ActiveCryptid(res.data)
    // console.log(appState.activeCryptids);
  }
  
  async dislikePost(id) {
    const res = await server.post(`/api/dislikes`, { id })
   console.log(res.data);
    let cryptid = appState.cryptids.find(c=> c.id == id)
    // @ts-ignore
    console.log(cryptid);
    // @ts-ignore
    cryptid.dislikes++
    // @ts-ignore
    console.log(cryptid);
    appState.cryptids = appState.cryptids
  }
  async getComments(id) {

    const res = await server.get(`/api/cryptids/${id}/comments`)
    console.log(res.data);
    appState.comments = res.data.map(c => new Comment(c))
    console.log(appState.comments);
  }

  async likePost(id) {
    const res = await server.post(`/api/likes`, { id })
    console.log(res.data);
    let cryptid = appState.cryptids.find(c=> c.id == id)
    // @ts-ignore
    // console.log(cryptid);
    // // @ts-ignore
    cryptid.likes++
    // // @ts-ignore
    // console.log(cryptid);
    appState.cryptids = appState.cryptids
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