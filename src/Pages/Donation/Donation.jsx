

import React, { useEffect, useState } from "react";
import DonationCard from "./Donationcard/DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonation(donationItems);

      const total = donationItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );

      setTotalPrice(total);
    } else {
      setNofound("No Data Found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setDonation([]);
    setNofound("No Data Found");
  };

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {donation.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="px-5 bg-green-200 block mx-auto"
              >
                Delete All Favorites
              </button>

              <h1>Total price: {totalPrice}</h1>
            </div>
          )}

          <div className="grid grid-cols-2 gap-5">
            {isShow
              ? donation.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>

          {donation.length > 2 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 bg-green-200 block mx-auto"
            >
              {isShow ? "" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;



// optional
// import React, { useEffect, useState } from "react";
// import DonationCard from "./Donationcard/DonationCard";
// import { Pie } from "react-chartjs-2"; // Import the Pie component from Chart.js

// const Donation = () => {
//   const [donation, setDonation] = useState([]);
//   const [noFound, setNofound] = useState(false);
//   const [isShow, setIsShow] = useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const donationItems = JSON.parse(localStorage.getItem("donation"));

//     if (donationItems) {
//       setDonation(donationItems);

//       const total = donationItems.reduce(
//         (preValue, currentItem) => preValue + currentItem.price,
//         0
//       );

//       setTotalPrice(total);
//     } else {
//       setNofound("No Data Found");
//     }
//   }, []);

//   const handleRemove = () => {
//     localStorage.clear();
//     setDonation([]);
//     setNofound("No Data Found");
//   };

//   // Calculate the percentage for each item
//   const percentageData = donation.map((card) => ({
//     label: card.title, // Item title as label
//     value: ((card.price / totalPrice) * 100).toFixed(2), // Calculate the percentage
//   }));

//   const data = {
//     labels: percentageData.map((item) => item.label),
//     datasets: [
//       {
//         data: percentageData.map((item) => item.value),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.7)",
//           "rgba(54, 162, 235, 0.7)",
//           "rgba(255, 206, 86, 0.7)",
//           "rgba(75, 192, 192, 0.7)",
//           "rgba(153, 102, 255, 0.7)",
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       {noFound ? (
//         <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
//       ) : (
//         <div>
//           {donation.length > 0 && (
//             <div>
//               <button
//                 onClick={handleRemove}
//                 className="px-5 bg-green-200 block mx-auto"
//               >
//                 Delete All Favorites
//               </button>

//               <h1>Total price: {totalPrice}</h1>
//             </div>
//           )}

//           <div className="grid grid-cols-2 gap-5">
//             {isShow
//               ? donation.map((card) => (
//                   <DonationCard key={card.id} card={card}></DonationCard>
//                 ))
//               : donation
//                   .slice(0, 4)
//                   .map((card) => (
//                     <DonationCard key={card.id} card={card}></DonationCard>
//                   ))}
//           </div>

//           {donation.length > 2 && (
//             <button
//               onClick={() => setIsShow(!isShow)}
//               className="px-5 bg-green-200 block mx-auto"
//             >
//               {isShow ? "" : "See more"}
//             </button>
//           )}

//           {/* Render the Pie Chart */}
//           <div className="my-4">
//             <h2>Pie Chart: Donation Percentage</h2>
//             <Pie data={data} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Donation;
