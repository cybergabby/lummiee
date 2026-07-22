const form = document.getElementById('order-form');
const formMessage = document.getElementById('form-message');

if (form && formMessage) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name') || 'Guest';
    const collection = data.get('collection') || 'General enquiry';
    const message = data.get('message') || 'No additional details provided.';

    const whatsappText = `Hello Lummiee Jewels, my name is ${name}. I am interested in the ${collection} collection. My message: ${message}`;

    window.open(
      `https://wa.me/2349115038647?text=${encodeURIComponent(whatsappText)}`,
      '_blank'
    );

    form.reset();
    formMessage.textContent = 'Thank you! Your request is being sent on WhatsApp.';
  });
}
