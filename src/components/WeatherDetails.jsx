function WeatherDetails({ weather }) {
  const details = [
    {
      title: "Feels Like",
      value: `${Math.round(weather.apparent_temperature)}°C`,
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
          className="rounded-2xl bg-white p-5 text-center shadow-md"
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