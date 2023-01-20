import { rest } from 'msw';

import { SessionData } from '../../context/GlobalContext';
import { url } from '../../services/session';

const sessionData: SessionData = {
  userId: 134,
  language: 'tr',
};

export const getUserAttributes = rest.get<SessionData>(url, (req, res, ctx) => {
  return res(ctx.json(sessionData));
});
