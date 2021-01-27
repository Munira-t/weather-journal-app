console.log('running from client side');

/**  Global Variable
 * Personal API Key for OpenWeatherMap API
 * Open Weather Map Base URL
 */
const API_Key = '&appid=4dc11b76650ff965dd1ced0a3f261986&units=imperial';
const Base_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const zipElement = document.getElementById('zip');
const feelingsElement = document.getElementById('feelings');
const subContent = document.getElementById('sub-cont');

/** calculate date function */
const newdate = () => {
  let d = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months_arr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let newDate = days[d.getDay()];
  +' ' + d.getDate();
  +' ' + months_arr[d.getMonth()];
  +', ' + d.getFullYear();

  return newDate;
};

/* Event listener to add function to existing HTML DOM element */
document.getElementById('generate').addEventListener('click', preformAction);

/* Function called by event listener*/
function preformAction(e) {
  e.preventDefault();
  const zip = zipElement.value;
  const content = feelingsElement.value;
  getWeather(zip).then((info) => {
    // if city not found return alert
    if (info.cod != 200) {
      return alert(info.message);
    } else {
      postData('/postData', {
        date: newdate(),
        temp: info.main.temp,
        city: info.name,
        desc: info.weather[0].main,
        icon: info.weather[0].icon,
        content: content,
      });
    }
  });
}

/** Get zip code/city name Information from Openweathermap API
 * conver the req into Json
 */
const getWeather = async (zipCode) => {
  const url = `${Base_URL}${zipCode}${API_Key}`;
  const request = await fetch(url);
  try {
    const Weatherdata = await request.json();
    return Weatherdata;
  } catch (error) {
    console.log('error', error);
  }
};

/** Post Data To Server API  */
const postData = async (url = '', data = {}) => {
  console.log('post weather data: ', data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log('post res: ', newData);
    // Update UI
    updateUI();
  } catch (error) {
    console.log('error', error);
  }
};

/** Update UI with data  */
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const data = await request.json();
    console.log('updateUI: ', data);
    const divEntry = document.createElement('div');
    divEntry.classList.add('form', 'entry');
    const divEntryHolder = document.createElement('div');
    divEntryHolder.classList.add('entryHolder');
    // City Name Entry
    const divName = document.createElement('div');
    divName.classList.add('name');
    divName.innerHTML = `${data.city}`;

    // Date Entry
    const divDate = document.createElement('div');
    divDate.classList.add('date');
    divDate.innerHTML = `${data.date}`;

    // Icon Entry
    const imgIcon = document.createElement('img');
    imgIcon.classList.add('icon');
    imgIcon.src = `http://openweathermap.org/img/w/${data.icon}.png`;

    // Temp Entry
    const divTemp = document.createElement('div');
    divTemp.classList.add('temp');
    divTemp.innerHTML = `${data.temp} °C`;

    // Desc Entry
    const divDesc = document.createElement('div');
    divDesc.classList.add('desc');
    divDesc.innerHTML = `${data.desc}`;

    // Feelings Entry
    const divMood = document.createElement('div');
    divMood.classList.add('mood-note');
    const subTitle = document.createElement('p');
    // const noteIcon = document.createElement('i');
    // noteIcon.classList.add('far', 'fa-edit');
    // subTitle.appendChild(noteIcon);
    divMood.appendChild(subTitle);
    subTitle.innerHTML = '<i class="far fa-edit"></i>  mood note:';
    const divContent = document.createElement('div');
    divContent.classList.add('content');
    divContent.innerHTML = `${data.content}`;
    divMood.appendChild(divContent);

    // appand all node
    divEntryHolder.appendChild(divName);
    divEntryHolder.appendChild(divDate);
    divEntryHolder.appendChild(imgIcon);
    divEntryHolder.appendChild(divTemp);
    divEntryHolder.appendChild(divDesc);
    divEntryHolder.appendChild(divMood);
    divEntry.appendChild(divEntryHolder);
    subContent.appendChild(divEntry);
  } catch (error) {
    console.log('error', error);
  }
};
