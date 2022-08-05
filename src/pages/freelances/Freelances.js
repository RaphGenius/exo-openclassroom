import DefaultPicture from "../../assets/roger.jpg";
import Card from "../../components/card/Card";
export default function Freelances() {
  //State
  const freelanceProfiles = [
    {
      name: "456",
      jobTitle: "Devops",
      picture: DefaultPicture,
    },
    {
      name: "John Doe",
      jobTitle: "Developpeur frontend",
      picture: DefaultPicture,
    },
    {
      name: "Jeanne Biche",
      jobTitle: "Développeuse Fullstack",
      picture: DefaultPicture,
    },
  ];
  // Comportement

  //Render
  return (
    <div>
      <h1>Freelances disponible!</h1>
      <div>
        {freelanceProfiles.map((profil, index) => (
          <Card
            key={`${profil.name}-${index}`}
            label={profil.jobTitle}
            picture={profil.picture}
            DefaultPicture={DefaultPicture}
          />
        ))}
      </div>
    </div>
  );
}
