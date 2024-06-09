import { TAcademicSemesterCode, TAcademicSemesterName, TMonth, TacademicSemesterNameCodeMaper } from "./academicSemester.interface";

export const Months: TMonth[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
 export const AcademicSemesterName: TAcademicSemesterName[] = [
    'Autumn',
    'Summar',
    'Fall',
  ];
 export const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];
 export const academicSemesterNameCodeMaper:TacademicSemesterNameCodeMaper={
  Autumn:"01",
  Summar:"02",
  Fall:"03"
}