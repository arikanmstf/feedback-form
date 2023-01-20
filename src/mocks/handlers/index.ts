// in general, I prefer to use MSW to create mock api
// so that I can use the same fixtures for both storybook, cypress, and jest
// and no need to do any extra configuration
// these handlers used by: Cypress, storybook.
import { createComment, getComments } from './comment';
import { getUserAttributes } from './session';

const handlers = [getUserAttributes, createComment, getComments];

export default handlers;
