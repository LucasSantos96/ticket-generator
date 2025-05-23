'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Form() {
  const router = useRouter(); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Pegando os dados do formulário
    const userName = formData.get("userName");
    const email = formData.get("email");
    const github = formData.get("github");

    // Criando objeto com os dados
    const userData = {
      userName,
      email,
      github
    };

    // Salvando no localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirecionando para a página de sucesso
    router.push("/ticket-success");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="mt-4">
        <form className="w-xs space-y-3" onSubmit={handleSubmit}>
          <p className="flex flex-col">
            Full Name
            <input
              className="border bg-custom rounded-md p-1.5 text-xs"
              type="text"
              id="inName"
              name="userName"
            />
          </p>

          <p className="flex flex-col">
            Email Address
            <input
              className="border bg-custom rounded-md p-1.5 text-xs"
              type="email"
              id="inEmail"
              name="email"
              placeholder="email@example.com"
            />
          </p>

          <p className="flex flex-col">
            GitHub Username
            <input
              className="border bg-custom rounded-md p-1.5 text-xs"
              type="text"
              id="ingithub"
              name="github"
              placeholder="@yourusername"
            />
          </p>

          <button
            type="submit"
            className="color-orange text-slate-950 font-semibold text-center w-xs p-1.5 rounded-md border-2 border-slate-800"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </div>
  );
}
