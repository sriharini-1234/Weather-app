import { getWeatherInfo } from "../services/WeatherUtils";

function Forecast({ daily, unit }) {
  const convertTemperature = (temperature) => {
    if (unit === "C") {
      return Math.round(temperature);
    }

    return Math.round((temperature * 9) / 5 + 32);
  };

  const formatDate = (date) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="mt-8">

      <h2 className="mb-4 text-2xl font-bold text-slate-800">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

        {daily.time.map((date, index) => {
          const info = getWeatherInfo(
            daily.weather_code[index]
          );

          return (
            <div
              key={date}
              className="cursor-pointer rounded-2xl bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <p className="font-semibold text-slate-700">
                {formatDate(date)}
              </p>

              <div className="my-4 text-4xl">
                {info.icon}
              </div>

              <p className="text-sm text-slate-500">
                {info.description}
              </p>

              <div className="mt-4 flex justify-center gap-3">

                <span className="font-bold text-slate-800">
                  {convertTemperature(
                    daily.temperature_2m_max[index]
                  )}°{unit}
                </span>

                <span className="text-slate-400">
                  {convertTemperature(
                    daily.temperature_2m_min[index]
                  )}°{unit}
                </span>

              </div>

              <p className="mt-3 text-sm text-blue-600">
                🌧️ {daily.precipitation_probability_max[index]}%
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Forecast;