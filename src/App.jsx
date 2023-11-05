import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateSelection from "./components/TemplateSelection";
import InformationInput from "./components/InformationInput";
import TemplateCustomization from "./components/TemplateCustomization";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/select" element={<TemplateSelection />} />
          <Route path="/input" element={<InformationInput />} />
          <Route path="/input/cutomise" element={<TemplateCustomization />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
