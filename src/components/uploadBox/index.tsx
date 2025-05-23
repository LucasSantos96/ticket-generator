'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

export default function UploadBox() {
  // useRef para acessar o input invisível
  const inputRef = useRef<HTMLInputElement>(null);

  // Estado para guardar o nome do arquivo enviado
  const [fileName, setFileName] = useState('');

  // Função chamada quando o usuário solta o arquivo dentro da caixa
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // evita o comportamento padrão do navegador

    const file = e.dataTransfer.files[0]; // pega o primeiro arquivo arrastado

    if (file) {
      setFileName(file.name); // salva o nome do arquivo no estado

      // Novo: converte e salva a imagem em base64 no localStorage
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        localStorage.setItem('UploadBox', base64);
        console.log('Imagem salva no localStorage via drop!');
      };
      reader.readAsDataURL(file); // converte o arquivo em base64
    }
  };

  // Função chamada quando o usuário escolhe um arquivo via clique
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // pega o primeiro arquivo

    if (!file) return;

    setFileName(file.name); // salva o nome do arquivo

    // Converte o arquivo em base64 e salva no localStorage
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      localStorage.setItem('UploadBox', base64);
      console.log('Imagem salva no localStorage via clique!');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="right-35 relative mb-1">Upload Avatar</h2>

      {/* Caixa de upload por clique ou arraste */}
      <div
        onClick={() => inputRef.current?.click()} // ativa o input escondido ao clicar
        onDrop={handleDrop} // executa o drop quando o arquivo é solto
        onDragOver={(e) => e.preventDefault()} // necessário para permitir o drop
        className="border border-dashed w-sm mx-auto p-4 rounded-md bg-custom cursor-pointer flex justify-center items-center flex-col gap-2"
      >
        {/* Ícone */}
        <div className="p-2 bg-custom rounded-md w-fit shadow shadow-amber-50 cursor-pointer flex items-center">
          <Image
            src="/icon-upload.svg"
            alt="icon upload"
            width={20}
            height={20}
          />
        </div>

        {/* Nome do arquivo (se tiver) */}
        <p>{fileName}</p>
        <h2 className="text-custom">Drag and drop or click to upload</h2>
      </div>

      {/* Input escondido para upload via clique */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={inputRef}
        className="hidden"
      />

      {/* Info abaixo da caixa */}
      <div className="flex items-center gap-2 right-8 relative mt-1">
        <Image src="/icon-info.svg" alt="icon Info" width={20} height={20} />
        <p className="text-xs text-custom">
          Upload your photo (Jpeg or Png, max size: 500kb)
        </p>
      </div>
    </div>
  );
}
