import { Provider } from "react-redux";
import "./App.css";
import store from "../store";
import Traveler from "./components/Traveler";
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Traveler />
    </Provider>
  );
}

export default App;
