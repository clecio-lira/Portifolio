import { useState } from "react"

// ICONS
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";

function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
}

const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus("Enviando...")

  try {
    const response = await fetch (
      
    )
  } catch () {
    
  }
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="p-4">
        <h4 className="font-bold text-2xl text-center">Entre em contato</h4>

        <div className="flex flex-col pt-6">
          <form className="space-y-5">

            <label className="flex flex-col">
              <span>Email: </span>
              <input
                type="email"
                placeholder="Digite seu email"
                className="mt-1 px-3 py-1 rounded-md"
              />
            </label>

            <label className="flex flex-col">
              <span>Mensagem:</span>
              <textarea
                className="mt-1 rounded-md px-3 py-1"
                placeholder="Digite sua mensagem"
              ></textarea>
            </label>

            <button type="submit" className="w-full bg-gray-200 text-black">Enviar</button>
          </form>
        </div>

        <div className="pt-4">
          <ul className="flex justify-evenly items-center">
            <li>
              <img src={github} alt="Icon JavaScript" className="size-10" />
            </li>
            <li>
              <img src={linkedin} alt="Icon Nodejs" className="size-12" />
            </li>
            <li>
              <img src={instagram} alt="Icon HTML" className="size-10" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
