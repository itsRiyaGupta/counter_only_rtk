import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice2";
import PostAuthor2 from "./PostAuthor2";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsList2 = () => {
   const posts =useSelector(selectAllPosts)

   const orderedPosts = posts.slice().sort((a, b)=>b.date.localCompare(a.date))

   const renderedPosts = posts.map(post => (
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
            <PostAuthor2 userId={post.userId} />
            <TimeAgo timestamp={post.date}/>
        </p>
        <ReactionButton post={post}></ReactionButton>
    </article>
   ))

   return(
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
   )
}

export default PostsList2;