import { appState } from "../AppState.js"
import { cryptidsService } from "../Services/CryptidsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function drawCryptids(){
  let template = ''

  appState.cryptids.forEach(c => template += c.CryptidTemplate)
  setHTML('posts',template )
}

export class CryptidsController{
  constructor(){
this. getCryptids()
appState.on('cryptids', drawCryptids)
  }

  async getCryptids(){
try {
    await cryptidsService.getCryptids()
  } catch (error) {
    console.error('[getCrytpids]',error)
    Pop.error(error)
  }
  }
}