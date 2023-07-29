import { getWeather } from "@/lib/getWeather";
import { getLocation } from "@/lib/getLocation";
import Search from "@/components/search/Search";

export default async function Home() {
  // const data = await getWeather(50.4501, 30.5234);

  // console.log("Data ", data);
  // const location: LocationData = await getLocation("Kharkiv");
  //
  // const weather: WeatherData = await getWeather(
  //   location.latitude,
  //   location.longitude
  // );

  // console.log("Weather", weather);

  return (
    <main>
      <Search />
    </main>
  );
}
