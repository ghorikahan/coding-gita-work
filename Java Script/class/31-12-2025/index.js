function fetchUser() {
  console.log("Fetching user...");

  setTimeout(() => {
    console.log("User fetched successfully");
  }, 1500);
}

fetchUser();
console.log("Other operations continue");