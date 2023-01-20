import { rest } from 'msw';

import { Comment } from '../../context/GlobalContext';
import { url } from '../../services/comment';
import { comments } from '../fixtures';

const tempComments = [];

export const createComment = rest.post<Comment>(url, async (req, res, ctx) => {
  const data = await req.json();

  // Don't do { id: Date.now() } at production. Ids can be mixed up since there might be several calls at the same time
  // This is just a mock solution for demo purposes.
  tempComments.push({ ...data, createdAt: Date.now(), id: Date.now() });

  return res(
    ctx.delay(100),
    ctx.cookie('tempComments', JSON.stringify(tempComments)),
    ctx.json(data),
  );
});

export const getComments = rest.get<Comment[]>(url, async (req, res, ctx) => {
  return res(
    ctx.delay(),
    ctx.json(
      [...tempComments, ...comments].sort((first, second) => second.createdAt - first.createdAt),
    ),
  );
});
