const parkingRatios = {
    garden: {
        rsis: {
            1: 1.8,
            2: 2.0,
            "3+": 2.1
        },
        rutgersSurvey: {
            1: 0.98,
            2: 1.45,
            "3+": 1.8
    }
    highrise: {
        rsis: {
            1: 0.8,
            2: 1.3,
            "3+": 1.9
        },
        rutgersSurvey: {
            1: 0.56,
            2: 1.4,
            "3+": 1.09
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



    // Display the results on the dashboard
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `
        <h3>${developmentType === "garden" ? "Garden" : "Highrise"} Development Type:</h3>
        <h4>Estimated Total Parking:</h4>
        <p>RSIS: ${rsisParking} parking spaces</p>
        <p>Rutgers Center for Real Estate : ${rutgersSurveyParking} parking spaces</p>
    `;
}
