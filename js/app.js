const API_KEY = `772a913839a5554d872a7979fe132d62`;

const searchTemprature = () => {
    const city = document.getElementById( 'search-city' );
    const cityName = city.value;
    city.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ API_KEY }&units=metric`;
    fetch( url )
        .then( res => res.json() )
        .then( data => displayWeather( data ) );
};
const setInnerText = ( id, text ) => {
    document.getElementById( id ).innerText = text;
};

const displayWeather = temprature => {
    setInnerText( 'city', temprature.name );
    setInnerText( 'temprature', temprature.main.temp );
    setInnerText( 'cloud', temprature.weather[ 0 ].main );
    const url = `http://openweathermap.org/img/wn/${ temprature.weather[ 0 ].icon }@2x.png`;
    const imgIcon = document.getElementById( 'cloud-icon' );
    imgIcon.setAttribute( 'src', url );
};
// const displayWeather = temprature => {
//     console.log( temprature );
//     const main = document.getElementById( 'main' );
//     const url = `http://openweathermap.org/img/wn/${ temprature.weather[ 0 ].icon }@2x.png`;
//     main.innerHTML = `
//             <img src="${ url }" alt="">
//             <h1>${ temprature.name }</h1>
//             <h3><span>${ temprature.main.temp }</span>&deg;C</h3>
//             <h1 class="lead">${ temprature.weather[ 0 ].main }</h1>
//     `;
// };