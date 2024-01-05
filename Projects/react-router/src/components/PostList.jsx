import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import LoadingSpinner from './LoadingSpinner';

function PostList() {
    const {postList, addIntialPosts} = useContext(PostListData);
     const [fetching, setFetching] =useState(false);
     useEffect(() => {
      setFetching(true);

      const controller = new AbortController();
      const signal = controller.signal;
      fetch('https://dummyjson.com/posts', {signal})
      .then(res => res.json())
       .then(data => {
         addIntialPosts(data.posts);
         setFetching(false);
       });
      return  () => {
        console.log("Cleaining up");
        controller.abort();
      } 
     }, [])
     
return (
    <>
    {fetching && <LoadingSpinner />}
    { !fetching && postList.length === 0 && <WelcomeMessage  />}
    {postList.map ((post)=> (
    <Post key={post.id} post ={post}/>
    ))}
        
        
    </>
  )
}

export default PostList