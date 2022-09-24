import { appState } from "../AppState.js";
import { cryptidsService } from "../Services/CryptidsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawActiveCryptid() {
  if (appState.activeCryptids == null) {
    return
  }


  setHTML('activecryptid', appState.activeCryptids.CommentsModalTemplate)
}


function drawComments() {
  let template = ''
  let leftover = appState.comments.filter(c => c.cryptidId == appState.activeCryptids.id)
  leftover.forEach(c => template += c.CommentTemplate)
  setHTML('active-comments', template)
}

export class ActiveCryptidsController {
  constructor() {
    appState.on('activeCryptids', drawActiveCryptid);
    // appState.on('activeCryptids', drawComments);
    // appState.on('activeCryptids', drawComments);

    this.getComments()

  }

  async getComments() {
    try {
      await cryptidsService.getComments();
    } catch (error) {
      console.error('[getComments]', error);
      Pop.error(error);
    }
  }
}