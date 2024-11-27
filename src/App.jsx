import Header from "./Components/Layout/Header";
import Intro from "./Components/Sections/Intro";
import FeaturesSection from "./Components/Sections/Features";
import Teams from "./Components/Sections/Teams";
import Feedbacks from "./Components/Sections/Feedbacks";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div className="w-full h-screen  flex flex-col gap-1 ">
      <Header />
      <div className="flex flex-col gap-y-36">
        <Intro />
        <FeaturesSection />
        <Teams/>
        <Feedbacks/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
