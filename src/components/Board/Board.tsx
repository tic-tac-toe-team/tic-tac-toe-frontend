import React from 'react';
import Cell from '../Cell/Cell';
import styles from './Board.module.css';

interface BoardProps {
    cells: Array<'X' | 'O' | ''>;
    onCellClick: (index: number) => void;
}

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
