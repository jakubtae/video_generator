import mongoose from 'mongoose'

const storySchema = new mongoose.Schema({
    perm: {type:String, require : true},
    title : {type:String, require : true},
    date: {type:String, require : true},
    published: {type :Boolean, default : false},
    gpt: {type : String, default : null},
    prompt: {type : String, default : null},
    final: {type : String, default : null},
})


export default mongoose.model('Stories', storySchema)
///creating schema of admin with uname and password