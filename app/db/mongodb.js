import mongoose from 'mongoose'

let connection = false

const dbConnect = async () =>{
  if(connection == true){
    console.log("Already connected to MongoDB")
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
      .then(() => {
        connection = true
        console.log("Connected to MongoDB")
    })
  } catch (error) {
    console.log("something went wrong here");
    console.log(error);
    return NextResponse.json({ message: error})
  }
}

export default dbConnect