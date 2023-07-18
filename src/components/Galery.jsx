// import { people } from '../utils/data';
// import { getImageUrl } from '../utils/utils';

// export default function Galery() {
//     const listItems = people.map(person =>
//         <li key={person.id}>
//           <img
//             src={getImageUrl(person)}
//             alt={person.name}
//           />
//           <p>
//             <b>{person.name}</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//           </p>
//         </li>
//       );
//       return <ul>{listItems}</ul>;
// }

import { useState } from 'react';
import { sculptureList } from '../utils/data2';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

    function handlePrev() { 
        setIndex(index - 1);
    }

  let sculpture = sculptureList[index];
  return (
      <>
    <button onClick={handlePrev}>
        Prev
    </button>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}