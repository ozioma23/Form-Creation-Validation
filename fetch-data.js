async function fetchUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    const dataContainer = document.getElementById('api-data');
    
    
    try {
// Clear the existing content 
        dataContainer.innerHTML = '';

        // Fetch user data from the API asynchronously
        const response = await fetch(apiUrl);

        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        // Convert the response to JSON and store it in the 'users' constant
        const users = await response.json();

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users array and create a <li> for each user
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = user.name;
            userList.appendChild(userItem);
        });

        // Append the user list to the dataContainer
        dataContainer.appendChild(userList); 


    }catch (error) {
        
    // If there is an error (e.g., network issue or invalid response), display an error message
    dataContainer.textContent = 'Error fetching data: ' + error.message;

    // Set text content to indicate an error message
    dataContainer.textContent = 'Failed to load user data.';
}
}

document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});
