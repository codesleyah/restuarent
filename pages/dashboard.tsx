import Link from 'next/link'
import { useState } from 'react'
import NewPayment from '../components/modals/newpayment';
import Image from 'next/image';

export default function Home() {

    let images = [
        {
            "img": "/images/hut.jpg",
            "desc": "The home of traditional food",
        },
        {
            "img": "/images/hut1.jpg",
            "desc": "Experience the african feel while you are with us",
        },
        {
            "img": "/images/hut2.jpg",
            "desc": "Zimbabwean finest cultural spot",
        },
        {
            "img": "/images/eat.jpg",
            "desc": "1068 mbavazuva",
        },
        {
            "img": "/images/eat2.jpg",
            "desc": "Top class catering",
        },
        {
            "img": "/images/eat3.jpg",
            "desc": "Top class catering",
        },
         {
            "img": "/images/fly.jpg",
            "desc": "Enjoy the traditional afican drink from our wide range of selection",
        },
         {
            "img": "/images/fly2.jpg",
            "desc": "We also offer a virety of africantraditional meals",
        },
       
    ]

  const [showmodal, setShowmodal] = useState(false)
  const [counter, setCounter] = useState(0)

  return (
 
      <div className="w-screen h-screen bg-hero-bg flex flex-col pb-16 pt-32">
        {showmodal && <NewPayment onClose={()=> setShowmodal(false)}/>}
        {/* header start */}
        <div className="flex row w-full h-16 bg-red-900 items-center justify-between px-32 absolute  top-0">
           <h1 className="text-3xl text-white font-bold">ZIMBABWEAN  TRADITIONAL FOOD</h1>
        </div>
        {/* header end */}
       <div className="w-full h-full px-32 flex flex-col items-center justify-center">
         <div className="shadow  flex flex-col gap-4 p-4 h-full  w-full bg-gray-100">
         <div className="flex flex-row items-center justify-between bg-red-900 text-white p-4">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <div className="flex flex-row items-center gap-4">
                <Link href="/faults">
                    <text className="text-base font-semibold">Meals</text>
                </Link>
                <Link href="/readings">
                    <text className="text-base font-semibold">Beverages</text>
                </Link>
                <Link href="/">
                    <text className="text-base font-semibold">Exit</text>
                </Link>
            </div>  
         </div>
         <div className="grid grid-cols-2 w-full h-full w-full  justify-between bg-red-900 gap-4 p-4">
            <div className="w-full h-full bg-white relative">
                <Image src={images[counter].img} alt="img" fill />
            </div>
            <div className="w-full h-full bg-white flex flex-col justify-center items-center gap-12">
                <div className="flex p-4 bg-red-900">
                    <h1 className="text-4xl font-bold">Virtual Tour</h1>
                </div>
                <div className="flex p-4">
                    <p className="font-semibold text-xl">{images[counter].desc}</p>
                </div>
                <div className="flex p-4 flex-row items-center justify-between w-1/2">
                    <button className="text-white text-xl bg-red-900 p-4 rounded-full"  onClick={()=>{counter > 1 ? setCounter(counter-1): null}}>
                        Prev
                    </button>
                    <button className="text-white text-xl bg-red-900 p-4 rounded-full" onClick={()=>{counter < images.length - 1? setCounter(counter+1): null}}>
                        Next
                    </button>
                </div>
                
            </div>
         </div>
        </div>
       </div>
      </div>
   
  )
}
