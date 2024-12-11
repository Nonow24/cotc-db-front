import { useGetTravelersQuery } from "../services/travelers";

type Job = "Warrior" | "Merchant" | "Thief" | "Apothecary" | "Hunter" | "Cleric" | "Dancer" | "Scholar";

interface Traveler {
  id: string;
  name: string;
  job: Job;
}

const Traveler = () => {
  const { data: travelers, isLoading } = useGetTravelersQuery();

  const JobIcons: { [key in Job]: string } = {
    Warrior: "Sword.png",
    Merchant: "Polearm.png",
    Thief: "Dagger.png",
    Apothecary: "Axe.png",
    Hunter: "Bow.png",
    Cleric: "Staff.png",
    Dancer: "Fan.png",
    Scholar: "Tome.png",
  };

  const generateImagePath = (name: string) => {
    return name
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_]/g, "");
  };

  if (isLoading) return <div className="text-center text-lg font-bold">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Traveler List:</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {travelers.map((traveler: Traveler) => (
          <div
            key={traveler.id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg w-60 h-70 flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gray-100 p-4 border-b border-gray-200 flex flex-wrap justify-center items-center gap-2">
              <h3 className="text-xl font-semibold text-gray-800 truncate">{traveler.name}</h3>
              <img
                src={`img/${JobIcons[traveler.job]}`}
                alt={traveler.job}
                className="h-4 object-cover"
              />           
            </div>
            <div className="flex-grow flex items-center justify-center bg-gray-50">
            <img
              src={`img/${generateImagePath(traveler.name)}.png`}
              alt={traveler.name}
              className="w-full h-48 object-cover"
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traveler;
