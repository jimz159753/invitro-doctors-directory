import './filter.css';

interface FilterControllerProps {
  filter: string;
  setFilter: (filter: string) => void;
  specialties: string[];
}

const FilterController = ({
  filter,
  setFilter,
  specialties,
}: FilterControllerProps) => (
  <div className="filter-container">
    <label htmlFor="specialty">
      Filter by Specialty:
    </label>
    <select
      id="specialty"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      aria-label="Filter by Specialty"
    >
      {specialties.map((spec) => (
        <option key={spec}>{spec}</option>
      ))}
    </select>
  </div>
);

export default FilterController;
