import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import request from './request';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <h1 style={{color:"darkred"}}>Netflix</h1>
      <Banner fetchurl ={request.fetchNetflixOriginals}/>
      <Row title="NetflixOriginal" fetchurl={request.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchurl={request.fetchTopRated} />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
      <Row title="Action Movies" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
