import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import Posts, { dataLoader } from "./Posts";
import Post, { postLoader } from "./Post";

const Layout = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/posts">Posts</Link>
      <div>
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/home" element={<Home />} />
      <Route path="/posts" element={<Posts />} loader={dataLoader} />
      <Route path="/posts/:id" element={<Post />} loader={postLoader} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
