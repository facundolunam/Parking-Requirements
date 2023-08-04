const parkingRatios = {
    garden: {
        rsis: {
            1: 1.5,
            2: 2.0,
            "3+": 2.5
        },
        rutgersSurvey: {
            1: 1.8,
            2: 2.3,
            "3+": 2.8
        },
        detailedRutgersSurvey: {
            1: 2.0,
            2: 2.5,
            "3+": 3.0
        },
        censusData: {
            1: 2.3,
            2: 2.8,
            "3+": 3.3
        }
    },
    highrise: {
        rsis: {
            1: 1.7,
            2: 2.2,
            "3+": 2.7
        },
        rutgersSurvey: {
            1: 2.0,
            2: 2.5,
            "3+": 3.0
        },
        detailedRutgersSurvey: {
            1: 2.2,
            2: 2.7,
            "3+": 3.2
        },
        censusData: {
            1: 2.5,
            2: 3.0,
            "3+": 3.5
        }
    }
};

function calculateParking() {
    // Get development type from radio buttons
    const developmentType =
