import Post from '@/app/_components/post'

type PostsWidgetProps = {
  postsData: any[]
}

const PostsWidget = (props: PostsWidgetProps) => {
  const { postsData } = props
  const leftSide = postsData.filter((post, i) => i % 2 === 0)
  const rightSide = postsData.filter((post, i) => i % 2 !== 0)

  return (
    <section className="posts px-8 my-8 md:my-16">
      <div className="gap-16 max-w-[1440px] mx-auto grid md:grid-cols-2 gap-x-8">
        <div className="left">
        {leftSide && leftSide.map((post, i) => (
          <Post key={i} post={post} />
        ))}
        </div>
        <div className="right">
        {rightSide && rightSide.map((post, i) => (
          <Post key={i} post={post} />
        ))}
        </div>
      </div>
    </section>
  )
}

export default PostsWidget