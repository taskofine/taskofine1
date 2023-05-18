import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className='font-bold text-3xl'>כאן עובדים</h1>
        <Image
          src="/assets/images/working.png"
          alt="Working"
          className=""
          width={300}
          height={300}
        />
         <h1 className='font-bold text-3xl'>!בהצלחה</h1>
      </div>




    </main>
  )
}
