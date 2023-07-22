
import "./App.css";
import { HBar } from "./components/HBar";
import { ThemeSwitch } from "./context/ThemeSwitch";

function App() {
  //const [count, setCount] = useState<Number|null>(0);

  return (
    <div className="h-screen w-screen bg-white dark:bg-DarkBlueDM">
      <HBar/>
      <ThemeSwitch />
    </div>
  );
}

export default App;
