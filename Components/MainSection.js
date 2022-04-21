/* eslint-disable @next/next/no-img-element */

export default function MainSection() {
  return (
    <div className="bg-[#1F2937]   ml-8 mt-[12px] pb-[6%] rounded-[12px] 2xl:w-auto lg:w-[90%]  ">
      <div className="mx-auto container 2xl:w-[90%] ">
        <div className="flex justify-center  items-center border-[#374151] border-b-[1px]">
          <h1 className="text-[30px] font-semibold text-[#F9FAFB] my-[32px]">
            Leaderboard
          </h1>
        </div>
        <div className="">
          <table className="table-auto  xl:w-full    ">
            <thead className="">
              
              <tr className=" ">
                <th className="text-[12px] text-[#9CA3AF] py-10 xl:pl-[22px] lg:pl-5">Rank</th>
                <th className="text-[12px] text-[#9CA3AF]">Username</th>
                <th className="text-[12px] text-[#9CA3AF] xl:pl-[58px] ">
                  Joined
                </th>
                <th className="text-[12px] text-[#9CA3AF] xl:pl-[66px] ">
                  Messages
                </th>
                <th className="text-[12px] text-[#9CA3AF] xl:pl-[66px]">
                  Time spent
                </th>
                <th className="text-[12px] text-[#9CA3AF] xl:pl-[66px]">
                  Following
                </th>
                <th className="text-[12px] text-[#9CA3AF] xl:pl-[66px]">
                  Acc. Score
                </th>
              </tr>

              
            </thead>
            <tbody>
              
              <tr className="relative hover:bg-[#0EA5E9]  rounded-[12px]   ">
             
                <td className="text-[14px] text-[#FFFFFF] pl-[28px]   rounded-l-[12px]
                  ">#1</td>
                <td className="   xl:pl-[30px]  ">
                 <div className="flex justify-center items-center h-[70px] space-x-[8px]">

                 <img src="./Images/Mi.svg" alt=" " className="" />
                 <img src="./Images/Mi1.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Rick_291</h1>
                 </div>
               </td>

                <td className="text-[14px] text-[#FFFFFF] xl:pl-[58px] text-center  ">
                  12/01/21
                </td>
                <td className="text-[14px] text-[#FFFFFF] xl:pl-[70px] text-center ">7612</td>
                <td className="text-[14px] text-[#FFFFFF] xl:pl-[70px] text-center ">
                  45h 12m
                </td>
                <td className="flex justify-center  xl:pl-[100px] text-center  ">
                 <div className="flex justify-center items-center h-[70px]">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px]  ">
                 +9 more
                 </p>

                 </div>
               </td>
             

                <td className="text-[14px] text-[#FFFFFF] xl:pl-[55px]  ">
             <div className="w-[77px] h-[36px] bg-[#374151] flex justify-center items-center rounded-[8px] mx-auto">
             780
               
               </div>
               </td>
                
                <td className="rounded-r-[12px] ">
                  <div className="flex justify-center items-center rounded-full w-[46px] h-[46px] xl:mx-[35px] hover:bg-[#111827] bg-[#374151]   ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />

                  </div>
                 
                  
                  
                </td>

               
               
                
              </tr>
              <tr className="relative hover:bg-[#0EA5E9]   ">
             
                <td className="text-[14px] text-[#FFFFFF] pl-[28px] rounded-l-[12px]   ">#2</td>
                <td className="   pl-[30px] ">
                 <div className="space-x-[8px] flex  items-center h-[70px]">

                 <img src="./Images/Mi5.svg" alt=" " className="" />
                 <img src="./Images/Mi6.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Joyce64</h1>
                 </div>
               </td>

                <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
                  12/01/21
                </td>
                <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7512</td>
                <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
                43h 10m
                </td>
                <td className="flex justify-center  pl-[100px]   ">
                 <div className="flex justify-center items-center h-[70px]">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +8 more
                 </p>

                 </div>
               </td>
             
               
                <td className="text-[14px] text-[#FFFFFF] pl-[55px] ">
             <div className="w-[77px] h-[36px] bg-[#374151] flex justify-center items-center rounded-[8px]">
             780
               
               </div>
               </td>
                  
              
                
                <td className="rounded-r-[12px]  ">
                  <div className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] hover:bg-[#111827] bg-[#374151]   ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />

                  </div>
                  </td>
                
              </tr>
              <tr className="relative hover:bg-[#0EA5E9]  ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px] rounded-l-[12px]   ">#3</td>
             <td className="  pl-[30px] ">
                 <div className="space-x-[8px]  flex  items-center h-[70px]">

                 <img src="./Images/Mi7.svg" alt=" " className="" />
                 <img src="./Images/Mi8.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Kaya.Feil</h1>
                 </div>
               </td>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7402</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             42h 12m
             </td>
             <td className="flex justify-center  pl-[100px]   ">
                 <div className="flex justify-center items-center h-[70px]">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +7 more
                 </p>

                 </div>
               </td>
             

             <td className="text-[14px] text-[#FFFFFF] pl-[55px] ">
             <div className="w-[77px] h-[36px] bg-[#374151] flex justify-center items-center rounded-[8px]">
             780
               
               </div>
               </td>
             <td className="rounded-r-[12px] ">
                  <div className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] hover:bg-[#111827] bg-[#374151]    ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />

                  </div>
                  </td>
             
           </tr>
           <tr className="relative hover:bg-[#0EA5E9]  ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px]  rounded-l-[12px]  ">#4</td>
             <td className="   pl-[30px] ">
                 <div className="space-x-[8px] flex r items-center h-[70px]">

                 <img src="./Images/Mi5.svg" alt=" " className="" />
                 <img src="./Images/Mi9.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Julien72</h1>
                 </div>
               </td>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7320</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             41h 02m
             </td>
             <td className="flex justify-center  pl-[100px]   ">
                 <div className="flex justify-center items-center h-[70px]">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +6 more
                 </p>

                 </div>
               </td>
             

             <td className="text-[14px] text-[#FFFFFF] pl-[55px] ">
             <div className="w-[77px] h-[36px] bg-[#374151] flex justify-center items-center rounded-[8px]">
             780
               
               </div>
               </td>
             <td className="rounded-r-[12px] ">
                  <div className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] hover:bg-[#111827] bg-[#374151]   ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />

                  </div>
                  </td>
             
           </tr>
           <tr className="relative  hover:bg-[#0EA5E9] ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px] rounded-l-[12px]  ">#5</td>
             <td className="   pl-[30px] ">
                 <div className="space-x-[8px] flex  items-center h-[70px]">

                 <img src="./Images/Mi7.svg" alt=" " className="" />
                 <img src="./Images/Mi10.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Arthur.Osinski</h1>
                 </div>
               </td>
             

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7280</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             40h 01m
             </td>
             <td className="flex justify-center  pl-[100px]   ">
                 <div className="flex justify-center items-center h-[70px]">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +5 more
                 </p>

                 </div>
               </td>
             

             <td className="text-[14px] text-[#FFFFFF] pl-[55px] ">
             <div className="w-[77px] h-[36px] bg-[#374151] flex justify-center items-center rounded-[8px]">
             780
               
               </div>
               </td>
             <td className="rounded-r-[12px] ">
                  <div className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] hover:bg-[#111827] bg-[#374151]   ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />

                  </div>
                  </td>
             
           </tr>
           <tr className="relative  hover:bg-[#0EA5E9] ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px] rounded-l-[12px]  ">#6</td>
             <td className="   pl-[30px] ">
                 <div className="space-x-[8px] flex  items-center h-[70px]">

                 <img src="./Images/Mi5.svg" alt=" " className="" />
                 <img src="./Images/Mi11.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">Pearl_Doyle</h1>
                 </div>
               </td>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7260</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             39h 12m
             </td>
             <td className="flex justify-center  pl-[100px]   ">
                 <div className="flex justify-center items-center h-[70px]">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +4 more
                 </p>

                 </div>
               </td>
             

             <td className="text-[14px] text-[#FFFFFF] pl-[55px] ">
             <div className="w-[77px] h-[36px] bg-[#374151] flex justify-center items-center rounded-[8px]">
             780
               
               </div>
               </td>
             <td className="rounded-r-[12px] ">
                  <div className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px]  hover:bg-[#111827] bg-[#374151]   ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />

                  </div>
                  </td>
             
           </tr>
           <tr className="relative  hover:bg-[#0EA5E9] ">
             
             <td className="text-[14px] text-[#FFFFFF] pl-[28px] rounded-l-[12px]  ">#7</td>
             <td className="  pl-[30px] ">
                 <div className=" space-x-[8px] flex  items-center h-[70px]">

                 <img src="./Images/Mi5.svg" alt=" " className="" />
                 <img src="./Images/Mi12.svg" alt=" " className="" />
                 <h1 className="text-[14px] text-[#FFFFFF]">David29</h1>
                 </div>
               </td>

             <td className="text-[14px] text-[#FFFFFF] pl-[58px]  ">
               12/01/21
             </td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">7160</td>
             <td className="text-[14px] text-[#FFFFFF] pl-[70px] ">
             38h 16m
             </td>
             <td className="flex justify-center  pl-[100px]   ">
                 <div className="flex justify-center items-center h-[70px]">
                 <img src="./Images/Mi4.svg" alt=" " className="" />

                 <p className="text-[14px] text-[#FFFFFF] opacity-[50%] pl-[5px] ">
                 +3 more
                 </p>

                 </div>
               </td>
             
             <td className="text-[14px] text-[#FFFFFF] pl-[55px] ">
             <div className="w-[77px] h-[36px] bg-[#374151] flex justify-center items-center rounded-[8px]">
             780
               
               </div>
               </td>
             <td className="rounded-r-[12px] ">
                  <div className="flex justify-center items-center  rounded-full w-[46px] h-[46px] mx-[35px] hover:bg-[#111827] bg-[#374151]    ">
                  <img src="./Images/Mi3.svg" alt=" " className="" />

                  </div>
                  </td>
             
           </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
