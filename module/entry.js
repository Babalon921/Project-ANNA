
const mongoose = require("mongoose")
var major = { w: "majority", wtimeout: 10000 };

const entrySchema = mongoose.Schema({
    uid: Number,
    title: String,
    info: String,
    thub: String,
    c1:Boolean,
    c2:Boolean,
    c3:Boolean,
    c4:Boolean,
    c5:Boolean,
    c6:Boolean,
    c7:Boolean,
    c8:Boolean,
    c9:Boolean,
    c10:Boolean,
    c11:Boolean,
    c12:Boolean,
});
entrySchema.index({title: 'text', 'info': 'text'});


module.exports = mongoose.model("Entry",entrySchema);
