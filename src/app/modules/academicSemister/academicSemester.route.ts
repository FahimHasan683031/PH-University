import express from 'express';
import validateSchema from '../../middlewares/validateRequest';
import { createAcademicSemesterValidationSchema } from './academicSemester.validation';
import { academicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateSchema(createAcademicSemesterValidationSchema),
  academicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
