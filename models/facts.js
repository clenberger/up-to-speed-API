const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FactSchema = new Schema ({
    text: { type: String },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date},
});

FactSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;
  
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    next();
});

module.exports = mongoose.model("Fact", FactSchema);