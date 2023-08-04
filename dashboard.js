const parkingRatios = {
    rsis: 1.5,
    rutgersSurvey: 2.0,
    detailedRutgersSurvey: 2.5,
    censusData: 2.8
};

function calculateParking() {
    // Get apartment counts from input fields
    const count1Bedroom = parseInt(document.getElementById("count1Bedroom").value);
    const count2Bedroom = parseInt(document.getElementById("count2Bedroom").value);
    const count3PlusBedroom = parseInt(document.getElementById("count3PlusBedroom").value);

    // Calculate estimated parking for each ratio
    const rsisParking = (count1Bedroom * parkingRatios.rsis) +
        (count2Bedroom * parkingRatios.rsis) +
        (count3PlusBedroom * parkingRatios.rsis);

    const rutgersSurveyParking = (count1Bedroom * parkingRatios.rutgersSurvey) +
        (count2Bedroom * parkingRatios.rutgersSurvey) +
        (count3PlusBedroom * parkingRatios.rutgersSurvey);

    const detailedRutgersSurveyParking = (count1Bedroom * parkingRatios.detailedRutgersSurvey) +
        (count2Bedroom * parkingRatios.detailedRutgersSurvey) +
        (count3PlusBedroom * parkingRatios.detailedRutgersSurvey);

    const censusDataParking = (count1Bedroom * parkingRatios.censusData) +
        (count2Bedroom * parkingRatios.censusData) +
        (count3PlusBedroom * parkingRatios.censusData);

    // Display the results on the dashboard
    document.getElementById("rsisResult").textContent = `RSIS Ratio: ${rsisParking} parking spaces`;
    document.getElementById("rutgersSurveyResult").textContent = `Rutgers Parking Survey Ratio: ${rutgersSurveyParking} parking spaces`;
    document.getElementById("detailedRutgersSurveyResult").textContent = `Detailed Rutgers Parking Survey Ratio: ${detailedRutgersSurveyParking} parking spaces`;
    document.getElementById("censusDataResult").textContent = `Census data (ACS) Ratio: ${censusDataParking} parking spaces`;
}

 
