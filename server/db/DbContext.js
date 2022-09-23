import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CryptidSchema } from '../models/Cryptid.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Cryptids = mongoose.model('Cryptid', CryptidSchema)
}

export const dbContext = new DbContext()
