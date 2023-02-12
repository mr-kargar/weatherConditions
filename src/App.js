import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='container max-w-6xl'>
    <Header/>
    <Search/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
