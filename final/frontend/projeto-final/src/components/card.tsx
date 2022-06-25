import "./style.css";

interface IAnimal {
  imgUrl: string;
  species: string;
  name: string;
  gender: string;
  id: string;
  status: string;
}

let genderimg: string;

export default function Card(props: IAnimal) {
  if (props.gender === "M") {
    genderimg = "./img/male.png";
  } else {
    genderimg = "./img/female.png";
  }
  return (
    <div className="card">
      <img
        className="genderimg"
        src={genderimg}
        alt="Sexo do Animal"
        width={16}
      />
      <img src={props.imgUrl} alt={props.name} width={130} height={130} />
      <h3>
        {props.species} {props.name}
      </h3>
      <p>id: {props.id}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}
