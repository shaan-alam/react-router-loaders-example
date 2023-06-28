import { useLoaderData } from "react-router-dom";

const api = "https://jsonplaceholder.typicode.com/posts";

export const postLoader = async ({ params }) => {
  const res = await fetch(`${api}/${params.id}`);
  const resJson = await res.json();

  return resJson;
};

const Post = () => {
  const result = useLoaderData();
  return (
    <div>
      <h1>
        {result.id} - {result.title}
      </h1>
    </div>
  );
};

export default Post;
