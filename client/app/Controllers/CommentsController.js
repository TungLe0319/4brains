//TODO add/Delete

import { appState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

export class CommentsController{

  constructor() {
  
  }

  async addComment(cryptidId){
   
try {
  // @ts-ignore
  window.event.preventDefault()
  // @ts-ignore
  const form = window.event.target
  let formData = getFormData(form)
  // @ts-ignore
  formData.cryptidId = appState.activeCryptids.id
  // @ts-ignore

    await commentsService.addComment(formData)
  } catch (error) {
    console.error('[addComment]',error)
    Pop.error(error)
  }
  }
  async deleteComment(){

  }
}