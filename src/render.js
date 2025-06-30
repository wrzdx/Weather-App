import getWeather from "./logic";

function createLocationForm() {
  const form = document.createElement("form");
  form.className = "location-form";
  
  const label = document.createElement("label");
  label.setAttribute("for", "location");
  label.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>';
  
  const search = document.createElement("input");
  search.type = "text";
  search.id = "location";
  search.placeholder = "Enter a city";
  
  let lastValidValue = '';

  const handler = async (e) => {    
    e.preventDefault();
    const city = search.value.trim();
    
    try {
      const weather = await getWeather(city);
      renderWeather(weather);
      lastValidValue = city;
    } catch (error) {
      // alert("City not found");
      console.error("Error fetching weather data:", error);
      search.value = lastValidValue;
    }
  };

  search.addEventListener('blur', () => {
    if (search.value.trim() && !lastValidValue) {
      lastValidValue = search.value.trim();
    }
    search.value = lastValidValue || '';
  });

  form.addEventListener("submit", handler);
  form.append(label, search);
  
  return form;
}

function renderWeather(weather) {
  if (weather.isNight()) {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
  const container = document.createElement("div");
  container.className = "weather-container";
  const icon = document.createElement("img");
  icon.src = weather.getIconPath();
  icon.alt = weather.icon_description;
  const temp = document.createElement("p");
  temp.className = "temp";
  temp.textContent = `${Math.round(weather.getCelcius())}°C`;
  temp.addEventListener("click", () => {
    if (temp.textContent.endsWith("°C")) {
      temp.textContent = `${Math.round(weather.temp)}°F`;
    } else {
      temp.textContent = `${Math.round(weather.getCelcius())}°C`;
    }
  });

  const condition = document.createElement("p");
  condition.className = "condition";
  condition.textContent = weather.condition;

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = weather.description;

  container.append(icon, temp, condition, description);

  const oldContainer = document.querySelector(".weather-container");
  if (oldContainer) {
    oldContainer.remove();
  } 
  document.body.appendChild(container);
  
}

export default function render() {
  const location = createLocationForm();
  const search = location.querySelector("input");
  search.value = "Innopolis";
  document.body.appendChild(location);
  const event = new Event("submit", { bubbles: true, cancelable: true });
  location.dispatchEvent(event);
}