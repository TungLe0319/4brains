import { appState } from "../AppState.js";
import { server } from "./AxiosService.js";

class CommentsService {




  async addComment(formData,activeCryptid){
    debugger
const res = await server.post(`/api/comments`, formData  )
console.log(res.data);
appState.emit('activeCryptids')
  }

async deleteComment(){

}
}

export const commentsService = new CommentsService();
