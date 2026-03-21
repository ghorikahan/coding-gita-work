import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productData = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const resData = await fetchData.json();
      console.log(resData);
      setProduct(resData);
    };
    productData();
  }, [product]);


  return (
    <>
      <h1>product page</h1>
      {product.map((ele) => {
        return <h2 key={ele.id}>{ele.title}</h2>
      })}
    </>
  )
}

export default App
