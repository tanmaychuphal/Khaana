// import logo from './/logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About'
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import RestaurantMenu from './components/RestaurantMenu';

const App =() =>{
  return(
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
  )
};

export const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>
  },
  
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

// export default App;
