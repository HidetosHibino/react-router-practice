import { Outlet } from "react-router-dom";
import { useState } from "react";

const Posts = () => {
  const [currentUser, setCurrentUser] = useState([/*array of post content*/])
  return (
      <div>
          <h1>List of posts go here!</h1>
          <Outlet context={[currentUser]}/>
      </div>
  )
};


export default Posts;