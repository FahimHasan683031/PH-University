import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

import catchAsyng from '../../utils/catchAsyng';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsyng(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semister is created succesfully',
    data: result,
  });
});

export const academicSemesterControllers = {
  createAcademicSemester,
};
