import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';

const initialState = [
    { id : '1', title : 'Learning Redux toolkit', content : "I've heard good things." , 
    date : sub(new Date(), { minute: 10}).toISOString(),
    reactions : {
        thumbsUp : 0,
        wow : 0,
        heart : 0,
        rocket : 0,
        coffee : 0
    }
    },
    { id : '2', title : 'Slices...', content : "The more I say slice, the more I want pizza.",
    date : sub(new Date(), { minute: 5}).toISOString(),
    reactions : {
        thumbsUp : 0,
        wow : 0,
        heart : 0,
        rocket : 0,
        coffee : 0
    }
    }
]

const postsSlice2 = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdded(state, action){
            state.push(action.payload)
        },
        prepare(title, content, userId) {
            return{
                payload : {
                    id : nanoid(),
                    title,
                    content,
                    date : new Date().toISOString(),
                    userId,
                    reactions : {
                        thumbsUp : 0,
                        wow : 0,
                        heart : 0,
                        rocket : 0,
                        coffee : 0
                    }
                }
            }
        },
        reactionAdded(state, action){
            const {postId, reaction} =action.payload
            const existingPost =state.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            } 
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice2.actions

export default postsSlice2.reducer;