"use client";

import Footer from "@/components/Footer";
import InputForms from "@/components/InputForms";
import Navbar from "@/components/Navbar";

export default function Find() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="flex items-center flex-col w-1/2 h-80 mt-40 mb-20 shadow-md text-#160b30">
        <h1 className="text-3xl mt-50 mb-20">Entre em contato</h1>
        <form className="flex justify-center items-center flex-col gap-30">
          <InputForms label={"Nome"} />
          <InputForms label={"E-mail"} />
          <InputForms label={"Assunto"} />
          <InputForms label={"Descreva o assunto"} />
        </form>
      </div>
      <Footer />
    </div>
  );
}
