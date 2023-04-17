import { useParams } from "react-router-dom"

const Post = () => {
  let params = useParams()

  return <h1>{params.postId}</h1>
};

export default Post;