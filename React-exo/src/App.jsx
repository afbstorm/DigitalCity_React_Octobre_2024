import { useState } from 'react';
import './App.css'
// import Welcome from './Exercice 1/components/Welcome'
import List from './Exercice 2/components/list';
import Counter from './Exercice 3/components/Counter';
import Calculatrice from './Exercice 4/Calculatrice';
import Form from './Exercice 5/form';
import DateDuJour from './Exercice 6/DateDuJour/DateDuJour';
import Horloge from './Exercice 6/Horloge/Horloge';

function App() {

  // EXERCICE 1
  /* const nom = 'Aurélien';
  const age = 37; */

  // EXERCICE 2
  /* const products = [
    {
      id: 1,
      price: 0.89,
      name: 'Pomme',
      isPromo: false
    },
    {
      id: 2,
      price: 759.99,
      name: 'Steam Deck',
      isPromo: false
    },
    {
      id: 3,
      price: 90.99,
      name: 'Rail pass',
      isPromo: true
    }
  ] */

  // EXERCICE 5
  /*   
    const [formDatas, setFormDatas] = useState([]);
    const handleRegistration = (attendee) => {
    setFormDatas(formDatas => ([...formDatas, attendee])) 
    }
    */

    // EXERCICE 6
    const [isDate, setIsDate] = useState(false);

  return (
    <>
      {/* EXERCICE 1 */}
      {/* <Welcome name={nom} age={age} /> */}

      {/* EXERCICE 2 */}
      {/* <List productList={products} /> */}

      {/* EXERCICE 3 */}
      {/* <Counter inc={10} /> */}

      {/* EXERCICE 4 */}
      {/* <Calculatrice />  */}

      {/* EXERCICE 5 */}
      {/* <Form onDataSubmit={handleRegistration} attendees={formDatas} /> */}

      {/* EXERCICE 6 */}
      {
        isDate ? (<DateDuJour />) : (<Horloge />)
      }
      <button onClick={() => setIsDate(prevValue => !prevValue)}>Change de vue</button>
    </>
  )
}

export default App
