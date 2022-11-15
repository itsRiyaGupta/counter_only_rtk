import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {nanoid} from "@reduxjs/toolkit";

import {postAdded} from "./postsSlice2";
import {selectAllUsers} from "../users/usersSlice";

const AddPostForm2 = () => {
    const dispatch=useDispatch()

    const [title, setTitle]=useState('');
    const[content, setContent]=useState('');
    const[userId, setUserId] =useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavePostClicked = ()=>{
        if(title && content){
            dispatch(
                postAdded(title,content,userId)
            )

            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add a New Post</h2>
        <div>
        <form>
            <label htmlFor="postTitle">Post Title :</label>
            <input type= "text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

            <label htmlFor="postContent">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {usersOptions}
            </select>


            <label htmlFor="postContent">Content :</label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />

            <button 
            type='button'
            onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </form>
        </div>
    </section>
  )
}

export default AddPostForm2;