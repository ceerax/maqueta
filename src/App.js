
import './App.css';
import Navbar from './components/navbar';
import Body from './components/bodys';
import Body3 from './components/body3';
import Footer from './components/footer';




function App() {
  return (
    <div >
      <header className="App-header">
        <Navbar />
        <Body />
      </header>
      <Body3 />
      <header className="App-header2">
        <Footer />
      </header>
    </div>
  );
}

export default App;
