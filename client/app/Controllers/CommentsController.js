//TODO add/Delete

import { appState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

export class CommentsController{

  constructor() {
    
  }




  drawCommentForm(){
   let template = ''
    template += /*html */ ` <form onsubmit="app.commentsController.addComment()">
    <div class="d-flex ">
    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="body" name="body" placeholder="">
    <label for="body">Comment</label>
    </div>
    <div class="d-flex align-items-center">
    <small>
    <button type="submit" class="btn btn-sm">Submit</button>
    </small>
    
    </div>
    </div>
    </form>`;
setHTML('commentForm',template)

  }


  //TODO send a comment that has the body and acticeCrpytid.id attached so when we post it to api/comments
  // the comments has the CrpytidId on it to filter back later
  async addComment(){
   
try {
  // @ts-ignore
  window.event.preventDefault()
  // @ts-ignore
  const form = window.event.target
  const formData = getFormData(form)
  // @ts-ignore
  const activeCryptid = appState.activeCryptids.id
    // @ts-ignore
    await commentsService.addComment(formData, activeCryptid)
  } catch (error) {
    console.error('[addComment]',error)
    Pop.error(error)
  }
  }

  async deleteComment(){

  }
}