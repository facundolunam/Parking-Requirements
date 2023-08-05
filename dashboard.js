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

function generateBarChart(parkingResults) {
    const apartmentTypes = ["1 Bedroom", "2 Bedroom", "3+ Bedroom"];

    const rsisData = apartmentTypes.map(type => parkingResults.rsis[type]);
    const rutgersSurveyData = apartmentTypes.map(type => parkingResults.rutgersSurvey[type]);
    const detailedRutgersSurveyData = apartmentTypes.map(type => parkingResults.detailedRutgersSurvey[type]);
    const censusData = apartmentTypes.map(type => parkingResults.censusData[type]);

    const data = [
        { x: apartmentTypes, y: rsisData, name: 'RSIS', type: 'bar' },
        { x: apartmentTypes, y: rutgersSurveyData, name: 'Rutgers Survey', type: 'bar' },
        { x: apartmentTypes, y: detailedRutgersSurveyData, name: 'Detailed Rutgers Survey', type: 'bar' },
        { x: apartmentTypes, y: censusData, name: 'Census data (ACS)', type: 'bar' }
    ];

    const layout = {
        barmode: 'group',
        title: 'Estimated Total Parking for Each Source',
        xaxis: {
            title: 'Apartment Type',
        },
        yaxis: {
            title: 'Estimated Total Parking',
        },
    };

    Plotly.newPlot('barChart', data, layout);
}

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

    generateBarChart(parkingResults);
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `

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
