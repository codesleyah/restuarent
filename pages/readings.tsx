import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import NewReading from '../components/modals/newreading';


export default function Faults() {

    const [showmodal, setShowmodal] = useState(false)

  return (
 
      <div className="w-screen h-screen bg-hero-bg flex flex-col pb-16 pt-32">
        {showmodal && <NewReading onClose={()=> setShowmodal(false)}/>}
        {/* header start */}
        <div className="flex row w-full h-16 bg-red-900 items-center justify-between px-32 absolute  top-0">
           <h1 className="text-3xl text-white font-bold">ZIMBABWEAN  TRADITIONAL FOOD</h1>
        </div>
        {/* header end */}
       <div className="w-full h-full px-32 flex flex-col items-center justify-center">
         <div className="shadow  flex flex-col gap-4 p-4 h-full  w-full bg-gray-200">
         <div className="flex flex-row items-center justify-between bg-red-900 p-4 text-white">
            <button onClick={()=>setShowmodal(true)}>
                <h1 className="text-2xl font-bold">Our Beverages</h1>
            </button>
            <div className="flex flex-row items-center gap-4">
                <Link href="/dashboard">
                    <text className="text-base font-semibold">Home</text>
                </Link>
                <Link href="/readings">
                    <text className="text-base font-semibold">Beverges</text>
                </Link>
                <Link href="/faults">
                    <text className="text-base font-semibold">Meals</text>
                </Link>
                <Link href="/">
                    <text className="text-base font-semibold">Exit</text>
                </Link>
            </div>  
         </div>
         <div className="flex flex-col w-full h-full w-full bg-white justify-between">
             <table>
                <thead className="bg-red-900 text-white">
                    <tr>
                        <th className="p-2 font-bold">MOCKTAILS</th>
                        <td className="p-2 font-bold"></td>
                        <td className="p-2 font-bold"></td>
                        <td className="p-2 font-bold"></td>
                        <td className="p-2 font-bold"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="p-2">Traditional Mutsiga</td>
                        <td className="p-2">Juice</td>
                        <td className="p-2">Traditional mauyu</td>
                        <td className="p-2">Mocktail</td>
                        <td className="p-2">Masau Juice</td>
                    </tr>
                    <tr className="bg-red-900 text-white">
                        <th className="p-2">TRADITIONAL BEVERAGES</th>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">Masau Juice</td>
                        <td className="p-2">Mauyu Juice</td>
                        <td className="p-2">Traditional guava Juice</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-red-900 text-white">
                        <th className="p-2">ALCOHOLIC BEVERAGES</th>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">7 days Traditional beer</td>
                        <td className="p-2">Mucha&apos; za</td>
                        <td className="p-2">Muchaiwa(sorghum, rapoko or millet powder)</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-red-900 text-white">
                        <th className="p-2">FINISHERS</th>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">Traditional Forest Honey</td>
                        <td className="p-2">Traditional Maheu</td>
                        <td className="p-2">Mutandabota</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    
                </tbody>
            </table>
         </div>
        </div>
       </div>
      </div>
   
  )
}
