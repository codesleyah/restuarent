import React, { useState } from "react";
import Image from "next/image";

interface ModalProps {
    onClose : () => void;
}

const NewReading = ({onClose}: ModalProps) => {

    const [counter, setCounter] = useState(0)
    let images = ["/images/hari.jpg","/images/hari1.jpg" ]
    return (
        <div className="absolute bg-transparent-white flex flex-col items-center justify-center p-32 top-0 z-10 h-screen w-screen">
            <div className="bg-white shadow rounded w-1/2 h-full flex flex-col p-4 gap-4">
                <div className="flex flex-row justify-end ">
                    <button  className="border-2 border-gray-200 text-black p-2 rounded" onClick={onClose}>
                        Close
                    </button>
                </div>
                <div className="flex flex-col gap-4 p-4 h-full items-center justify-center">
                     <div className="grid grid-cols-3 w-full h-full p-4 gap-4 relative">
                        <Image src={images[counter]} alt="img" fill />
                    </div>
                    <div className='flex flex-row justify-between p-4 w-full'>
                        <button  className="bg-red-900 text-white p-2 rounded" onClick={()=>{counter > 0 ? setCounter(counter-1): null}}>
                            Prev
                        </button> 
                        <button  className="bg-red-900 text-white p-2 rounded" onClick={()=>{counter < images.length + 1? setCounter(counter+1): null}}>
                            Next
                        </button>     
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default NewReading