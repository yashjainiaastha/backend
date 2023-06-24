const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileName: {
    type: String
  },
  pathName: {
    type: String
    
  },
  userId: {

    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true

  },
  virtualPath: {
    type: String
  }
}, { timestamps: true });

const File = mongoose.model('File', fileSchema);

module.exports = File;
