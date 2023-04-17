import { useParams } from "react-router-dom"

const Comment = () => {
  let params = useParams();
  return (
      <div>
          <h1>List of Comment-{params.commentId} of Article-{params.articleId} go here!</h1>
      </div>
  )
};


export default Comment;