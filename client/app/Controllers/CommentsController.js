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
    appState.comments.forEach(c => template += c.CommentTemplate)
setHTML('formModal', template)

  }
  async addComment(){
try {
  // @ts-ignore
  window.event.preventDefault()
  // @ts-ignore
  const form = window.event.target
  const formData = getFormData(form)
    await commentsService.addComment(formData)
  } catch (error) {
    console.error('[addComment]',error)
    Pop.error(error)
  }
  }

  async deleteComment(){

  }
}