import React,{useState ,useRef} from 'react'
import "../style/createpost.scss"
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router'
import logo from '../../../assets/Instanamelogo.png'


const CreatePost = () => {
    const [caption, setCaption] = useState('')
    const postImageInputFieldRef = useRef(null)

    const navigate = useNavigate()

    const {loading, handleCreatePost} = usePost()

    async function handleSubmit(e){
        e.preventDefault()

        const file = postImageInputFieldRef.current.files[0]

       await handleCreatePost(file,caption)

       navigate('/')
    }
    function backBtn(){
    navigate("/")
    }

    if(loading){
        return (
            <main>
                <h1 style={{color:'gray'}}>Creating Post....</h1>
            </main>
        )
    }
  return (
    <main className="create-post-page">
      <div className="form-container">
        <button className='backBtn' onClick={backBtn}><i class="ri-arrow-left-s-line"></i>Back</button>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
            <label className='post-image-label' htmlFor="postImage"><i class="ri-image-add-line"></i> Select Image</label>
            <input ref={postImageInputFieldRef} hidden type="file" name="postImage" id='postImage'/>
            <input 
            value={caption}
            onChange={(e)=>{setCaption(e.target.value)}}
            type="text" name='caption' id='caption' placeholder='Enter caption' />
            <button className='button primary-button'>create post</button>
        </form>
      </div>
    </main>
  );
}

export default CreatePost
