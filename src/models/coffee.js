'use strict';

import mongoose from 'mongoose';

const CoffeeSchema = mongoose.Schema({
  name: {type:String, required:true},
  roast: {type:String, required:true},
  coffee: {type:String, required:true},
});

export default mongoose.model('coffee', CoffeeSchema);

