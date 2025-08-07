import { PostCard } from '../../entities/post/ui/PostCard'

const mockPosts = [
  { id: 1, title: 'Заглушка 1', body: 'Контент поста 1' },
  { id: 2, title: 'Заглушка 2', body: 'Контент поста 2' },
]

export const PostList = () => {
  return (
    <>
      {mockPosts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </>
  )
}
