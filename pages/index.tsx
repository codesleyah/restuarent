import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();

  const Login = () => {
      router.push("/dashboard");
  }

  return (
 
      <div className="w-screen h-screen bg-hero-bg flex flex-col items-center justify-center">
        {/* header start */}
        <div className="flex row w-full h-16 bg-red-900 items-center justify-between px-32 absolute top-0">
           <h1 className="text-3xl text-white font-bold">ZIMBABWEAN TRADITIONAL FOOD</h1>
        </div>
        {/* header end */}
        <div className="bg-white shadow rounded flex flex-col gap-4 p-4 w-96">
          <button  className="bg-red-900 text-white p-4 rounded" onClick={Login}>
            Proceed
          </button>
        </div>
      </div>
   
  )
}
