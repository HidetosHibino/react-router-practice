import { useParams } from "react-router-dom"

const Article = () => {
  let params = useParams()

  return (
    <>
      <h1>{params.articleId}</h1>
      <div>article page</div>
    </>
  );
};

export default Article;