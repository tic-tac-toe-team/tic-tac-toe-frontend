import React from 'react';
import { BoardProps } from '../../types/board-props';
import Cell from '../Cell/Cell';
import styles from './Board.module.css';


const Board: React.FC<BoardProps> = ({ cells, onCellClick }) => {
    return (
        <div className={styles.board}>
            {cells.map((cell, index) => (
                <Cell
                    key={index}
                    value={cell}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </div>
    );
};

export default Board;
