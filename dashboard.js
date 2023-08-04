const parkingRatios = {
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
};

function calculateParking() {
    // Get apartment counts from input fields
    const count1Bedroom = parseInt(document.getElementById("count1Bedroom").value);
    const count2Bedroom = parseInt(document.getElementById("count2Bedroom").value);
    const count3PlusBedroom = parseInt(document.getElementById("count3PlusBedroom").value);

    // Calculate estimated parking for each source and apartment type
    const rsisParking = (count1Bedroom * parkingRatios.rsis[1]) +
        (count2Bedroom * parkingRatios.rsis[2]) +
        (count3PlusBedroom * parkingRatios.rsis["3+"]);

    const rutgersSurveyParking = (count1Bedroom * parkingRatios.rutgersSurvey[1]) +
        (count2Bedroom * parkingRatios.rutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios.rutgersSurvey["3+"]);

    const detailedRutgersSurveyParking = (count1Bedroom * parkingRatios.detailedRutgersSurvey[1]) +
        (count2Bedroom * parkingRatios.detailedRutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios.detailedRutgersSurvey["3+"]);

    const censusDataParking = (count1Bedroom * parkingRatios.censusData[1]) +
        (count2Bedroom * parkingRatios.censusData[2]) +
        (count3PlusBedroom * parkingRatios.censusData["3+"]);

    // Display the results on the dashboard
    document.getElementById("rsisResult").textContent = `RSIS Ratio: ${rsisParking} parking spaces`;
    document.getElementById("rutgersSurveyResult").textContent = `Rutgers Parking Survey Ratio: ${rutgersSurveyParking} parking spaces`;
    document.getElementById("detailedRutgersSurveyResult").textContent = `Detailed Rutgers Parking Survey Ratio: ${detailedRutgersSurveyParking} parking spaces`;
    document.getElementById("censusDataResult").textContent = `Census data (ACS) Ratio: ${censusDataParking} parking spaces`;
}
