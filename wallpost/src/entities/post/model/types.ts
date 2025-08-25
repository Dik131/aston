interface Comment {
  id: string | number;
  body: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
}

export type { Post, Comment };