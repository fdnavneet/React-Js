// import { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";



const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate =useNavigate() 

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const reactions = reactionsElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");

  //   userIdElement.current.value = "";
  //   postTitleElement.current.value = "";
  //   postBodyElement.current.value = "";
  //   reactionsElement.current.value = "";
  //   tagsElement.current.value = "";
  
  // };

  return (
    <Form method="POST" className="create-post" /* onSubmit={handleSubmit} */>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name= "title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};


export async function createPostAction (data) { 
  const formData = await data.request.formData()
  const postData= Object.fromEntries(formData)
  postData.tags = postData.tags.split(" ")
  console.log(postData);
  
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((post) => {
        // console.log(post)
        addPost(post);
        //  navigate('/');
      });
     return redirect("/")
    }
export default CreatePost;
