import Header from "./Components/Header";
import LeftSection from "./Components/LeftSection";
import MainSection from "./Components/MainSection";


export default function LandingPage() {
  return (
    <div className="mx-auto container ">
      <Header />
      <div className="flex  ">
        <div className="w-[50%]">
        <LeftSection />

        </div>
      

       

      
      

 <div className="w-[90%]  pl-10">
 <MainSection />

 </div>
     

     
      

     
      
      
      </div>
     
    </div>
  );
}
