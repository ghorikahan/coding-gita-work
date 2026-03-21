// import React from 'react'
// import Card from './card.jsx'
// const App = () => {
//   return (
//     <div>
//       <Card />
//     </div>
//   )
// }

// export default App




import React, { useEffect, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(query);
    }, 3000);

    return () => setTimeout(id);
  }, [query]);
  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        placeholder="Enter text ... "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <h4>Text:{query}</h4>
      <h5>Debouncing Text:{debounce}</h5>
    </div>
  );
};
export default App;