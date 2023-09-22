import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ordernow } from "./Pages/Ordernow";
import SelectedItemsProvider from "./Context/Selecteditems";

const App = () => {
  return (
    <SelectedItemsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Ordernow />} />
        </Routes>
      </BrowserRouter>
    </SelectedItemsProvider>
  );
};

export default App;
