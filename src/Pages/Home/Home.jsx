import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Header/Banner/Banner";
// import Phones from "../../Component/Cards/Cards";
import Cards from "../../Component/Cards/Cards";
import Card from "../../Component/Card/Card";


const Home = () => {
       // const phones = useLoaderData()
       // console.log(phones)
       const cards = useLoaderData()
       console.log(cards)
       return (
         <div>
           <Banner></Banner>
           <Cards></Cards>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
             {
               // phones.map(phone=><Phone phone={phone}></Phone> )
             }

             {cards.map((card) => (
               <Card card={card}></Card>
             ))}
           </div>
         </div>
       );
};

export default Home;