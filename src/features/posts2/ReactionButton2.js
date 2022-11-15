import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice2";
import ReactionButton from './ReactionButton2';

const reactionEmoji = {
    thumbsUp : '👍',
    wow : '😲',
    heart : '❤',
    rocket : '🚀',
    coffee : '☕'
}


const ReactionButton = ({post}) => {

    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji])=>{
        return (
            <button key={name} type="button" className="reactionButton"
            onClick={()=>
            dispatch(reactionAdded({ postId : post.id, reaction : name}))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })

  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButton