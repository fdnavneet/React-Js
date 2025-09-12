import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};

const postListProvider = ({ children }) => {
  const [postList, dipatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reaction, tages) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reaction} ${tages}`);
    dipatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tages: tages
      }
    })

  };

  const deletePost = (postId) => {
    dipatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <div>
      <PostList.Provider
        value={{
          postList: postList,
          addPost: addPost,
          deletePost: deletePost,
        }}
      >
        {children}
      </PostList.Provider>
    </div>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go To Mumbai",
    body: "Hi Friends I am Going To Mumbai enjoy a lot. peace out",
    reaction: 2,
    userId: "user-9",
    tages: ["vaction", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Pass Ho Gya Bhai",
    body: "4 sal ki masti k bad vi ho gye hai pass",
    reaction: 15,
    userId: "user-10",
    tages: ["graduating", "unbelieble"],
  },
];

export default postListProvider;
