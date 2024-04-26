import Post from '@/app/_components/post'

type PostsWidgetProps = {
  postsData: any[]
}

const PostsWidget = (props: PostsWidgetProps) => {
  const { postsData } = props
  const leftSide = postsData.filter((post, i) => i % 2 === 0)
  const rightSide = postsData.filter((post, i) => i % 2 !== 0)

  return (
    <section className="posts px-4 my-8 md:my-16">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 md:gap-8 lg:gap-16">
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