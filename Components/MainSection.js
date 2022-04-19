/* eslint-disable @next/next/no-img-element */

export default function MainSection() {
    return (
      <div className="bg-[#1F2937]  ">
          |<div className="mx-auto container">
              <div className="flex justify-center  items-center border-[#374151] border-b-[1px]">
                  <h1 className="text-[30px] font-semibold text-[#F9FAFB] my-[32px]">Leaderboard</h1>

              </div>
              <div>
              <table className="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
          <div className="flex">
              The Sliding Mr. Bones (Next Stop, Pottersville)
              <img src="./Images/Li4.svg" alt=" " className="ml-5" /> </div></td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
              </div>
              

          </div>
          
        
  
      </div>
     
    );
  }