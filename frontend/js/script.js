// Booking function with Razorpay integration
function bookTrip(event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const numPeople = document.getElementById("numPeople").value;

  if (!date || !numPeople || numPeople <= 0) {
    alert("Please enter a valid date and number of people.");
    return;
  }

  const amount = 500 * parseInt(numPeople); // ₹500 per person

  const options = {
    key: "rzp_test_4MDoyzV82gGIUs", // Replace with your Razorpay key
    amount: amount * 100, // Amount in paisa
    currency: "INR",
    name: "TravelingBird",
    description: `Trip to ${destination}`,
    image: "../media/images/logo.png", // Optional: your logo
    handler: function (response) {
      alert(`✅ Booking Confirmed!\nTrip to ${destination} on ${date}\nBooking ID: ${response.razorpay_payment_id}`);

      // Optionally send this to your backend
      // e.g., POST to /api/bookings
    },
    prefill: {
      name: "",
      email: ""
    },
    theme: {
      color: "#0077b6"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
const allDestinations = [
  { name: "Manali", file: "manali.html", image: "media/images/manali.jpg" },
  { name: "Madurai", file: "madurai.html", image: "media/images/madurai.jpg" },
  { name: "Munnar", file: "munnar.html", image: "media/images/munnar.jpg" },
  { name: "Goa", file: "goa.html", image: "media/images/goa.jpg" },
  { name: "Ooty", file: "ooty.html", image: "media/images/ooty.jpg" },
  { name: "Coorg", file: "coorg.html", image: "media/images/coorg.jpg" },
  { name: "Agra", file: "agra.html", image: "media/images/agra.jpg" },
  { name: "Udaipur", file: "udaipur.html", image: "media/images/udaipur.jpg" },
  { name: "Hyderabad", file: "hyderabad.html", image: "media/images/hyderabad.jpg" },
  { name: "Shimla", file: "shimla.html", image: "media/images/shimla.jpg" },
  { name: "Puri", file: "puri.html", image: "media/images/puri.jpg" },
  { name: "Kodaikanal", file: "kodaikanal.html", image: "media/images/kodaikanal.jpg" },
  { name: "Mount Abu", file: "mountabu.html", image: "media/images/mountabu.jpg" },
  { name: "Darjeeling", file: "darjeeling.html", image: "media/images/darjeeling.jpg" },
  { name: "Delhi", file: "delhi.html", image: "media/images/delhi.jpg" },
  { name: "Mumbai", file: "mumbai.html", image: "media/images/mumbai.jpg" },
  { name: "jaisalmer", file: "jaisalmer.html", image: "media/images/jaisalmer.jpg" },
  { name: "Jaipur", file: "jaipur.html", image: "media/images/jaipur.jpg" },
  { name: "Varanasi", file: "varanasi.html", image: "media/images/varanasi.jpg" },
  { name: "Leh", file: "leh.html", image: "media/images/leh.jpg" },
  { name: "Andaman", file: "andaman.html", image: "media/images/andaman.jpg" },
  { name: "Kerala", file: "kerala.html", image: "media/images/kerala.jpg" },
  { name: "Khajuraho", file: "khajuraho.html", image: "media/images/khajuraho.jpg" },
  { name: "Mahabalipuram ", file: "mahabalipuram.html", image: "media/images/mahabalipuram.jpg" },
  { name: "Rishikesh", file: "rishikesh.html", image: "media/images/rishikesh.jpg" },
  { name: "Hampi", file: "hampi.html", image: "media/images/hampi.jpg" },
  { name: "Pondicherry", file: "pondicherry.html", image: "media/images/pondicherry.jpg" },
  { name: "Gangtok", file: "gangtok.html", image: "media/images/gangtok.jpg" },
  { name: "Amritsar", file: "amritsar.html", image: "media/images/amritsar.jpg" },
  { name: "Spiti", file: "spiti.html", image: "media/images/spiti.jpg" },
  { name: "Mussoorie", file: "mussoorie.html", image: "media/images/mussoorie.jpg" },
  { name: "Kaziranga", file: "kaziranga.html", image: "media/images/kaziranga.jpg" },
  { name: "Rameswaram", file: "rameswaram.html", image: "media/images/rameswaram.jpg" },
  { name: "Vally of Flowers", file: "valleyofflowers.html", image: "media/images/valleyofflowers.jpg" },
  { name: "Bikaner", file: "bikaner.html", image: "media/images/bikaner.jpg" },
  { name: "Lonavala", file: "lonavala.html", image: "media/images/lonavala.jpg" },
  { name: "Tawang", file: "tawang.html", image: "media/images/tawang.jpg" },
  { name: "Rann of Kutch", file: "rannofkutch.html", image: "media/images/rannofkutch.jpg" },
  { name: "Mysore", file: "mysore.html", image: "media/images/mysore.jpg" },
  { name: "Gulmarg", file: "gulmarg.html", image: "media/images/gulmarg.jpg" },
];

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = "";

  if (query.length < 2) return;

  const matched = allDestinations.filter(dest =>
    dest.name.toLowerCase().startsWith(query)
  );

  if (matched.length === 0) {
    resultsDiv.innerHTML = `<p>No destinations found for "${query}" 😢</p>`;
    return;
  }

  matched.forEach(dest => {
    const card = document.createElement("a");
    card.href = `destinations/${dest.file}`;
    card.className = "card";
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" />
      <h3>📍 ${dest.name}</h3>
    `;
    resultsDiv.appendChild(card);
  });
}
function bookHotel(name) {
  alert(`✅ Hotel Booked: ${name}\nThank you for choosing TravelingBird!`);
}

function bookPackage(name) {
  alert(`✅ Package Booked: ${name}\nHappy exploring with TravelingBird!`);
}