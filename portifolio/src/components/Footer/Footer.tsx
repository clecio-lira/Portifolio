"use client";
import React, { useEffect, useState } from "react";

const FooterComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    function DateFormated() {
      const dataAtual = new Date();
      const ano = dataAtual.getFullYear();

      setData(`${ano}`);
    }

    DateFormated();
  }, []);

  return (
    <footer className="w-full bg-[#BC8A3C] p-4 flex justify-center items-center text-white">
      <p>
        Criado por <strong>Clécio Lira</strong> © {data} Todos os direito
        reservados.
      </p>
    </footer>
  );
};

export default FooterComponent;
