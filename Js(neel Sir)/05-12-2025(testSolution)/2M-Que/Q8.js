const company = {
    ceo: { name: "Anita", contact: { email: "anita@co.com" } },
    teams: [{ lead: { name: "Jay" }, members: ["Virat", "Rohit", "Gautam"] }],
    location: { city: "Ahmedabad", country: "India" },
};


let firstMember = company.teams[0].members[0];


let cityName = company.location.city;


let totalMembers = company.teams[0].members.length;

console.log("First Member:", firstMember);
console.log("City:", cityName);
console.log("Total Members:", totalMembers);