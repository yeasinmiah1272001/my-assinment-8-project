

// import React from "react";

// const CardDetails = ({ card }) => {
//   const { id, img, title, category, description, price, color } = card;

//   const handleAddToDonation =() =>{
//        console.log(card, price)
//   }

//   return (
//     <div>
//       <div className="card card-compact bg-base-100 shadow-xl relative">
//         <figure className="">
//           <img className="w-[1100px] h-[500px]" src={img} alt="Shoes" />
//         </figure>
//         <button onClick={handleAddToDonation} className="btn btn-error absolute mt-[430px] p-4 ml-6 text-white px-3 py-1 rounded">
//           Donate {price}
//         </button>

//         <div className="card-body">
//           <h2 className="card-title text-2xl font-bold">{category}</h2>
//           <p>{description}</p>
//           <div className="card-actions justify-end"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;




// import React from "react";

// const CardDetails = ({ card }) => {
//   const { id, img, title, category, description, price, color } = card;

//   const handleAddToDonation = () => {
//     const addedDonationArray = [];

//     const donationItems = JSON.parse(localStorage.getItem("donation"));

//     //jokhon kisu nai tokhon e if vitor dhukba
//     if (!donationItems) {
//       addedDonationArray.push(card);
//       localStorage.setItem("donation", JSON.stringify(addedDonationArray));
//       swal("Good job!", "Donation added successfully!", "success");
//     } else {
//       const isExits = donationItems.find((card) => card.id === id);

//       if (!isExits) {
//         addedDonationArray.push(...donationItems, card);
//         localStorage.setItem("donation", JSON.stringify(addedDonationArray));
//         swal("Good job!", "Donation added successfully!", "success");
//       } else {
//         swal("Error!", "No duplicate !", "error");
//       }
//     }

//     // localStorage.setItem('test',JSON.stringify([{name:"hasib"},{name:"ph"}]))
//   };


//   return (
//     <div>
//       <div className="card card-compact bg-base-100 shadow-xl relative">
//         <figure className="">
//           <img className="w-[1100px] h-[500px]" src={img} alt="Shoes" />
//         </figure>
//         <button
//           onClick={handleAddToDonation}
//           className="btn btn-error absolute mt-[430px] p-4 ml-6 text-white px-3 py-1 rounded"
//         >
//           Donate {price}
//         </button>

//         <div className="card-body">
//           <h2 className="card-title text-2xl font-bold">{category}</h2>
//           <p>{description}</p>
//           <div className="card-actions justify-end"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;



import React from "react";
import swal from "sweetalert";

const CardDetails = ({ card }) => {
  const { id, img, title, category, description, price, color } = card;

  const handleAddToDonation = () => {
    const donationItems = JSON.parse(localStorage.getItem("donation")) || [];

    const isExists = donationItems.some((item) => item.id === id);

    if (!isExists) {
      donationItems.push(card);
      localStorage.setItem("donation", JSON.stringify(donationItems));
      swal("Good job!", "Donation added successfully!", "success");
    } else {
      swal("Error!", "No duplicates allowed!", "error");
    }
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl relative">
        <figure className="">
          <img className="w-[1100px] h-[500px]" src={img} alt="Shoes" />
        </figure>
        <button
          onClick={handleAddToDonation}
          className="btn btn-error absolute mt-[430px] p-4 ml-6 text-white px-3 py-1 rounded"
        >
          Donate {price}
        </button>

        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{category}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;








