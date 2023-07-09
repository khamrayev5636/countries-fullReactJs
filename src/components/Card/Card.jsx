import "./card.scss";

const Card = ({ img, name, population, region, capital }) => {
  return (
    <>
      <li className="card__item mb-5 mx-auto mx-xl-0">
        <img src={img} alt="germany flag" width={267} height={167} />
        <div className="p-4">
          <h3 className="title">{name}</h3>
          <p className="text mb-2">
            Population: <span>{population}</span>
          </p>
          <p className="text mb-2">
            Region: <span>{region}</span>
          </p>
          <p className="text mb-0">
            Capital: <span>{capital}</span>
          </p>
        </div>
      </li>
    </>
  );
};

export default Card;
