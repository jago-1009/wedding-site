let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
let currentDay = currentDate.getDate();


// Format the date as YYYY-MM-DD
let formattedDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
console.log(formattedDate); // Output the formatted date

if (currentMonth >= 22 && currentDay >= 13 && currentYear >= 2025) { // Check if the current date is after February 12, 2025 (TODO: Change this to the actual RSVP date)
    if (document.getElementById("rsvp")) {
        document.getElementById("rsvp").style.display = "flex";
    }
    if (document.getElementById('rsvp-info')) {
document.getElementById('rsvp-info').innerHTML = "You can rsvp for the wedding <a href='https://withjoy.com/jacob-and-jena/rsvp'>here</a>!";
    }

}
else {
    if (document.getElementById("rsvp")) {
document.getElementById("rsvp").style.display = "none";
    }
    if (document.getElementById('rsvp-info')) {

document.getElementById('rsvp-info').innerHTML = "We'll keep you guys updated with any information regarding rsvp and invitations!";
    }
}