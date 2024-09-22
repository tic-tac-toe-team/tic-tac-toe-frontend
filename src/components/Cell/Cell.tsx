import React from 'react';
import styles from './Cell.module.css';
import { SymbolEnum } from "../../types/enums/symbol-enum";

interface CellProps {
    symbol: string;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ symbol, onClick }) => {
    const xColor = '#31c4be';
    const oColor = '#E89B30';
    const defaultColor = '#a8bec9';

    const cellColor = symbol === SymbolEnum.X ? xColor : symbol === SymbolEnum.O ? oColor : defaultColor;

    return (
        <button
            className={styles.cell}
            onClick={onClick}
            style={{ color: cellColor }}
        >
            {symbol}
        </button>
    );
};

export default Cell;
