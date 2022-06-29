import './filter-item.scss';

const FilterItem = ({ name, title, checked, changeFilter }) => {
  const handleChange = (event) => {
    changeFilter(event);
  };

  return (
    <div className="filter-item">
      <input
        type="checkbox"
        id={title}
        name={name}
        value={title}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={title} className={checked.toString()}>
        {title}
      </label>
    </div>
  );
};

export default FilterItem;
