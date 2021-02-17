const form = document.querySelector('form');
const input = document.querySelector('input');
const weather = document.querySelector('#weather-info');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  fetch(`http://localhost:3000/weather?address=${encodeURIComponent(input.value)}`)
  .then((response) => {
    return response.json();
  }).then((response) => {
    if (response.error) {
      return weather.innerHTML = '<p>Enter Valid Location</p>'
    }
    weather.innerHTML = '';
    input.value = '';
    const { address, description, temperature, feelslike } = response;
    weather.innerHTML = `
      <p>Address: ${address}</p>
      <p>Description: ${description}</p>
      <p>Temperature: ${temperature}</p>
      <p>Feels Like: ${feelslike}</p>`;
  }).catch(error => {
    console.log(error);
  });
});