import React, { useEffect } from "react";
import { useState } from "react";
const Interface = () => {
  const [turn, setturn] = useState("");
  const [check, updatecheck] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [symbol, setsymbol] = useState(["", "", "", "", "", "", "", "", ""]);
  const [status, updateStatus] = useState("First Move is X");
  const handler = (block) => {
    if (block === check[block]) {
      return;
    } else {
      if (checkWinner() === "X" || checkWinner === "O") {
        return;
      }
      const updatelist = [...check];
      updatelist[block] = block;
      updatecheck(updatelist);
      if (turn === "cross") {
        const updatesymbol = [...symbol];
        updatesymbol[block] = "O";
        setsymbol(updatesymbol);
        setturn("circle");
      } else {
        const updatesymbol = [...symbol];
        updatesymbol[block] = "X";
        setsymbol(updatesymbol);
        setturn("cross");
      }
    }
  };
  const checkWinner = () => {
    for (let i = 0; i < possible_matching.length; i++) {
      const [a, b, c] = possible_matching[i];
      if (
        symbol[a] !== "" &&
        symbol[a] === symbol[b] &&
        symbol[a] === symbol[c]
      ) {
        return symbol[a];
      }
    }
    return null;
  };

  useEffect(() => {
    if (checkWinner() === "X" || checkWinner === "O") {
      const result = `Winner is ${checkWinner()}`;

      updateStatus(result);
      return;
    } else {
      turn === ""
        ? ""
        : turn === "circle"
        ? updateStatus("next move is 'X'")
        : updateStatus("next move is 'O'");
    }
  });
  return (
    <>
      {" "}
      <div className="text-center">{status}</div>
      <div className="tictac-interface">
        <div className="block-1" onClick={() => handler(0)}>
          <i
            className={`${symbol[0] === "X" ? "fa-solid" : "fa-regular"} ${
              0 === check[0]
                ? symbol[0] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-2" onClick={() => handler(1)}>
          <i
            className={`${symbol[1] === "X" ? "fa-solid" : "fa-regular"} ${
              1 === check[1]
                ? symbol[1] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-3" onClick={() => handler(2)}>
          <i
            className={`${symbol[2] === "X" ? "fa-solid" : "fa-regular"} ${
              2 === check[2]
                ? symbol[2] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-4" onClick={() => handler(3)}>
          <i
            className={`${symbol[3] === "X" ? "fa-solid" : "fa-regular"} ${
              3 === check[3]
                ? symbol[3] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-5" onClick={() => handler(4)}>
          <i
            className={`${symbol[4] === "X" ? "fa-solid" : "fa-regular"} ${
              4 === check[4]
                ? symbol[4] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-6" onClick={() => handler(5)}>
          <i
            className={`${symbol[5] === "X" ? "fa-solid" : "fa-regular"} ${
              5 === check[5]
                ? symbol[5] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-7" onClick={() => handler(6)}>
          <i
            className={`${symbol[6] === "X" ? "fa-solid" : "fa-regular"} ${
              6 === check[6]
                ? symbol[6] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-8" onClick={() => handler(7)}>
          <i
            className={`${symbol[7] === "X" ? "fa-solid" : "fa-regular"} ${
              7 === check[7]
                ? symbol[7] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
        <div className="block-9" onClick={() => handler(8)}>
          <i
            className={`${symbol[8] === "X" ? "fa-solid" : "fa-regular"} ${
              8 === check[8]
                ? symbol[8] === "X"
                  ? "fa-xmark text-[#545454]"
                  : "fa-circle text-white"
                : ""
            } fa-lg`}
          ></i>
        </div>
      </div>
    </>
  );
};

const possible_matching = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6]
];
export default Interface;
