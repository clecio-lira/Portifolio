import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// CSS
import "./App.css";

// COMPONENTES
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
    });

    sr.reveal(".scrollcenter", {
      origin: "center",
      distance: "",
      duration: 2000
    });

    sr.reveal(".scrolltop", {
      origin: "top",
      distance: "50px",
      duration: 2000
    });

    sr.reveal(".scrollbottom", {
      origin: "bottom",
      distance: "50px",
      duration: 2000
    });
  }, []);

  return (
    <div className="App bg-gray-950">
      <Main />
      <Footer />
      <Header />
    </div>
  );
}
export default App;
