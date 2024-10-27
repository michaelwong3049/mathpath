import mongoose from 'mongoose'
import Course from "@/app/db/schemas/CourseSchema";
import dbConnect from "@/app/db/mongodb";
import { NextResponse } from "next/server";
import User from "@/app/db/schemas/UserSchema";

export async function POST(request){
    await dbConnect()

    const res = await request.json()
    try {
        const newCourse = new Course({
            user_id: res.user_id,
            title: res.title,
            progress: res.progress,
            duration: res.duration,
            weeks: res.weeks
        })
        await newCourse.save()
        const updatedUser = await User.findByIdAndUpdate(
            newCourse.user_id,
            { $push: { courses: newCourse._id }},
            { new: true }
        )
        await updatedUser.save()
        return NextResponse.json({ message: "User Updated" })
    } catch(error) {
        return NextResponse.json({ error: "Error creating newCourse"})
    }

}