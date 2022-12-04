import { Link } from "react-router-dom";


const CharacterByHero = ({alter_ego, characters}) => {
  if(alter_ego === characters) return(<></>);
  return (<p>{characters}</p>);
}

export const HeroCard = ({ hero }) => {

  const heroImg = `/assets/heroes/${hero.id}.jpg`;

  return (
    <div className="col ">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={heroImg} alt={hero.superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>
              <CharacterByHero characters={hero.characters} alter_ego={hero.alter_ego} />
              <p className="card text">
                <small>{hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`} >
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
