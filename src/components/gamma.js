// src/components/GammaStatsTable.js

import React from 'react';
import { Table } from '@mantine/core';
import { calculateClassGammaStatistics } from '../utils/stats';

const Gamma = ({ data }) => {
    const classGammaStatistics = calculateClassGammaStatistics(data);

    const renderTableRows = (measureName) => {
        return (
            <Table.Tr>
                <Table.Td style={cellStyle}>Gamma {measureName}</Table.Td>
                {Object.keys(classGammaStatistics).map((alcoholClass) => (
                    <Table.Td key={alcoholClass} style={cellStyle}>
                        {classGammaStatistics[alcoholClass][measureName].toFixed(3)}
                    </Table.Td>
                ))}
            </Table.Tr>
        );
    };

    // Inline style object for table cells
    const cellStyle = {
        border: '1px solid #dee2e6', // Border style
        padding: '8px', // Padding inside the cells
        textAlign: 'center', // Center align text
    };

    return (
        <Table style={{ maxWidth: '600px', margin: 'auto', borderCollapse: 'collapse' }}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th style={cellStyle}>Measure</Table.Th>
                    {Object.keys(classGammaStatistics).map((alcoholClass) => (
                        <Table.Th key={alcoholClass} style={cellStyle}>
                            Class {alcoholClass}
                        </Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {renderTableRows('Mean')}
                {renderTableRows('Median')}
                {renderTableRows('Mode')}
            </Table.Tbody>
        </Table>
    );
};

export default Gamma;
