import mongoose from "mongoose";
const schema = new mongoose.Schema({name:{type:String,default:"Student"},targetCareer:{type:String,default:"Frontend Developer"},skills:[{name:String,level:{type:Number,min:0,max:5}}],lastAnalysis:Object},{timestamps:true});
export default mongoose.model("Profile",schema);