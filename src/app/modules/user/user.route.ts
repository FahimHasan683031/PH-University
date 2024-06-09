import express from 'express';
import { UserControllers } from './user.controller';
import { createStudentValidationSchema } from '../student/student.validation';
import validateSchema from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateSchema(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
