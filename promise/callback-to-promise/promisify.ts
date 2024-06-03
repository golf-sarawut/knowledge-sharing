// Original callback-based function
function getData(callback) {
    setTimeout(() => {
        // null here is error, in this case error is null
        callback(null, 'Data received');
    }, 1000);
}

// Function to promisify the callback-based function
function promisify(callbackBasedFunc) {
    // TODO: Implement promisify function
}

// Promisified function
const getDataAsync = promisify(getData);

// Example usage
getDataAsync()
    .then((data) => {
        console.log(data); // Output: 'Data received'
    })
    .catch((error) => {
        console.error(error);
    });
