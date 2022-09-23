import { ActiveCryptidsController } from "./Controllers/ActiveCryptidsController.js";
import { AuthController } from './Controllers/AuthController.js';
import { CryptidsController } from "./Controllers/CryptidsController.js";


class App {
  authController = new AuthController();

  cryptidsController = new CryptidsController()

  activeCryptidsController = new ActiveCryptidsController()
}

// @ts-ignore
window.app = new App()
