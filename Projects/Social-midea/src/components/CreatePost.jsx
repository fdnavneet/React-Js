import { useContext, useRef } from "react";
import  { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const{addPost}=useContext(PostList)

  const  userIdElement=useRef()
  const  postTitlElement=useRef()
  const  postBodyElement=useRef()
  const  reactionElement=useRef()
  const  tagesElement=useRef()

  const handleSubmit = (e) =>{
     e.preventDefault();
     const userId=userIdElement.current.value
    const postTitle=postTitlElement.current.value
    const postBody=postBodyElement.current.value
    const reaction=reactionElement.current.value
    const tages=tagesElement.current.value.split(' ')
     
    // to empty inputfilled
    userIdElement.current.value = "";
    postTitlElement.current.value ="";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagesElement.current.value ="";

    
    addPost(userId,postTitle,postBody,reaction,tages)
  }

  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id Here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User Id "
            
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitlElement}
            className="form-control"
            id="text"
            placeholder="Hoe are you felling today....."
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className="form-control"
            id="text"
            placeholder="Tell Us More About ...."
            
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="userId"
            placeholder="How Many People Reacted on this post "
            
          />
        </div>

         <div className="mb-3">
          <label htmlFor="tags" className="form-label">
           Enter Your Tag Hare
          </label>
          <input
            type="text"
            ref={tagesElement}
            className="form-control"
            id="userId"
            placeholder="Please enter tags using space  "
            
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
