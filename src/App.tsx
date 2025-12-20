import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import BasicTypePage from "./pages/BasicTypePage";
import { Header } from "./components";
import ObjectArrayTupleTypePage from "./pages/ObjectArrayTupleTypePage";
import InterfecePage from "./pages/InterfecePage";
import EnumPage from "./pages/EnumPage";
import AdvancedPage from "./pages/AdvancedPage";
import IntersectionPage from "./pages/IntersectionPage";
import UnionTypePage from "./pages/UnionTypePage";
import GenericPage from "./pages/GenericPage";
import LiteralPage from "./pages/LiteralPage";
import UtilitytypePage from "./pages/UtilitytypePage";
import RecordTypePage from "./pages/RecordTypePage";
import ExtendsPage from "./pages/ExtendsPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/study/basicType" element={<BasicTypePage />} />
          <Route
            path="/study/objectArrayTuple"
            element={<ObjectArrayTupleTypePage />}
          />
          <Route path="/study/interfecePage" element={<InterfecePage />} />
          <Route path="/study/eunmPage" element={<EnumPage />} />
          <Route path="/study/adavancedType" element={<AdvancedPage />} />
          <Route path="/study/intersection" element={<IntersectionPage />} />
          <Route path="/study/union" element={<UnionTypePage />} />
          <Route path="/study/generic" element={<GenericPage />} />
          <Route path="/study/literal" element={<LiteralPage />} />
          <Route path="/study/utility" element={<UtilitytypePage />} />
          <Route path="/study/recode" element={<RecordTypePage />} />
          <Route path="/study/Extends" element={<ExtendsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
