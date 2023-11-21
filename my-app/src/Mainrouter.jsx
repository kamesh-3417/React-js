import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Example from "./Example";
import Header from "./common component/Header";
// import { Children } from 'react';

// const Classroutes = React.lazy(() => import("./Classcompo/Classroutes"));
const Denish = React.lazy(() => import("./Class-component/Classrouters"))
// const Functionroutes = React.lazy(() =>
//   import("./Functioncompo/Funtionroutes")
// );

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
      </>
    ),
  },
  {
    path: "/Home",
    element: (
      <>
        <Header />
        <Home/>
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Header/><About/>
      </>
    ),
  },
  {
    path: "/Product",
    element: (
      <>
        <Header />
        <Product />
      </>
    ),
  },
  {
    path: "/Example",
    element: (
      <>
        <Header />
        <Example />
      </>
    ),
    // Children: [
    //     {
    //         path : "Classcompo/*",
    //         // element : <Suspense fallback={<h1>ruko shber karo........</h1>}><Denish/></Suspense>
    //         element : <Suspense fallback={<h1>ruko shber karo........</h1>}><Classroutes/></Suspense>
    //     },
    //     {
    //         path : "Functioncompo/*",
    //         element : <Suspense fallback={<h1>hello....</h1>}><Functionroutes/></Suspense>
    //     },
    // ]

    children: [
      {
        path: "Class-component/*",
        element: (
          <Suspense fallback={<h1>ruko shbar karo........</h1>}>
            <Denish />
          </Suspense>
        ),
        // element: (
        //   <Suspense fallback={<h1>ruko shber karo........</h1>}>
        //     <Classroutes />
        //   </Suspense>
        // ),
      }
    //   ,
    //   {
    //     path: "Functioncompo/*",
    //     element: (
    //       <Suspense fallback={<h1>hello....</h1>}>
    //         <Functionroutes />
    //       </Suspense>
    //     ),
    //   },
    ],
  },
]);

export default Mainrouter;