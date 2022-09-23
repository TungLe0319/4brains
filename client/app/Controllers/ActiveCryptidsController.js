import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function drawActiveCryptid() {
  if (appState.activeCryptid == null) {
    return
  }
  setHTML('commentsModal', appState.activeCryptid.CommentsModalTemplate)


}


export class ActiveCryptidsController {
  constructor() {
    appState.on('activeCryptids', drawActiveCryptid)
  }
}