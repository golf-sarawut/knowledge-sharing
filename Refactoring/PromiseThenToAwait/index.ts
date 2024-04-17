// Assume we have some mock asynchronous functions that return Promises
function fetchUserId(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000); // Simulate async operation with timeout
  });
}

function fetchUserDetails(
  userId: number
): Promise<{ name: string; age: number }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "John Doe", age: 30 }), 1000); // Simulate async operation with timeout
  });
}

function fetchUserPermissions(name: string): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["read", "write"]), 1000); // Simulate async operation with timeout
  });
}

// Using Promise .then() chaining
fetchUserId()
  .then((userId) => {
    console.log(`Fetched user ID: ${userId}`);
    return fetchUserDetails(userId);
  })
  .then((userDetails) => {
    console.log(
      `Fetched user details: ${userDetails.name}, ${userDetails.age}`
    );
    return fetchUserPermissions(userDetails.name);
  })
  .then((permissions) => {
    console.log(`Fetched user permissions: ${permissions.join(", ")}`);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
