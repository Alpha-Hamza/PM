/* eslint-disable @next/next/no-img-element */

export default function MainSection() {
  return (
    <div className="bg-[#1F2937]   ml-8 mt-[12px] pb-[6%] rounded-[12px]  ">
      <div className="mx-auto container max-w-[90%]">
        <div className="flex justify-center  items-center border-[#374151] border-b-[1px]">
          <h1 className="text-[30px] font-semibold text-[#F9FAFB] my-[32px]">
            Leaderboard
          </h1>
        </div>
        <div className="">
          <table className="table-auto  w-full  ">
            <thead className="">
              
              <tr className=" ">
                <th className="text-[12px] text-[#9CA3AF] py-10 pl-[22px]">Rank</th>
                <th className="text-[12px] text-[#9CA3AF]">Username</th>
                <th className="text-[12px] text-[#9CA3AF] pl-[58px] ">
                  Joined
                </th>
                <th className="text-[12px] text-[#9CA3AF] pl-[66px]">
                  Messages
                </th>
                <th className="text-[12px] text-[#9CA3AF] pl-[66px]">
                  Time spent
                </th>
                <th className="text-[12px] text-[#9CA3AF] pl-[66px]">
                  Following
                </th>
                <th className="text-[12px] text-[#9CA3AF] pl-[66px]">
                  Acc. Score
                </th>
              </tr>

              
            </thead>
            <tbody>
              
              <tr className="relative bg-[#0EA5E9]  rounded-[12px]   ">
             
                <td className="text-[14px] text-[#FFFFFF] pl-[28px]   ">#1</td>
                <div className="flex items-center ">
                  <td className="flex items-center space-x-[8px] ml-[30px] h-[70px]   ">
                    <img src="./Images/Mi.svg" alt=" " className="" />
                    <img src="./Images/Mi1.svg" alt=" " className="" />
                    <h1 className="text-[14px] text-[#FFFFFF]">Rick_291</h1>
                  </td>
                </div>

                <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
                  12/01/21
                </td>
                <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7612</td>
                <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
                  45h 12m
                </td>
                <div className="h-[70px] flex  items-center">
                  <td className="flex  items-center pl-[100px]   ">
                    <img src="./Images/Mi4.svg" alt=" " className="" />

                    <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                      +9 more
                    </p>
                  </td>
                </div>

                <td className="text-[14px] text-[#FFFFFF] pl-[75px] ">6,271</td>
                <td className="flex justify-center items-center border-2 rounded-full w-[46px] h-[46px] mx-[35px]  ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />
                </td>
                
              </tr>
              <tr className="relative   ">
             
                <td className="text-[14px] text-[#FFFFFF] pl-[28px]   ">#2</td>
                <div className="flex items-center ">
                  <td className="flex items-center space-x-[8px] ml-[30px] h-[70px]   ">
                    <img src="./Images/Mi5.svg" alt=" " className="" />
                    <img src="./Images/Mi6.svg" alt=" " className="" />
                    <h1 className="text-[14px] text-[#FFFFFF]">Joyce64</h1>
                  </td>
                </div>

                <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
                  12/01/21
                </td>
                <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7512</td>
                <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
                43h 10m
                </td>
                <div className="h-[70px] flex  items-center">
                  <td className="flex  items-center pl-[100px]   ">
                    <img src="./Images/Mi4.svg" alt=" " className="" />

                    <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                    +8 more
                    </p>
                  </td>
                </div>
               
                <td className="text-[14px] text-[#FFFFFF] pl-[75px]    ">5,238</td>
                  
              
                
                <td className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px]  bg-[#374151] ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />
                </td>
                
              </tr>
              <tr className="relative   ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px]   ">#3</td>
             <div className="flex items-center ">
               <td className="flex items-center space-x-[8px] ml-[30px] h-[70px]   ">
                 <img src="./Images/Mi7.svg" alt=" " className="" />
                 <img src="./Images/Mi8.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Kaya.Feil</h1>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7402</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             42h 12m
             </td>
             <div className="h-[70px] flex  items-center">
               <td className="flex  items-center pl-[100px]   ">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +7 more
                 </p>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[75px] ">4,533</td>
             <td className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px]  bg-[#374151]">
               <img src="./Images/Mi3.svg" alt=" " className="" />
             </td>
             
           </tr>
           <tr className="relative   ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px]   ">#4</td>
             <div className="flex items-center ">
               <td className="flex items-center space-x-[8px] ml-[30px] h-[70px]   ">
                 <img src="./Images/Mi5.svg" alt=" " className="" />
                 <img src="./Images/Mi9.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Julien72</h1>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7320</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             41h 02m
             </td>
             <div className="h-[70px] flex  items-center">
               <td className="flex  items-center pl-[100px]   ">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +6 more
                 </p>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[75px] ">4,255</td>
             <td className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] bg-[#374151]  ">
               <img src="./Images/Mi3.svg" alt=" " className="" />
             </td>
             
           </tr>
           <tr className="relative   ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px]   ">#5</td>
             <div className="flex items-center ">
               <td className="flex items-center space-x-[8px] ml-[30px] h-[70px]   ">
                 <img src="./Images/Mi7.svg" alt=" " className="" />
                 <img src="./Images/Mi10.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Arthur.Osinski</h1>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7280</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             40h 01m
             </td>
             <div className="h-[70px] flex  items-center">
               <td className="flex  items-center pl-[100px]   ">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +5 more
                 </p>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[75px] ">4,160</td>
             <td className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] bg-[#374151] ">
               <img src="./Images/Mi3.svg" alt=" " className="" />
             </td>
             
           </tr>
           <tr className="relative   ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px]   ">#6</td>
             <div className="flex items-center ">
               <td className="flex items-center space-x-[8px] ml-[30px] h-[70px]   ">
                 <img src="./Images/Mi5.svg" alt=" " className="" />
                 <img src="./Images/Mi11.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Pearl_Doyle</h1>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7260</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             39h 12m
             </td>
             <div className="h-[70px] flex  items-center">
               <td className="flex  items-center pl-[100px]   ">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +4 more
                 </p>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[75px] ">4,000</td>
             <td className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] bg-[#374151] ">
               <img src="./Images/Mi3.svg" alt=" " className="" />
             </td>
             
           </tr>
           <tr className="relative   ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px]   ">#7</td>
             <div className="flex items-center ">
               <td className="flex items-center space-x-[8px] ml-[30px] h-[70px]   ">
                 <img src="./Images/Mi5.svg" alt=" " className="" />
                 <img src="./Images/Mi12.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">David29</h1>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7160</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             38h 16m
             </td>
             <div className="h-[70px] flex  items-center">
               <td className="flex  items-center pl-[100px]   ">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +3 more
                 </p>
               </td>
             </div>

             <td className="text-[14px] text-[#FFFFFF] pl-[75px] ">3,938</td>
             <td className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] bg-[#374151]  ">
               <img src="./Images/Mi3.svg" alt=" " className="" />
             </td>
             
           </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
