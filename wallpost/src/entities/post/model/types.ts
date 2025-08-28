interface Comment {
  id: string | number;
  body: string;
}

interface Post {
  id: number;
  userId?: number;
  title: string;
  body: string;
  comments?: Comment[];
}

export type { Post, Comment };