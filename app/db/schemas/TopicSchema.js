import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema({
    title: String,
    content: String,
    videoLink: String
})

export default { topicSchema }