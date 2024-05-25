import { useGetTravelersQuery } from "../services/travelers";

type TravelerState = {
  travelers: any[];
};

const Traveler = () => {
  const { data: travelers, isLoading } = useGetTravelersQuery();
  travelers && console.log(travelers);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Liste des voyageurs :</h2>
      <ul>
        {travelers.map((traveler: any) => (
          <li key={traveler.id}>
            <strong>Nom :</strong> {traveler.name}, <strong>Emploi :</strong>{" "}
            {traveler.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Traveler;
