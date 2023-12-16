import { useEffect, useState } from "react";
import SquareChildren from "./SquareChildren";
import frustado from "../assets/frustrado.png";

import { Modal } from "./modal";
import { WinnerModal } from "./WinnerModal";
import { AnimatePresence } from "framer-motion";

const TURNS = {
  X: "x",
  O: "O",
};

const winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function SquareContainer() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(undefined);

  useEffect(() => {
    const boardFromLocalStorage = JSON.parse(localStorage.getItem("board"));
    boardFromLocalStorage && setBoard(boardFromLocalStorage);
  }, []);

  function checkWinner(board) {
    for (let combination of winnerCombinations) {
      let [a, b, c] = combination;
      if (board[a] && board[a] == board[b] && board[a] == board[c]) {
        return true;
      }
    }
  }
  function handleClickOnSquare(index) {
    if (board[index] != null) return;
    const newBoard = board.map((square, currentindex) =>
      currentindex === index ? turn : square
    );
    setBoard(newBoard);
    setTurn(turn == TURNS.X ? TURNS.O : TURNS.X);
    localStorage.setItem("board", JSON.stringify(newBoard));
    if (checkWinner(newBoard)) {
      setWinner(turn);
      localStorage.removeItem("board");
    } else {
      const fullBoard = newBoard.every((square) => square != null);
      fullBoard && (setWinner(null), localStorage.removeItem("board"));
    }
  }

  function closeModal() {
    setWinner(undefined);
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
  }

  return (
    <>
      <div className=" h-square w-square grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-2 font-mono">
        {board.map((square, index) => {
          return (
            <SquareChildren
              key={index}
              index={index}
              handleClickOnSquare={handleClickOnSquare}
            >
              {square}
            </SquareChildren>
          );
        })}
      </div>
      <div className=" w-40 h-20 grid grid-cols-2 gap-x-3">
        <SquareChildren active={turn == TURNS.X && true}>{"X"}</SquareChildren>
        <SquareChildren active={turn == TURNS.O && true}>{"O"}</SquareChildren>
      </div>
      <AnimatePresence>
      {
        winner != undefined && (
          <Modal closeModal={closeModal} winner={winner}>
          <WinnerModal winner={winner} />
        </Modal>
        )
        }
      {winner === null && (
        <Modal closeModal={closeModal}>
          <img src={frustado} className=" w-1/3 relative"></img>
          <p>Empate</p>
        </Modal>
      )}
      </AnimatePresence>
     
    </>
  );
}
