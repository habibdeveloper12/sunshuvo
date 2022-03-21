import React, { useEffect, useState } from 'react';
import Designcountry from '../Designcountry/Designcountry';


const Country = () => {
  const [countrys, setCountrys] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountrys(data))
  }, [])

  return (
    <div>
      {
        countrys.map(countrymap => <Designcountry
          country={countrymap}
          population={countrymap.population}
          region={countrymap.region}

        /*       we can do one best way 
                   country={countrymap} */

        ></Designcountry>)
      }
      <h1>Its for country: {countrys.length}</h1>

    </div>
  );
};

export default Country;