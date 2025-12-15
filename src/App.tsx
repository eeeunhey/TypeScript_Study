import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import BasicTypePage from "./pages/BasicTypePage";
import { Header } from "./components";
import ObjectArrayTupleTypePage from "./pages/ObjectArrayTupleTypePage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/study/basicType" element={<BasicTypePage />} />
          <Route path="/study/ObjectArrayTuple" element={<ObjectArrayTupleTypePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
