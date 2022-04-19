import Header from "./Components/Header";
import LeftSection from "./Components/LeftSection";
import MainSection from "./Components/MainSection";


export default function LandingPage() {
  return (
    <div className="mx-auto container ">
      <Header />
      <div className="flex space-x-40 ">
        <div className="w-[30%]">
        <LeftSection />

        </div>
      

       

      
      

 <div className="w-[100%] pl-10">
 <MainSection />

 </div>
     

     
      

     
      
      
      </div>
     
    </div>
  );
}
