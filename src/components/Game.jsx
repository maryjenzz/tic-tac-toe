import Square from "./Square" // prox aula 30
import './Game.css'
import { useState } from "react";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6], // diagonais
    ];

    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function scoreBoard(squares) {
    let xScore = 0;
    let oScore = 0;
    const winner = calculateWinner(squares);
    if (winner === 'X') {
        xScore += 1;
    } else if (winner === 'O') {
        oScore += 1;
    }
    return { xScore, oScore };
}

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);

    const winner = calculateWinner(squares);

    let status;
    let newRound = false;

    if (winner) {
        status = "Vencedor " + winner;
        newRound = true;
    } else if (!squares.includes(null)) {
        status = "Empate!";
        newRound = true;
    } else {
        status = "Próximo jogador: " + (xIsNext ? 'X' : 'O');
        newRound = false;
    }

    function handleSquareClick(i) {
        if (squares[i] || winner) return;
        const nextSquares = [...squares];
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);

        const win = calculateWinner(nextSquares);
        if (win === 'X') setScoreX(scoreX + 1);
        if (win === 'O') setScoreO(scoreO + 1);
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className="game">
            <h1 className="title">Jogo da Velha</h1>

            <div className="scoreboard">
                <div className="score">Jogador X : {scoreX}</div>
                <div className="score">Jogador O : {scoreO}</div>
            </div>

            <div className={winner ? "status winner" : "status"}>{status}</div>
            <div className="board">
                <div className="row">{[0, 1, 2].map((i) => <Square value={squares[i]} onClick={() => handleSquareClick(i)} />)}</div>
                <div className="row">{[3, 4, 5].map((i) => <Square value={squares[i]} onClick={() => handleSquareClick(i)} />)}</div>
                <div className="row">{[6, 7, 8].map((i) => <Square value={squares[i]} onClick={() => handleSquareClick(i)} />)}</div>
            </div>
            {
                newRound && <button className="reset" onClick={resetGame}>
                    Novo Jogo
                </button>
            }
        </div >
    )
}

export default Game
