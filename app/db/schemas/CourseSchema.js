import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema({
    title: String,
    content: String,
    videoLink: String
})

const weekSchema = new mongoose.Schema({
    weekNumber: Number,
    topics: [topicSchema]
})

const courseSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: "true"
    },
    title: String,
    progress: Number,
    duration: Number,
    weeks: [weekSchema]
})

export default mongoose.models.Course || mongoose.model('Course', courseSchema) 