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
    const developmentType = document.querySelector('input[name="developmentType"]:checked').value;

    // Get apartment counts from input fields
    const count1Bedroom = parseInt(document.getElementById("count1Bedroom").value);
    const count2Bedroom = parseInt(document.getElementById("count2Bedroom").value);
    const count3PlusBedroom = parseInt(document.getElementById("count3PlusBedroom").value);

    // Calculate estimated parking for each source and apartment type
    const rsisParking = Math.round((count1Bedroom * parkingRatios[developmentType].rsis[1]) +
        (count2Bedroom * parkingRatios[developmentType].rsis[2]) +
        (count3PlusBedroom * parkingRatios[developmentType].rsis["3+"]));

    const rutgersSurveyParking = Math.round((count1Bedroom * parkingRatios[developmentType].rutgersSurvey[1]) +
        (count2Bedroom * parkingRatios[developmentType].rutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios[developmentType].rutgersSurvey["3+"]));

    const detailedRutgersSurveyParking = Math.round((count1Bedroom * parkingRatios[developmentType].detailedRutgersSurvey[1]) +
        (count2Bedroom * parkingRatios[developmentType].detailedRutgersSurvey[2]) +
        (count3PlusBedroom * parkingRatios[developmentType].detailedRutgersSurvey["3+"]));

    const censusDataParking = Math.round((count1Bedroom * parkingRatios[developmentType].censusData[1]) +
        (count2Bedroom * parkingRatios[developmentType].censusData[2]) +
        (count3PlusBedroom * parkingRatios[developmentType].censusData["3+"]));

    // Display the results on the dashboard
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `
        <h3>${developmentType === "garden" ? "Garden" : "Highrise"} Development Type:</h3>
        <h4>Estimated Total Parking:</h4>
        <p>RSIS Ratio: ${rsisParking} parking spaces</p>
        <p>Rutgers Parking Survey Ratio: ${rutgersSurveyParking} parking spaces</p>
        <p>Detailed Rutgers Parking Survey Ratio: ${detailedRutgersSurveyParking} parking spaces</p>
        <p>Census data (ACS) Ratio: ${censusDataParking} parking spaces</p>
    `;
}
