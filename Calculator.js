// // import NumberIcon from "./numberIcon";
// import NumberData from "../numberData";
// import React from "react";
// import { Link } from "react-router-dom";

// function Calculator(props) {
//   const [result, setResult] = React.useState("");

//   const handleClick = (e) => {
//     const digitRegex = /^\d$/;
//     const value = e.target.name;
//     if (digitRegex.test(value)) {
//       setResult(result.concat(value));
//     } else {
//       console.log("invalid input");
//     }
//   };

//   const handleClear = () => {
//     setResult("");
//   };

//   const handleEquals = () => {
//     let expression = "";
//     try {
//       expression.eval(result).toString();
//     } catch (error) {
//       console.log("invalid expression");
//     }
//     setResult(expression);
//   };

//   const numbers = NumberData.map((number) => {
//     return (
//       <button key={number.key} name={number.value}>
//         {number.value}
//       </button>
//     );
//   });

//   return (
//     <div className="counter">
//       <div className="display">
//         <input type="text" value={result} />
//       </div>
//       <div className="keys">
//         {numbers}
//         <button onClick={handleClick}>+</button>
//         <button onClick={handleClick}>-</button>
//         <button onClick={handleEquals}>=</button>
//         <button onClick={handleClear}>c</button>
//       </div>
//     </div>
//   );
// }

// function CalcApp() {
//   return (
//     <div>
//       <Link to="page2">Go to page 2</Link>
//       <Calculator />
//     </div>
//   );
// }

// export default CalcApp;

import NumberData from "../numberData";
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Calculator(props) {
  const [result, setResult] = React.useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleEquals = () => {
    setResult(eval(result).toString());
  };

  const numbers = NumberData.map((number) => {
    return (
      <button key={number.key} name={number.value} onClick={handleClick}>
        {number.value}
      </button>
    );
  });

  return (
    <div className="counter">
      <div className="display">
        <input type="text" value={result} readOnly />
      </div>
      <div className="keys">
        {numbers}
        <button onClick={handleClick} name="+">
          +
        </button>
        <button onClick={handleClick} name="-">
          -
        </button>
        <button onClick={handleEquals}>=</button>
        <button onClick={handleClear}>c</button>
      </div>
    </div>
  );
}

function CalcApp() {
  return (
    <div className="calc">
      <Link to="page2">Go to page 2</Link>
      <Calculator />
    </div>
  );
}

export default CalcApp;
