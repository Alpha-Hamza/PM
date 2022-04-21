import Header from "./Components/Header";
import LeftSection from "./Components/LeftSection";
import MainSection from "./Components/MainSection";
import LastSection from "./Components/LastSection";


export default function LandingPage() {
  return (
    <div className="mx-auto container ">
      <Header />
      <div className="flex space-x-[32px]  ">
       

        <LeftSection />
        

       
      

       

      
      

 <div className="xl:w-full w-[30%]">

 <MainSection />
 
 <LastSection />
 </div>





 
     

     
      

     
      
      
      </div>
     
    </div>
  );
}
