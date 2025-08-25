import type { Post } from '../../../entities/post/model/types';

export function filterByLength(posts: Post[], maxCount: number): Post[] {
  if (maxCount === 0) return posts;
  return posts.slice(0, maxCount);
}
