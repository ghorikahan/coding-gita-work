import React, { useEffect, useState } from 'react'


const Api2 = () => {
    const[card,setCard] = useState([]);
    const[loading,setLoading] = useState(true);


    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data)=>{
            setCard(data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    if(loading) {
        return <h2>Loading...</h2>
    }
  return (
    <>
      {
        card.map((item,index)=>{
            <p key={index}>{item.id}</p>
        })
      }
    </>
  )
}

export default Api2
