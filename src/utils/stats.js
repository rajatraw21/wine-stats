// src/utils/stats.js

// Helper function to calculate mean of an array of values
const calculateMean = (values) => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
};

// Helper function to calculate median of an array of values
const calculateMedian = (values) => {
    const sortedValues = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2 === 0) {
        return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    } else {
        return sortedValues[mid];
    }
};

// Helper function to calculate mode of an array of values
const calculateMode = (values) => {
    const freqMap = {};
    values.forEach((val) => {
        freqMap[val] = (freqMap[val] || 0) + 1;
    });
    let mode = null;
    let maxFrequency = 0;
    for (const key in freqMap) {
        if (freqMap[key] > maxFrequency) {
            mode = Number(key);
            maxFrequency = freqMap[key];
        }
    }
    return mode;
};

// Function to calculate class-wise statistics (mean, median, mode) for a given property in the dataset
const calculateClassStatistics = (data, propertyName) => {
    const classStatistics = {};

    // Group data points by "Alcohol" class and calculate statistics
    data.forEach((entry) => {
        const alcoholClass = entry.Alcohol;
        const propertyValue = entry[propertyName];
        if (!classStatistics[alcoholClass]) {
            classStatistics[alcoholClass] = [];
        }
        classStatistics[alcoholClass].push(propertyValue);
    });

    const result = {};
    for (const alcoholClass in classStatistics) {
        const values = classStatistics[alcoholClass];
        result[alcoholClass] = {
            Mean: calculateMean(values),
            Median: calculateMedian(values),
            Mode: calculateMode(values),
        };
    }

    return result;
};

// Function to calculate class-wise statistics (mean, median, mode) of "Gamma" for the entire dataset
const calculateClassGammaStatistics = (dataset) => {
    const classStatistics = {};

    // Group data points by "Alcohol" class and calculate Gamma values
    dataset.forEach((entry) => {
        const { Alcohol, Ash, Hue, Magnesium } = entry;
        const gamma = (Ash * Hue) / Magnesium;
        if (!classStatistics[Alcohol]) {
            classStatistics[Alcohol] = [];
        }
        classStatistics[Alcohol].push(gamma);
    });

    const result = {};
    for (const alcoholClass in classStatistics) {
        const values = classStatistics[alcoholClass];
        result[alcoholClass] = {
            Mean: calculateMean(values),
            Median: calculateMedian(values),
            Mode: calculateMode(values),
        };
    }

    return result;
};

export { calculateClassStatistics, calculateClassGammaStatistics };
