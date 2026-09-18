export function getWeatherInfo(code) {
  if (code === 0) {
    return {
      icon: "☀️",
      description: "Clear Sky",
    };
  }

  if (code >= 1 && code <= 3) {
    return {
      icon: "🌤️",
      description: "Partly Cloudy",
    };
  }

  if (code >= 45 && code <= 48) {
    return {
      icon: "🌫️",
      description: "Foggy",
    };
  }

  if (code >= 51 && code <= 57) {
    return {
      icon: "🌦️",
      description: "Drizzle",
    };
  }

  if (code >= 61 && code <= 67) {
    return {
      icon: "🌧️",
      description: "Rain",
    };
  }

  if (code >= 71 && code <= 77) {
    return {
      icon: "❄️",
      description: "Snow",
    };
  }

  if (code >= 80 && code <= 82) {
    return {
      icon: "🌦️",
      description: "Rain Showers",
    };
  }

  if (code >= 95) {
    return {
      icon: "⛈️",
      description: "Thunderstorm",
    };
  }

  return {
    icon: "🌤️",
    description: "Weather",
  };
}