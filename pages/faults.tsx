import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import NewFault from '../components/modals/newfault';


export default function Faults() {

       
    const [showmodal, setShowmodal] = useState(false)

    const modal = () => {
        setShowmodal(true)
    }
  return (
 
      <div className="w-screen h-screen bg-hero-bg flex flex-col pb-16 pt-32">
        {showmodal && <NewFault  onClose={()=> setShowmodal(false)}/>}
        {/* header start */}
        <div className="flex row w-full h-16 bg-red-900 items-center justify-between px-32 absolute  top-0">
           <h1 className="text-3xl text-white font-bold">ZIMBABWEAN  TRADITIONAL FOOD</h1>
        </div>
        {/* header end */}
       <div className="w-full h-full px-32 flex flex-col items-center justify-center">
         <div className="shadow  flex flex-col gap-4 p-4 h-full  w-full bg-gray-200">
         <div className="flex flex-row items-center justify-between bg-red-900 p-4 text-white">
            <button onClick={modal}>
                 <h1 className="text-2xl font-bold">Our Meals</h1>
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
                        <th className="p-2 font-bold">
                            <button>
                                STARTERS
                            </button>
                        </th>
                        <td className="p-2 font-bold"></td>
                        <td className="p-2 font-bold"></td>
                        <td className="p-2 font-bold"></td>
                        <td className="p-2 font-bold"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="p-2">Pumpkin & Chicken </td>
                        <td className="p-2">soup</td>
                        <td className="p-2">Matemba salad</td>
                        <td className="p-2">Masawu salad</td>
                        <td className="p-2">Nhopi</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">Howa soup (mushroom)</td>
                        <td className="p-2">Blocked sewer pipe</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-red-900 text-white">
                        <th className="p-2">
                            <button >
                                MAIN COURSES
                            </button>
                        </th>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">Brown Sadza(sorghum,millet, rapoko) served with lamb, sausage, chicken, makaya, goat sausage </td>
                        <td className="p-2">Traditional rice with nyama yehanga and quail bird</td>
                        <td className="p-2">Matemba salad</td>
                        <td className="p-2">Masawu salad</td>
                        <td className="p-2">Nhopi</td>
                    </tr>
                    <tr className="bg-red-900 text-white">
                        <th className="p-2">
                            <button >
                                VEGIES
                            </button>
                        </th>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">Muboora une dovi</td>
                        <td className="p-2">Nyevhe inedovi</td>
                        <td className="p-2">Munyemba</td>
                        <td className="p-2">Covo</td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-red-900 text-white">
                        <th className="p-2">
                            <button>
                                BURGERS
                            </button>
                        </th>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">Traditional (Fish and Chicken burger)</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-red-900 text-white">
                        <th className="p-2">
                            <button>
                                DESSERT
                            </button>
                        </th>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-2">Mauyu Moosse</td>
                        <td className="p-2">Mutandabota</td>
                        <td className="p-2">Traditional Fruit Salad(Nyii, tsvanzva)</td>
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
