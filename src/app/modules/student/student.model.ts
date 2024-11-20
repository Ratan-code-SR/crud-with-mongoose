import { Schema, model } from 'mongoose';
import { Guardian, Student, UserName, LocalGuardian } from './student.interface';


const userNameSchema = new Schema<UserName>({
  firstName:{type:String, required:true},
  middleName:{type:String},
  lastName:{type:String,required:true}
})
const guardianNameSchema = new Schema<Guardian>({
  fatherName:{type:String},
  fatherContactNo:{type:Number,required:true},
  fatherOccupation:{type:String, required:true},
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name:{type:String,required:true},
  occupation:{type:String,required:true},
  contactNo:{type:Number,required:true}

})
const studentSchema =  new Schema<Student>({
  id:{type:String},
  name:userNameSchema,
  gender:{
    type:String,
    enum:["male","female"],
    required:true,
  },
  guardian:guardianNameSchema,
  localGuardian:localGuardianSchema,
  email:{type:String,required:true,},
  contactNumber:{type:String, required:true},
  emergencyContactNo:{type:String},
  bloodGroup:{
  type:String,
  enum:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  isActive:{
    type:String,
    enum:['active', 'blocked'],
    default:'active',
  }
  })



  const StudentModel = model<Student>("Student",studentSchema)
  export default StudentModel;
