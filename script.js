// Initialize Firestore (firebaseConfig should already be in firebase-config.js)
const db = firebase.firestore();

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {

  // --- Booking Form ---
  const bookingForm = document.getElementById('bookingForm');
  const successMsg = document.getElementById('successMsg');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
    const service = document.getElementById('service').value;
    const date = document.getElementById('date') ? document.getElementById('date').value : '';
    const location = document.getElementById('booking-location') ? document.getElementById('booking-location').value.trim() : '';
    const notes = document.getElementById('notes') ? document.getElementById('notes').value.trim() : '';

    // Save to Firestore
    db.collection('bookings').add({
      name,
      email,
      phone,
      service,
      date,
      location,
      notes,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      successMsg.textContent = "Booking submitted successfully!";
      bookingForm.reset();
    })
    .catch(err => {
      console.error(err);
      successMsg.textContent = "Error submitting booking. Try again.";
    });
  });

  // --- Map Integration ---
  const mapAreas = document.querySelectorAll('.map-area'); // class for clickable areas
  const locationInput = document.getElementById('booking-location');

  mapAreas.forEach(area => {
    area.addEventListener('click', () => {
      const areaName = area.getAttribute('data-location');
      if(locationInput) locationInput.value = areaName;
    });
  });

});
