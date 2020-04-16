import React from "react";

import "./Ninjas.css";

const Ninjas = ({ ninjas, deleteNinja }) => {
  //destructuring
  //{ ninjas }
  //equals
  //const ninjas = props.ninjas;
  //equals
  //const { ninjas } = props;
  const ninjaList = ninjas.map((ninja) => {
    // if (ninja.age > 20) {
    //   return (
    //     <div className="ninja" key={ninja.id}>
    //       <div>
    //         <br />
    //         {Math.random() * 10}
    //       </div>
    //       <div>Name: {ninja.name}</div>
    //       <div>Age: {ninja.age}</div>
    //       <div>Belt: {ninja.belt}</div>
    //     </div>
    //   );
    // } else {
    //   return null;
    // }

    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>{Math.random() * 10}</div>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete Ninja
        </button>
      </div>
    ) : null;
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
