import React from "react";
import Image from "next/image";

function Card(props) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <Image className="mx-auto" src={props.src} width={100} height={100} />
      <h3 className="text-lg font-semibold pt-8 pb-2">{props.head}</h3>
      <p className="py-2">{props.body}</p>
      <h4 className="py-1 text-teal-600">{props.sub}</h4>
      {props.subBody.map((cont) => {
        return <p className="text-gray-800 py-1">{cont}</p>;
      })}
    </div>
  );
}

export default Card;
