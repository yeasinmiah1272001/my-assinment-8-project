import React from 'react';

const DonationCard = ({card}) => {
       const { id, img, title, category, description, price, color } = card; 
       return (
         <div>
           <div className="hero  bg-base-200 rounded">
             <div className="hero-content flex-col lg:flex-row">
               <img src={img} className="h-36 rounded-lg shadow-2xl" />
               <div>
                 <h1 className="">{category}</h1>
                 <h1>{title}</h1>
                 <p className="py-6">{price}</p>
                 <button className="btn btn-primary">Get Started</button>
               </div>
             </div>
           </div>
         </div>
       );
};

export default DonationCard;