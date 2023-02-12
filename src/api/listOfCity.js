const url = 'http://api.openweathermap.org/geo/1.0/direct';
const access_key = 'afb69fcfac84ecf893707995ea2d1c7e';

async function listOfCity(city) {

  const responseCity = await fetch(url + `?q=${city}&limit=10&appid=${access_key}`,
    {
      Headers: { 'content-Type': 'application/json' }
    });
console.log(responseCity);
  return responseCity.json();

}

export default listOfCity