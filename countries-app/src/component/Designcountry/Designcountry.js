import React from 'react';
import './Designcountry.css'

const Designcountry = (props) => {
  const capital1 = props.country?.capital?.[0];

  const languages1 = props.country.languages
  // const languages2 = Object.values(languages1[0])
  const languages2 = languages1 ? Object.values(languages1)[0] : 'Not found'
  const currency1 = props.country?.currencies
  // console.log(currency1);
  let currency2 = '';
  for (const key in currency1) {

    if (currency1.hasOwnProperty(key)) {
      currency2 = key;


    }
    else {
      currency2 = 'not found'
    }
  }

  //  currency1.map( currency => {
  //     for( let key in currency1) {
  //     if( currency1.hasOwnProperty( key ) ) {
  //     currency1 = currency1[key];
  //     }
  //     }
  //     })
  return (

    <div className='pad'>

      <p>Currency :{currency2}</p>
      <p> capital : {capital1} </p>
      <p>Language : {languages2}</p>

      <p>Population:{props.population}</p>
      <p>region:{props.region}</p>

    </div>
  );
};

export default Designcountry;

