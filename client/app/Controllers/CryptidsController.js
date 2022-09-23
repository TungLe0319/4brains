import bootstrap from 'bootstrap';
import { appState } from '../AppState.js';
import { cryptidsService } from '../Services/CryptidsService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML } from '../Utils/Writer.js';

function drawCryptids() {
  let template = '';

  appState.cryptids.forEach((c) => (template += c.CryptidTemplate));
  setHTML('posts', template);
}

export class CryptidsController {
  constructor() {
    this.getCryptids();
    appState.on('cryptids', drawCryptids);
  }

  async getCryptids() {
    try {
      await cryptidsService.getCryptids();
    } catch (error) {
      console.error('[getCrytpids]', error);
      Pop.error(error);
    }
  }

  async addPost() {
    try {
      // @ts-ignore
      window.event.preventDefault();

      // @ts-ignores
      const form = window.event.target;
      const formData = getFormData(form);
      await cryptidsService.addPost(formData);
      // @ts-ignore
      form.reset();
      const postModal = bootstrap.Modal.getOrCreateInstance('#postFormModal');
      postModal.hide();
    } catch (error) {
      console.error('[]', error);
      Pop.error(error);
    }
  }
}
