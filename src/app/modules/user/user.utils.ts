import { TAcademicSemester } from '../academicSemister/academicSemester.interface';
import { User } from './user.model';

// find last user id
const findLastStudentId = async () => {
  const lastId = await User.findOne(
    { role: 'student' },
    { id: 1, _id: 0 },
  ).sort({createdAt:-1}).lean();
  return lastId?.id ? lastId.id.substring(6) : undefined;
};
// year semester 4digit number
export const generateStudentId = async (payload: TAcademicSemester) => {
  const currentId =await findLastStudentId() || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};