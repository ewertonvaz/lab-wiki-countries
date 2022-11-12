import './App.css';
import { useState } from "react";
import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Routes, Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [ allCountries ] = useState( countries.sort( (a, b) => a.name.common.localeCompare(b.name.common)) );
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList allCountries={allCountries} />
          <Routes>
              {/* <Route path="/" element={ <HomePage allProjects={allProjects} /> } />
              <Route path="/about" element={ <AboutPage /> } />
              <Route path="*" element={ <ErrorPage /> } /> */}

              <Route path="/:countryID" element={ <CountryDetails allCountries={allCountries}/> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
