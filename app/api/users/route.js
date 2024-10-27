import mongoose from 'mongoose'
import User from '@/app/db/schemas/UserSchema'
import dbConnect from '../../db/mongodb'
import { NextResponse } from 'next/server'

export async function GET(request){
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('_id')
    if (userId) {
      const user = await User.findById(userId)
      return NextResponse.json(user)
    } else {
      const users = User.find()
      return NextResponse.json({ users })
    }
}

export async function POST(request){
  try { 
    await dbConnect()
  } catch(error){
    return NextResponse.json({ error: "Error connecting to the database" })
  }

  const res = await request.json()
  console.log(res.email)

  try{
    const newUser = new User({ email: res.email })
    await newUser.save()
    console.log(newUser)
  } catch(error){
    console.log("Error creating newUser")
  }
    
  return NextResponse.json({ message: "User Created" })
}