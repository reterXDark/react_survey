import { Routes, Route, Link } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Options from "../Pages/Options/Options";

type RoutesProps = {};

const RoutesComp = (props: RoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Options" element={<Options />} />
    </Routes>
  );
};

export default RoutesComp;
