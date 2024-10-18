import './App.css'
// import Welcome from './Exercice 1/components/Welcome'
import List from './Exercice 2/components/list';
import Counter from './Exercice 3/components/Counter';

function App() {

  // const nom = 'Aurélien';
  // const age = 37;

  const products = [
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
  ]

  return (
    <>
      {/* <Welcome name={nom} age={age} /> */}
      <List productList={products} />
      <Counter inc={10} />
    </>
  )
}

export default App
