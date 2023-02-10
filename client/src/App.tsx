import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Message from "./pages/Message";

type Props = {};

function App(props: Props) {
  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/message/:id" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
