import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function drawActiveCryptid() {
  if (appState.activeCryptids == null) {
    return
  }


  setHTML('activecryptid', appState.activeCryptids.CommentsModalTemplate)

}


export class ActiveCryptidsController {
  constructor() {
    appState.on('activeCryptids', drawActiveCryptid)

  }
}