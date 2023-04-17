import { useParams } from "react-router-dom"

const Comments = () => {
  let params = useParams();
  return (
      <div>
          <h1>List of Comments of Article-{params.articleId} go here!</h1>
      </div>
  )
};


export default Comments;