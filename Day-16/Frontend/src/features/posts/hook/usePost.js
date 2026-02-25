import {getFeed, createPost, likePost,unLikePost} from '../services/post.api'
import { useContext,useEffect } from 'react'
import { PostContext } from '../post.context'

export const usePost =() =>{
      const context = useContext(PostContext)
      const {loading, setLoading, post, feed, setFeed} = context
      
      const handleGetFeed = async () =>{
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts.reverse())
        setLoading(false)
      }

      const handleCreatePost = async(imageFile, caption)=>{
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
        setLoading(false)
      }

      const handleLike = async (post) => {
        await likePost(post);
        await handleGetFeed();
      };

      const handleUnlike = async (post) => {
        await unLikePost(post);
        await handleGetFeed();
      };


      useEffect(()=>{
        handleGetFeed()
      },[])

      return {loading,feed,post,handleGetFeed,handleCreatePost, handleLike,handleUnlike}
}