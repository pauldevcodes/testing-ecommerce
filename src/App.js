import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from "./components/Navbar";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
      },

    ]
  },


])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
