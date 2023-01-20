export type SessionData = {
  userId: number;
  language?: 'en' | 'de' | 'tr';
};

export type GlobalContextState = {
  session?: SessionData;
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  content: string;
  stars: number;
  createdAt: number;
};

export type CommentAccumulation = {
  total: number;
  stars: number;
};
