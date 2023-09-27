import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const {id, img, title, category, description, price,color } = card;



  return (
    <div className="">
      <Link to={`cards/${id}`}>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-[312px] h-[194px]" src={img} alt="" />
          </figure>
          <div className="card-body">
            <div className="">
              <h4 className="card-title">{category}</h4>
              <h1 className="">{title}</h1>
            </div>
            <p></p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;