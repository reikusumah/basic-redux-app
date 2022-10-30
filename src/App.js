// import Todos from "./components/Todos";
import Counter from "./features/counter/Counter";
import Todos from "./components/Todos";
import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1>Belajar Redux</h1>
//       <Todos />
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="App">
      <Counter />
      <Todos />
    </div>
  );
};

export default App;
