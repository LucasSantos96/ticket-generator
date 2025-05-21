"use client";

import React from "react";

export default function Form() {

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget); //Pega todos os dados do form
    const userName = formData.get("userName")?.toString();
    const email = formData.get("email")?.toString();
    const github = formData.get("github")?.toString();

  };

  return (
    <div className="flex  flex-col justify-center items-center mt-8">
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
            Email Adress
            <input
              className="border bg-custom rounded-md p-1.5 text-xs"
              type="text"
              id="inEmail"
              placeholder="email@example.com"
              name="email"
            />
          </p>

          <p className="flex flex-col">
            GitHub Username
            <input
              className="border bg-custom rounded-md p-1.5 text-xs"
              type="text"
              id="ingithub"
              placeholder="@yourusername"
              name="github"
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
