import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CryptidSchema } from '../models/Cryptid.js';
import { DislikesSchema } from '../models/Dislike.js';
import { LikeSchema } from '../models/Like.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Cryptids = mongoose.model('Cryptid', CryptidSchema)

  Likes = mongoose.model('Like', LikeSchema)

  Dislikes = mongoose.model('Dislike', DislikesSchema)
}

export const dbContext = new DbContext()
