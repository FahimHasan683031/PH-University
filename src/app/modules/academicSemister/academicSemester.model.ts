import { Schema, model } from 'mongoose';

import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.const';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: AcademicSemesterName,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemesterCode,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: Months,
    required: true,
  },
});

academicSemesterSchema.pre("save",async function(next){
  const isExists = await AcademicSemester.findOne({
    name:this.name,
    year:this.year
  })
  if(isExists){
    throw new Error("Academic semester allready exists!")
  }
  next()

  
})

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
