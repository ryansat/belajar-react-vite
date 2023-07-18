function Test() { 
    return (
      <h1>
          Props Kurang Dari 100
      </h1>
    );
}

function Component2() { 
  return (
      <h2>
        Props Lebih Dari 100
      </h2>
  );
}

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}


function Component3() { 
  return ( 
      <AlertButton message="Hello My Name is budi!">
        Show My Identity!
      </AlertButton>
  );
}

export default function TryComponent(props) {
  return (
    <Component3/>
  );
  // if (props.data > 100) {
  //   return (
  //     <section>
  //       <Component2 />
  //       <h1>{props.data}</h1>
  //     </section>
  //   );
  // } else { 
  //   return (
  //     <section>
  //       < Test/>
  //       <h1>{props.data}</h1>
  //     </section>
  //   );
  // }

}
