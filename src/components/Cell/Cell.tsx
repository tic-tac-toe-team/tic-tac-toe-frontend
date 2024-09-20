import React from 'react';
import styles from './Cell.module.css';

const xColor = '#31C3BD';
const oColor = '#E89B30';
const defaultColor = '#ffffff';

interface CellProps {
    value: 'X' | 'O' | '';
    onClick: () => void;
}
const Cell: React.FC<CellProps> = ({ value, onClick }) => {
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
