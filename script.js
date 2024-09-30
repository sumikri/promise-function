// Create a new Promise
let myPromise = new Promise(function(resolve, reject) {
    // Simulate an asynchronous operation using setTimeout
    let isSuccess = true;  // Change to 'false' to test the reject case
  
    setTimeout(function() {
      if (isSuccess) {
        resolve("The operation was successful!");
      } else {
        reject("There was an error.");
      }
    }, 2000); // 2 seconds delay
  });
  
  // Use the Promise
  myPromise
    .then(function(successMessage) {
      console.log("Success: " + successMessage);
    })
    .catch(function(errorMessage) {
      console.log("Error: " + errorMessage);
    });
  