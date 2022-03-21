import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Person from './component/Country/Person/Person';

function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}
/* function Dash() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Available countries:{countries.length}</h1>
      {
        countries.map(country => Country(country))
      }
    </div>

  );
}
function Country(props) {
  console.log(props);

  return (


    <div>

      <h1>Name : {props.name.common}</h1>
      <h1>{props.flag}</h1>
      <p>Capital:{props.capital}</p>
    </div>
  );
} */
export default App;
