import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './route/router';


function App() {
  return (
    <div className='container max-w-6xl'>

      <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;
