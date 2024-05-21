import { Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
