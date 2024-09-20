import React from 'react';
import { CellProps } from '../../types/cell-props';
import styles from './Cell.module.css';

const xColor = '#31C3BD';
const oColor = '#E89B30';
const defaultColor = '#000';

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
