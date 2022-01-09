import {Home} from "./Home.jsx";
import {Skills} from "./Skills.jsx";
import "./App.css"
import { Header } from "./Header.jsx";
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Skills/>
    </div>
  );
}

export default App;
