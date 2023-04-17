import { useOutletContext } from "react-router-dom";

const NewPost = () => {
  const [currentUser] = useOutletContext()

  return (
    <div>
      This is NewPost Page
    </div>
  );
};

export default NewPost;