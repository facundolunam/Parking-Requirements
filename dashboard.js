function calculateParking() {
    // Get apartment counts from input fields
    const count1Bedroom = parseInt(document.getElementById("count1Bedroom").value);
    const count2Bedroom = parseInt(document.getElementById("count2Bedroom").value);
    const count3PlusBedroom = parseInt(document.getElementById("count3PlusBedroom").value);

    // Get parking ratios for each apartment type from input fields
    const rsisRatio1Bedroom = parseFloat(document.getElementById("rsisRatio1Bedroom").value);
    const rsisRatio2Bedroom = parseFloat(document.getElementById("rsisRatio2Bedroom").value);
    const rsisRatio3PlusBedroom = parseFloat(document.getElementById("rsisRatio3PlusBedroom").value);

    const rutgersSurveyRatio1Bedroom = parseFloat(document.getElementById("rutgersSurveyRatio1Bedroom").value);
    const rutgersSurveyRatio2Bedroom = parseFloat(document.getElementById("rutgersSurveyRatio2Bedroom").value);
    const rutgersSurveyRatio3PlusBedroom = parseFloat(document.getElementById("rutgersSurveyRatio3PlusBedroom").value);

    const detailedRutgersSurveyRatio1Bedroom = parseFloat(document.getElementById("detailedRutgersSurveyRatio1Bedroom").value);
    const detailedRutgersSurveyRatio2Bedroom = parseFloat(document.getElementById("detailedRutgersSurveyRatio2Bedroom").value);
    const detailedRutgersSurveyRatio3PlusBedroom = parseFloat(document.getElementById("detailedRutgersSurveyRatio3PlusBedroom").value);

    const censusDataRatio1Bedroom = parseFloat(document.getElementById("censusDataRatio1Bedroom").value);
    const censusDataRatio2Bedroom = parseFloat(document.getElementById("censusDataRatio2Bedroom").value);
    const censusDataRatio3PlusBedroom = parseFloat(document.getElementById("censusDataRatio3PlusBedroom").value);

    // Calculate estimated parking for each source and apartment type
    const rsisParking = (count1Bedroom * rsisRatio1Bedroom) +
        (count2Bedroom * rsisRatio2Bedroom) +
        (count3PlusBedroom * rsisRatio3PlusBedroom);

    const rutgersSurveyParking = (count1Bedroom * rutgersSurveyRatio1Bedroom) +
        (count2Bedroom * rutgersSurveyRatio2Bedroom) +
        (count3PlusBedroom * rutgersSurveyRatio3PlusBedroom);

    const detailedRutgersSurveyParking = (count1Bedroom * detailedRutgersSurveyRatio1Bedroom) +
        (count2Bedroom * detailedRutgersSurveyRatio2Bedroom) +
        (count3PlusBedroom * detailedRutgersSurveyRatio3PlusBedroom);

    const censusDataParking = (count1Bedroom * censusDataRatio1Bedroom) +
        (count2Bedroom * censusDataRatio2Bedroom) +
        (count3PlusBedroom * censusDataRatio3PlusBedroom);

    // Display the results on the dashboard
    document.getElementById("rsisResult").textContent = `RSIS Ratio: ${rsisParking} parking spaces`;
    document.getElementById("rutgersSurveyResult").textContent = `Rutgers Parking Survey Ratio: ${rutgersSurveyParking} parking spaces`;
    document.getElementById("detailedRutgersSurveyResult").textContent = `Detailed Rutgers Parking Survey Ratio: ${detailedRutgersSurveyParking} parking spaces`;
    document.getElementById("censusDataResult").textContent = `Census data (ACS) Ratio: ${censusDataParking} parking spaces`;
}
