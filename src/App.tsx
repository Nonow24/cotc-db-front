import { Provider } from "react-redux";
import "./App.css";
import store from "../store";
import Traveler from "./components/Traveler";

function App() {
  return (
    <Provider store={store}>
      <Traveler />
    </Provider>
  );
}

export default App;
