import React from 'react';
import './Info.css'
import { InfoProps } from '../../types/info-props';

const Info: React.FC<InfoProps> = ({ currentPlayer }) => {
    return (
        <div className="info">
            <h3>Current Player: {currentPlayer}</h3>
        </div>
    );
};

export default Info;
