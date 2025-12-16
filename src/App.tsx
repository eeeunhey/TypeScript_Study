import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import BasicTypePage from "./pages/BasicTypePage";
import { Header } from "./components";
import ObjectArrayTupleTypePage from "./pages/ObjectArrayTupleTypePage";
import InterfecePage from "./pages/InterfecePage";
import EnumPage from "./pages/EnumPage";
import AdvancedPage from "./pages/AdvancedPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/study/basicType" element={<BasicTypePage />} />
          <Route path="/study/objectArrayTuple" element={<ObjectArrayTupleTypePage />} />
          <Route path="/study/interfecePage" element={<InterfecePage />} />
          <Route path="/study/eunmPage" element={< EnumPage/>} />
          <Route path="/study/adavancedType" element={< AdvancedPage/>} />

        </Route>
      </Routes>
    </div>
  );
};

export default App;
