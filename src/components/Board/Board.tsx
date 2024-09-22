import React from 'react';
import Cell from '../Cell/Cell';
import styles from './Board.module.css';
import { CellType } from '../../types/cell-type';

interface BoardProps {
    cells: Array<CellType>;
    onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ cells, onClick }) => {
    return (
        <div className={styles.board}>
            {cells && cells.map((cell, index) => (
                <Cell
                    key={cell.id}
                    symbol={cell.symbol}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
};

export default Board;
