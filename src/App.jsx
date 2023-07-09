import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import { COUNTRIES } from "./constants";

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <div className="container">
        <ul className="d-flex flex-wrap justify-content-between ps-0">
          {COUNTRIES.map((item, index) => {
            return (
              <Card
                img={item.flags.png}
                name={item.name}
                population={item.population}
                region={item.region}
                capital={item.capital}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
