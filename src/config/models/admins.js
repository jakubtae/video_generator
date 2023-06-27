import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    uname: String,
    password: String,
    perms: []
})


export default mongoose.model('Admins', adminSchema)
///creating schema of admin with uname and password