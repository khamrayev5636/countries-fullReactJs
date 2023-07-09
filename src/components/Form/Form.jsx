import "./form.scss";

const Form = () => {
  return (
    <div className="py-5">
      <div className="container">
        <form
          className="form d-flex flex-column flex-md-row justify-content-md-between"
          method="GET"
        >
          <input
            className="search__input mb-3 mb-md-0"
            type="search"
            name="countries_search"
            aria-label="Countries search"
            placeholder="Search for a country…"
          />
          <select className="form__select" aria-label="Default select example">
            <option selected hidden>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Form;
