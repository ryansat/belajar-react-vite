import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TryComponent from './components/Test'
import Galery from './components/Galery'
import ForTwo from './components/ForTwo'
import ForGather from './components/ForGather'

function App() {
  return (
    <>
      {/* <TryComponent/> */}
      <Galery/>
    </>
  )
}

export default App


// function Recipe({ drinkers }) {
//   return (
//     <ol>    
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <Gallery/>
//       {/* <ForTwo/>
//       <Recipe drinkers={2} />
//       <ForGather/>
//       <Recipe drinkers={4} />
//       <TryComponent/> */}
//     </section>
//   );
// }


