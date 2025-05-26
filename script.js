
const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
const form = document.getElementById('donationForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.textContent = "धन्यवाद! आपकी जानकारी भेज दी गई है।";
      msg.style.color = "green";
      form.reset();
    })
    .catch(error => {
      msg.textContent = "कुछ त्रुटि हुई, कृपया फिर प्रयास करें।";
      msg.style.color = "red";
    });
});
