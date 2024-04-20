// src/App.js

import React from 'react';
import FlavanoidsTable from './components/flavanoids';
import GammaTable from './components/gamma';
import wineData from './data/wineData.json';

const App = () => {
    return (
        <div>
            <h1>Wine Stats</h1>
            <FlavanoidsTable data={wineData} propertyName="Flavanoids" />
            <h1>Gamma Stats</h1>
            <GammaTable data={wineData} />
        </div>
    );
};

export default App;
