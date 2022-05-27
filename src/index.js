import ReactDOM from "react-dom";
import Test from "./test";
import InputParent from "./inputParent";

const App = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "purple",
        borderRadius: "50%",
        display: "flex",
        wrap: "nowrap"
      }}
    >
      <h1>Welcome to my app</h1>
      {children}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App>
    <Test />
    <InputParent />
  </App>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);
