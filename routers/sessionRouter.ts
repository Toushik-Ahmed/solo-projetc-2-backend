import { Router } from 'express';

import {
  getAllProposedSession,
  getSessionByDate,
  propose,
} from '../controllers/proposeController';
import { authMiddleware } from '../middlewares/auth';

const proposeRouter = Router();
proposeRouter.post('/interviewdashboard/dashboard', authMiddleware, propose);
proposeRouter.get(
  '/interviewdashboard/dashboard',
  authMiddleware,
  getAllProposedSession
);
proposeRouter.post(
  '/interviewdashboard/dashboard/getSessionByDate',
  authMiddleware,
  getSessionByDate
);

export default proposeRouter;
