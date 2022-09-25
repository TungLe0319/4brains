import { ActiveCryptidsController } from './Controllers/ActiveCryptidsController.js';
import { AuthController } from './Controllers/AuthController.js';
import { CommentsController } from './Controllers/CommentsController.js';
import { CryptidsController } from './Controllers/CryptidsController.js';

class App {
  authController = new AuthController();

  cryptidsController = new CryptidsController();

  activeCryptidsController = new ActiveCryptidsController();
  commentsController = new CommentsController();
}

// @ts-ignore
window.app = new App();
