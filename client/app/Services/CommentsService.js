import { appState } from "../AppState.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";

class CommentsService {
  async removeComment(id) {
    await server.delete(`api/comments/${id}`)
   let  leftovers  = appState.comments.filter((c) => c.id != id)
 appState.comments = leftovers
    appState.emit('activeCryptids')
  }




  async addComment(formData) {
    let id = formData.cryptidId
    const res = await server.post(`/api/comments/${id}`, formData)
    console.log(res.data);
    appState.comments = [new Comment(res.data), ...appState.comments]
    appState.emit('activeCryptids')
  }

 
}

export const commentsService = new CommentsService();
