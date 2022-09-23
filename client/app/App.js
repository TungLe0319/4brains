import { AuthController } from './Controllers/AuthController.js';
import { CryptidsController } from "./Controllers/CryptidsController.js";


class App {
  authController = new AuthController();
 
  cryptidsController = new CryptidsController()
}

// @ts-ignore
window.app = new App()
