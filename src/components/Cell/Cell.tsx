import React from 'react';
import styles from './Cell.module.css';

interface CellProps {
    value: 'X' | 'O' | '';
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
    const xColor = '#31c4be';
    const oColor = '#E89B30';
    const defaultColor = '#a8bec9';

    const cellColor = value === 'X' ? xColor : value === 'O' ? oColor : defaultColor;

    return (
        <button
            className={styles.cell}
            onClick={onClick}
            style={{ color: cellColor }}
        >
            {value}
        </button>
    );
};

export default Cell;
