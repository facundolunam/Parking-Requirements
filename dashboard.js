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

function calculateGardenParking(count1Bedroom, count2Bedroom, count3PlusBedroom) {
    const rsisParking = Math.round(
        (count1Bedroom * parkingRatios.garden.rsis[1]) +
        (count2Bedroom * parkingRatios.garden.rsis[2]) +
        (count3PlusBedroom * parkingRatios.garden.rsis["3+"])
    );

    const rutgersSurveyParking = Math.round(
        (count1Bedroom * parkingRatios.garden.rutgersSurvey[1]) +
        (count2Bedroom * parkingRatios.garden.rutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios.garden.rutgersSurvey["3+"])
    );

    const detailedRutgersSurveyParking = Math.round(
        (count1Bedroom * parkingRatios.garden.detailedRutgersSurvey[1]) +
        (count2Bedroom * parkingRatios.garden.detailedRutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios.garden.detailedRutgersSurvey["3+"])
    );

    const censusDataParking = Math.round(
        (count1Bedroom * parkingRatios.garden.censusData[1]) +
        (count2Bedroom * parkingRatios.garden.censusData[2]) +
        (count3PlusBedroom * parkingRatios.garden.censusData["3+"])
    );

    return {
        rsis: rsisParking,
        rutgersSurvey: rutgersSurveyParking,
        detailedRutgersSurvey: detailedRutgersSurveyParking,
        censusData: censusDataParking
    };
}

function calculateHighriseParking(count1Bedroom, count2Bedroom, count3PlusBedroom) {
    const rsisParking = Math.round(
        (count1Bedroom * parkingRatios.highrise.rsis[1]) +
        (count2Bedroom * parkingRatios.highrise.rsis[2]) +
        (count3PlusBedroom * parkingRatios.highrise.rsis["3+"])
    );

    const rutgersSurveyParking = Math.round(
        (count1Bedroom * parkingRatios.highrise.rutgersSurvey[1]) +
        (count2Bedroom * parkingRatios.highrise.rutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios.highrise.rutgersSurvey["3+"])
    );

    const detailedRutgersSurveyParking = Math.round(
        (count1Bedroom * parkingRatios.highrise.detailedRutgersSurvey[1]) +
        (count2Bedroom * parkingRatios.highrise.detailedRutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios.highrise.detailedRutgersSurvey["3+"])
    );

    const censusDataParking = Math.round(
        (count1Bedroom * parkingRatios.highrise.censusData[1]) +
        (count2Bedroom * parkingRatios.highrise.censusData[2]) +
        (count3PlusBedroom * parkingRatios.highrise.censusData["3+"])
    );

    return {
        rsis: rsisParking,
        rutgersSurvey: rutgersSurveyParking,
        detailedRutgersSurvey: detailedRutgersSurveyParking,
        censusData: censusDataParking
    };
}

function calculateParking() {
    const developmentType = document.querySelector('input[name="developmentType"]:checked').value;

    const count1Bedroom = parseInt(document.getElementById("count1Bedroom").value);
    const count2Bedroom = parseInt(document.getElementById("count2Bedroom").value);
    const count3PlusBedroom = parseInt(document.getElementById("count3PlusBedroom").value);

    let parkingResults;
    if (developmentType === "garden") {
        parkingResults = calculateGardenParking(count1Bedroom, count2Bedroom, count3PlusBedroom);
    } else {
        parkingResults = calculateHighriseParking(count1Bedroom, count2Bedroom, count3PlusBedroom);
    }

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `
        <h3>${developmentType === "garden" ? "Garden" : "Highrise"} Development Type:</h3>
        <h4>Parking Ratios:</h4>
        <p>RSIS Ratio: ${parkingRatios[developmentType].rsis[1]} (1 Bedroom), ${parkingRatios[developmentType].rsis[2]} (2 Bedroom), ${parkingRatios[developmentType].rsis["3+"]} (3+ Bedroom)</p>
        <p>Rutgers Parking Survey Ratio: ${parkingRatios[developmentType].rutgersSurvey[1]} (1 Bedroom), ${parkingRatios[developmentType].rutgersSurvey[2]} (2 Bedroom), ${parkingRatios[developmentType].rutgersSurvey["3+"]} (3+ Bedroom)</p>
        <p>Detailed Rutgers Parking Survey Ratio: ${
