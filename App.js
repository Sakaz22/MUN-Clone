import './App.css';
import Navbar from './Navbar';
import Largecard from './Largecard';
import Smallcards from './Smallcards';
import LargeImg from './LargeImg';
import Catalogue from './Catalogue'
import gif from './Assets/GifBanner/6032089661832213447.gif'
import Sponsors from './Sponsors';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

      {/*NavBar*/}
      <div className="Navigation">
        <Navbar />
        
      </div>
      {/*Large-Cards*/}
      <div className="card__content">
        <div className="largecards">
          <Largecard />
          <Largecard />
        </div>
        <div className="smallcards">
        <Smallcards />
        <Smallcards />
        <Smallcards />
        <Smallcards />
        </div>
      </div>

      <div className="card__content">
        <div className="largecards">
          <Largecard />
          <Largecard />
        </div>
        <div className="smallcards">
        <Smallcards />
        <Smallcards />
        <Smallcards />
        <Smallcards />
        </div>
      </div>
      {/**/}
      <div className="gif__animation">
        <img src={gif} alt="" className='gif'/>
      </div>
      {/**/}
      <LargeImg />
      {/**/}
      <Catalogue />
      {/**/}
      <LargeImg />
      {/**/}
      <div className="card__content">
        <div className="largecards">
          <Largecard />
          <Largecard />
        </div>
        <div className="smallcards">
        <Smallcards />
        <Smallcards />
        <Smallcards />
        <Smallcards />
        </div>
      </div>
      {/**/}
      <LargeImg />
      {/**/}
      <Sponsors />

      <Footer />
    </div>
  );
}

export default App;
