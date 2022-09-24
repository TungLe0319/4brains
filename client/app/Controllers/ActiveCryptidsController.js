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

function drawComments(){
setHTML('activecryptidcomments', )
}


export class ActiveCryptidsController {
  constructor() {
    appState.on('activeCryptids', drawActiveCryptid);
    appState.on('activeCryptids', drawComments);
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