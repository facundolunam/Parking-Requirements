const parkingRatios = {
    1: 1.5,
    2: 2.0,
    3: 2.5
};

function calculateParking() {
    // Get apartment counts from input fields
    const count1Bedroom = parseInt(document.getElementById("count1Bedroom").value);
    const count2Bedroom = parseInt(document.getElementById("count2Bedroom").value);
    const count3PlusBedroom = parseInt(document.getElementById("count3PlusBedroom").value);

    // Calculate estimated parking
    const estimatedParking = (count1Bedroom * parkingRatios[1]) +
        (count2Bedroom * parkingRatios[2]) +
        (count3PlusBedroom * parkingRatios[3]);

    // Display the result on the dashboard
    document.getElementById("estimatedParking").textContent = `${estimatedParking} parking spaces`;
}
