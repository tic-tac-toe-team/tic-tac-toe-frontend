import React from 'react';
import { CellProps } from '../../types/cell-props';
import './Cell.css';

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
    return (
        <button className="cell" onClick={onClick}>{value}</button>
    );
};

export default Cell;