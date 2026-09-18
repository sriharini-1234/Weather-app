function WeatherDetails({ weather, unit }) {
  const convertTemperature = (temperature) => {
    if (unit === "C") {
      return Math.round(temperature);
    }

    return Math.round((temperature * 9) / 5 + 32);
  };

  const details = [
    {
      title: "Feels Like",
      value: `${convertTemperature(weather.apparent_temperature)}°${unit}`,
      icon: "🌡️",
    },
    {
      title: "Humidity",
      value: `${weather.relative_humidity_2m}%`,
      icon: "💧",
    },
    {
      title: "Wind",
      value: `${weather.wind_speed_10m} km/h`,
      icon: "💨",
    },
    {
      title: "Precipitation",
      value: `${weather.precipitation} mm`,
      icon: "🌧️",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {details.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-3xl">
            {item.icon}
          </div>

          <p className="mt-2 text-sm text-slate-500">
            {item.title}
          </p>

          <p className="mt-1 text-xl font-bold text-slate-800">
            {item.value}
          </p>
        </div>
      ))}

    </div>
  );
}

export default WeatherDetails;