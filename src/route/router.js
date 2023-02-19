import { createBrowserRouter } from "react-router-dom";
import HomeDescription from "../component/HomeDescription";
import Main from "../view/Main";
import PersianVersion from "../view/PersianVersion";
import Setting from "../view/Setting";
import Version1 from "../view/Version1";
import Version2 from "../view/Version2";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path:"/",
                element:<HomeDescription />
            },
            {
                path: "/1",
                element: <Version1 />
            },
            {
                path:"/2",
                element:<Version2/>
            },
            {
                path:"/persian",
                element:<PersianVersion/>
            },
            {
                path:"/setting",
                element:<Setting/>
            }
        ]
    },
   
])

export default router