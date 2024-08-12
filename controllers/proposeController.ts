import { Response } from 'express';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import createSession from '../models/proposeSession/proposeSession';

export async function propose(req: ExtendedRequest, res: Response) {
  const { timezone, date, difficulty, objective } = req.body;
  const proposedSession = await createSession.findOne(
    { _id: req.user?._id },
    { date: date }
  );
  if (proposedSession) {
    return res.status(409).send({ error: '409', message: 'a session exist' });
  }
  try {
    const newSession = await createSession.create({
      timezone,
      date,
      difficulty,
      objective,
      user: req.user?._id,
    });
    return res
      .status(201)
      .send({ message: 'Session created successfully', session: newSession });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProposedSession(
  req: ExtendedRequest,
  res: Response
) {
  try {
    const getAllSessions = await createSession.find({ user: req.user?._id });
    return res.status(201).send(getAllSessions);
  } catch (error) {
    console.log(error);
  }
}

export async function getSessionByDate(req: ExtendedRequest, res: Response) {
  const { date } = req.body;
  try {
    const getSessionByDate = await createSession.find({
      user: req.user?._id,
      date: date,
    });
    return res.status(201).send(getSessionByDate);
  } catch (error) {
    console.log(error);
  }
}
