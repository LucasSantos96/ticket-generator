//const image = localStorage.getItem('uploadedImage');
//{image && <img src={image} alt="Imagem carregada" />}
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TicketSuccess() {
// Estado para guardar os dados do usuário vindos do localStorage
const [userData, setUserData] = useState<any>(null);

// Estado para guardar a imagem do usuário vindos do localStorage
 const [profileImage, setProfileImage] = useState<string | null>(null);

 // useEffect roda uma vez quando o componente carrega (por causa do array vazio [])
useEffect(() => {
   // Busca os dados salvos no localStorage com a chave 'userData'
    const data = localStorage.getItem('userData');

    
    // Se tiver dados, converte de string pra objeto e salva no estado
    if (data) {
      setUserData(JSON.parse(data));
    }

// Pega a imagem base64 salva no localStorage pela chave 'UploadBox'
    const image = localStorage.getItem("UploadBox");
    if (image) {
      setProfileImage(image);
    }

  }, []);

if (!userData) return <p className="color-orange mx-auto w-fit p-1 rounded-md">Carregando...</p>;

  return (


    <div className="flex items-center justify-center flex-col space-y-4">
      <h1 className="text-5xl font-bold">
        {" "}
        Congrats, <span className="color-orange p-1">{userData.userName}</span>! <br />{" "}
        Your ticket is ready.
      </h1>
      <p className="text-custom">
        {" "}
        We've emailed your ticket to <br />
        <span className="text-orange-500">{userData.email}</span> and will send
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
          <div>
            {profileImage ? (
        <img
          src={profileImage}
          alt="Foto do usuário"
          style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }}
        />
      ) : (
        <p>Sem imagem de perfil</p>
      )}
          </div>

          <div className="top-12 relative">
            <h2 className="text-2xl">{userData.userName}</h2>

            <div className="flex ">
              <Image
                src="icon-github.svg"
                alt="Ticket"
                width={20}
                height={20}
              />

              <p className="text-custom ml-1">{userData.github}</p>
            </div>
          </div>
        </div>

          </div>

</div>
    </div>
  ); }
