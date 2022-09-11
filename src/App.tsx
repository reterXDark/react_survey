import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutesComp from "./Routers/RoutesComp";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Navbar />
      <RoutesComp />
      <Footer />
    </div>
  );
};

export default App;
