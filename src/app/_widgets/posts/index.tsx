import Post from '@/app/_components/post'
import ScrollInView from '@/app/_animations/scroll_in_view'

type PostsWidgetProps = {
  postsData: any[]
}

const PostsWidget = (props: PostsWidgetProps) => {
  const { postsData } = props
  const leftSide = postsData.filter((post, i) => i % 2 === 0)
  const rightSide = postsData.filter((post, i) => i % 2 !== 0)

  return (
    <section className="posts my-8 px-4 md:my-16">
      <div className="mx-auto hidden max-w-[1440px] md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
        <div className="left">
          {leftSide &&
            leftSide.map((post, i) => (
              <ScrollInView key={i}>
                <Post post={post} />
              </ScrollInView>
            ))}
        </div>
        <div className="right">
          {rightSide &&
            rightSide.map((post, i) => (
              <ScrollInView key={i}>
                <Post post={post} />
              </ScrollInView>
            ))}
        </div>
      </div>
      <div className="md:hidden">
        {postsData &&
          postsData.map((post, i) => (
            <ScrollInView key={i}>
              <Post post={post} />
            </ScrollInView>
          ))}
      </div>
    </section>
  )
}

export default PostsWidget
