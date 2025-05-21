"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export default function UploadBox() {
  // useRef para acessar o input invisível
  const inputRef = useRef<HTMLInputElement>(null);

  // Estado para guardar o nome do arquivo enviado
  const [fileName, setFileName] = useState("");

  // Função chamada quando o usuário solta o arquivo dentro da caixa
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0]; // pega o primeiro arquivo arrastado

    if (file) {
      setFileName(file.name); //Salva o nome do arquivo no estado
    }
  };

  // Função chamada quando o usuário escolhe um arquivo via clique
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; //Pega o primeiro arquivo

    if (!file) {
      return
    }else{
    setFileName(file.name); // salva o nome do arquivo no estado
    }
    const reader = new FileReader();

     // Quando a imagem for carregada
    reader.onloadend = () => {
      const base64 = reader.result as string;

      // Salva no localStorage
      localStorage.setItem('UploadBox', base64);
      console.log('Imagem salva no localStorage!');
  };
  // Converte a imagem para base64
    reader.readAsDataURL(file);
}

  return (
    <div className="flex flex-col  items-center mt-8">
      <h2 className="right-35 relative mb-1">Upload Avatar</h2>

      {/*Caixa que recebe o clique e o arraste */}
      <div
        onClick={() => inputRef.current?.click()} // simula clique no input escondido
        onDrop={handleDrop} //Quanto o arquivo e solto
        onDragOver={(e) => e.preventDefault()} // permite o drop
        className="border border-dashed w-sm mx-auto p-4 rounded-md bg-custom cursor-pointer flex justify-center items-center flex-col gap-2"
      >
        <div className="p-2 bg-custom rounded-md w-fit shadow shadow-amber-50 cursor-pointer flex items-center ">
          <Image
            src="/icon-upload.svg"
            alt="icon upload"
            width={20}
            height={20}
          />
        </div>
        {/* Se tiver arquivo, mostra o nome */}
        <p>{fileName}</p>
        <h2 className="text-custom">Drag and drop or click to upload</h2>
      </div>

      {/* Input de arquivo escondido, que é ativado ao clicar na caixa */}
      <input
        type="file"
        accept="image/*" // aceita apenas imagens
        onChange={handleFileChange}
        ref={inputRef}
        className="hidden" // esconde o input visualmente
      />
<div className="flex items-center gap-2 right-8 relative mt-1">
    
            <Image
                src="/icon-info.svg"
                alt="icon Info"
                width={20}
                height={20}
              />
              <p className="text-xs text-custom">Upload your photo (Jpeg or Png, max size: 500kb)</p>
</div>
    </div>
  );
} 
