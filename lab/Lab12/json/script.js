function fetchUserData() {
    // Fetching the local JSON file
    fetch('user.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(userDataArray => {
        const userInfoDiv = document.getElementById('userInfo');
        userInfoDiv.innerHTML = ''; // Clear any previous user information

        // Loop through the array of users and create a user card for each one
        userDataArray.forEach(userData => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card'); // Add a class for styling
            
            // Create the HTML content for each user
            userCard.innerHTML = `
                <h2>${userData.name}</h2>
                <p><strong>Username:</strong> ${userData.username}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Address:</strong> ${userData.address.street}, 
                ${userData.address.city}, ${userData.address.zipcode}</p>
            `;
            
            // Append the user card to the userInfo div
            userInfoDiv.appendChild(userCard);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
