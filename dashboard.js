const parkingRatios = {
    garden: {
        rsis: {
            1: 1.8,
            2: 2.0,
            "3+": 2.1
        },
        rutgersSurvey: {
            1: 0.79,
            2: 1.7,
            "3+": 2.32
        },
        detailedRutgersSurvey: {
            1: 1.27,
            2: 1.5,
            "3+": 1.77
        },
        censusData: {
            1: 0.88,
            2: 1.14,
            "3+": 1.32
        }
    },
    highrise: {
        rsis: {
            1: 0.8,
            2: 1.3,
            "3+": 1.9
        },
        rutgersSurvey: {
            1: 0.51,
            2: 1.73,
            "3+": 0.99
        },
        detailedRutgersSurvey: {
            1: 0,
            2: 0,
            "3+": 0
        },
        censusData: {
            1: 0.61,
            2: 1.06,
            "3+": 1.18
        }
    }
};


function calculateParking() {
    // ... (previous code remains the same)

    // After calculating the parking, generate the bar chart
    generateBarChart(parkingResults);

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `
        <!-- ... (previous code remains the same) -->
    `;
}




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
        <p>RSIS: ${rsisParking} parking spaces</p>
        <p>Rutgers Parking Survey : ${rutgersSurveyParking} parking spaces</p>
        <p>Detailed Rutgers Parking Survey : ${detailedRutgersSurveyParking} parking spaces</p>
        <p>Census data (ACS) : ${censusDataParking} parking spaces</p>
    `;
}
