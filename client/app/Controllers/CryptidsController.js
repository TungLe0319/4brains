
import { appState } from '../AppState.js';
import { Cryptid } from '../Models/Cryptid.js';
import { cryptidsService } from '../Services/CryptidsService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML, setText } from '../Utils/Writer.js';

function drawCryptids() {
  
  console.log('Draw Cryptids');
  let template = '';
  
  appState.cryptids.forEach((c) => (template += c.CryptidTemplate));
  setHTML('posts', template);
  ;
}
function sortCryptids(){
  appState.cryptids = appState.cryptids.sort((a, b)=>b.likes - a.likes )
  console.log(appState.cryptids);
}



export class CryptidsController {
  constructor() {
    this.getCryptids();
    appState.on('cryptids', drawCryptids);
    sortCryptids()

  }


  async getCryptids() {
    try {
      await cryptidsService.getCryptids();
      // console.log(appState.cryptids);
    } catch (error) {
      console.error('[getCryptids]', error);
      Pop.error(error);
    }
  }

  async addCryptid() {
    try {
      // @ts-ignore
      window.event.preventDefault();

      // @ts-ignores
      const form = window.event.target;
      const formData = getFormData(form);
      await cryptidsService.addCryptid(formData);
      // @ts-ignore
      form.reset();
      // @ts-ignore
      const postModal = bootstrap.Modal.getOrCreateInstance('#postFormModal');
      postModal.hide();
    } catch (error) {
      console.error('[addCryptid]', error);
      Pop.error(error);
    }
  }

  async removeCryptid(id) {
    try {
      if (await Pop.confirm())
        await cryptidsService.removeCryptid(id)
    } catch (error) {
      console.error('[]', error)
      Pop.error(error)
    }
  }


  async likePost(id) {
    try {
      await cryptidsService.likePost(id)
    } catch (error) {
      console.error('[likePost]', error)
      Pop.error("You've already liked this")
    }
  }
  async dislikePost(id){
    try {
      await cryptidsService.dislikePost(id)
      
    } catch (error) {
      console.error('[disliking]', error);
      Pop.error("You've already disliked this!")
    }
  }


  async activeCryptid(id) {

    try {
      await cryptidsService.activeCryptid(id)

    } catch (error) {
      console.error('[activeCryptid]', error)
      Pop.error(error)
    }
  }


}
