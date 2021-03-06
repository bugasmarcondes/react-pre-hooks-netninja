import React from "react";

const Ninjas = ({ ninjas }) => {
  //destructuring
  //{ ninjas }
  //equals
  //const ninjas = props.ninjas;
  //equals
  //const { ninjas } = props;
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>{Math.random() * 10}</div>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    );
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
