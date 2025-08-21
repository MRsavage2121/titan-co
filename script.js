const bookingForm = document.getElementById('bookingForm');
const successMsg = document.getElementById('successMsg');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const notes = document.getElementById('notes').value;

  db.collection('bookings').add({
    name, email, phone, service, date, notes,
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
