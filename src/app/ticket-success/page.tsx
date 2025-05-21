//const image = localStorage.getItem('uploadedImage');
//{image && <img src={image} alt="Imagem carregada" />}

import Image from "next/image";

export default function TicketSuccess() {
  return (


    <div className="flex items-center justify-center flex-col space-y-4">
      <h1 className="text-5xl font-bold">
        {" "}
        Congrats, <span className="color-orange p-1">NomeExample</span>! <br />{" "}
        Your ticket is ready.
      </h1>
      <p className="text-custom">
        {" "}
        We've emailed your ticket to <br />
        <span className="text-orange-500">email@example.com</span> and will send
        updates in <br /> the run up to the event.
      </p>




<div className="w-xl p-2">
          <div className="mt-10 bg-ticket flex flex-col justify-center  px-8">

     <div className="mb-8">
          <Image 
          src="logo-full.svg"
           alt="Ticket" 
           width={250} 
           height={200} />

          <p 
          className="text-custom ml-14 mt-3">
            Jan 31, 2025 / Austin, Tx
            </p>
            
        </div>

        <div className="flex gap-4 ">
          <span className=" border-2 border-amber-400  flex items-center justify-center w-fit p-8 relative top-3 rounded-md">
            .
          </span>

          <div className="top-12 relative">
            <h2 className="text-2xl">Lucas Santos</h2>

            <div className="flex ">
              <Image
                src="icon-github.svg"
                alt="Ticket"
                width={20}
                height={20}
              />

              <p className="text-custom ml-1">@Lucassantos96</p>
            </div>
          </div>
        </div>

          </div>

</div>
    </div>
  );
}
