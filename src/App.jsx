// import { useEffect } from "react";

// import SearchBar from "./components/SearchBar";
// import WeatherCard from "./components/WeatherCard";
// import WeatherDetails from "./components/WeatherDetails";
// import Forecast from "./components/Forecast";

// import { getWeather } from "./services/WeatherApi";

// function App() {
//   const [city, setCity] = useState("");

//   const [weatherData, setWeatherData] = useState(null);

//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState("");

//   const [unit, setUnit] = useState("C");

//   async function searchWeather() {
//     if (!city.trim()) {
//       setError("Please enter a city name");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const data = await getWeather(city);

//       setWeatherData(data);

//     } catch (error) {
//       setWeatherData(null);
//       setError(error.message);

//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     searchWeather();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400 px-4 py-10">

//       <div className="mx-auto max-w-6xl">

//         {/* Header */}

//         <div className="mb-8 text-center text-white">

//           <h1 className="text-4xl font-bold sm:text-5xl">
//             🌤️ Weather Explorer
//           </h1>

//           <p className="mt-3 text-blue-100">
//             Real-time weather information
//           </p>

//         </div>

//         {/* Main Application */}

//         <div className="rounded-3xl bg-slate-100/95 p-5 shadow-2xl sm:p-8">

//           {/* Search */}

//           <SearchBar
//             city={city}
//             setCity={setCity}
//             onSearch={searchWeather}
//           />


//           {/* Controls */}

//           <div className="mt-5 flex flex-wrap justify-center gap-3">

//             <button
//               onClick={searchWeather}
//               disabled={loading}
//               className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
//             >
//               {loading ? "Refreshing..." : "🔄 Refresh Weather"}
//             </button>


//             <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white">

//               <button
//                 onClick={() => setUnit("C")}
//                 className={`px-5 py-3 font-semibold transition ${
//                   unit === "C"
//                     ? "bg-blue-600 text-white"
//                     : "text-slate-700 hover:bg-slate-100"
//                 }`}
//               >
//                 °C
//               </button>

//               <button
//                 onClick={() => setUnit("F")}
//                 className={`px-5 py-3 font-semibold transition ${
//                   unit === "F"
//                     ? "bg-blue-600 text-white"
//                     : "text-slate-700 hover:bg-slate-100"
//                 }`}
//               >
//                 °F
//               </button>

//             </div>

//           </div>


//           {/* Loading */}

//           {loading && (
//             <div className="py-12 text-center">

//               <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

//               <p className="mt-4 font-medium text-slate-600">
//                 Getting latest weather...
//               </p>

//             </div>
//           )}


//           {/* Error

//           {error && !loading && (
//             <div className="mt-6 rounded-xl bg-red-100 p-4 text-center font-medium text-red-700">
//               ❌ {error}
//             </div>
//           )} */}


//           {/* Weather */}

//           {weatherData && !loading && !error && (
//             <>

//               <WeatherCard
//                 location={weatherData.location}
//                 weather={weatherData.weather}
//                 unit={unit}
//               />

            

//               <Forecast
//                 daily={weatherData.daily}
//                 unit={unit}
//               />

//             </>
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;
import { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

import { getWeather } from "./services/WeatherApi";

function App() {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [unit, setUnit] = useState("C");

  async function searchWeather() {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeatherData(data);

    } catch (error) {
      setWeatherData(null);
      setError(error.message);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400 px-4 py-10">

      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="mb-8 text-center text-white">

          <h1 className="text-4xl font-bold sm:text-5xl">
            🌤️ Weather Explorer
          </h1>

          <p className="mt-3 text-blue-100">
            Real-time weather information
          </p>

        </div>

        {/* Main Application */}

        <div className="rounded-3xl bg-slate-100/95 p-5 shadow-2xl sm:p-8">

          {/* Search */}

          <SearchBar
            city={city}
            setCity={setCity}
            onSearch={searchWeather}
          />

          {/* Controls */}

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            <button
              onClick={searchWeather}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Refreshing..." : "🔄 Refresh Weather"}
            </button>

            <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white">

              <button
                onClick={() => setUnit("C")}
                className={`px-5 py-3 font-semibold transition ${
                  unit === "C"
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                °C
              </button>

              <button
                onClick={() => setUnit("F")}
                className={`px-5 py-3 font-semibold transition ${
                  unit === "F"
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                °F
              </button>

            </div>

          </div>

          {/* Loading */}

          {loading && (
            <div className="py-12 text-center">

              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

              <p className="mt-4 font-medium text-slate-600">
                Getting latest weather...
              </p>

            </div>
          )}

          {/* Error */}

          {error && !loading && (
            <div className="mt-6 rounded-xl bg-red-100 p-4 text-center font-medium text-red-700">
              ❌ {error}
            </div>
          )}
          {/* {error && !loading && (
  <p className="mt-4 text-center font-semibold text-red-600">
    ❌ Please enter a valid city name
  </p>
)} */}

          {/* Weather */}

          {weatherData && !loading && !error && (
            <>
              <WeatherCard
                location={weatherData.location}
                weather={weatherData.weather}
                unit={unit}
              />

              <Forecast
                daily={weatherData.daily}
                unit={unit}
              />
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;