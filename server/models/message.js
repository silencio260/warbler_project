const mongoose = require('mongoose')
const User = require('./user')


const messageSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
            maxLength: 160
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    },
        {
            timestamps: true
        }
)

messageSchema.pre('remove', async function(next){
    try{
        let foundUser = this.User.findById(this.user)
        foundUser.messages.remove(this.id)
        await foundUser.save()  
        return next()
    }catch(err){
        return next(err)
    }

})


const Message = mongoose.model('Message', messageSchema)

module.exports = Message;








