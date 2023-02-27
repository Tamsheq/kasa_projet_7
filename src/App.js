import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/Kasa/",
        element: <Home />
    },
    {
        path: "/logement/:id",
        element: <Logement />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: "*",
        element: <Error />
    },
]);

function App() {
        return (
          <>
            <RouterProvider router={router}/>
          </>
        );
}

export default App;