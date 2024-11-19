// ICONS
import phone from '../Images/phone.png'
import email from '../Images/email.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mb-3">
      <div>
        <h3 className="font-bold px-7 py-5">Entre em Contato</h3>
        <div className="ml-7 space-y-4">
          <div className="flex space-x-3 items-center">
            <img src={phone}/>
            <p>(87) 99109-0861</p>
          </div>
          <div className="flex space-x-3 items-center">
            <img src={email}/>
            <p>cleciolira2002@gmail.com</p>
          </div>
        </div>

        <p className="text-center mt-5">© 2024 Clécio Lira. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
