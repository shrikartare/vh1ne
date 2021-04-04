import LandingPage from "./components/landing-page/LandingPage";
import { HashRouter as Router } from "react-router-dom";
import * as AxiosConfig from "./AxiosConfig";
import "./App.scss";
AxiosConfig.setupInterceptors();
const App = () => {
  return (
    <div className="App">
      <Router>
        <LandingPage />
      </Router>
    </div>
  );
};

export default App;
