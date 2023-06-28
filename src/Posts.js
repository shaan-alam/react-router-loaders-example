import { useLoaderData, useNavigation, Link } from "react-router-dom";

const api = "https://jsonplaceholder.typicode.com/posts";

const Data = () => {
  const result = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading!</h1>;
  }

  return (
    <div>
      {result.map((res) => (
        <div key={res.id}>
          <Link to={`/posts/${res.id}`}>
            <h1>{res.title}</h1>
          </Link>
          <p>{res.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;

export const dataLoader = async () => {
  const res = await fetch(api);
  const jsonResult = await res.json();

  return jsonResult;
};
