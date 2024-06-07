import "../styles/Categories.css";
function Categories({ categories, updateCategorieSelected }) {
  return (
    <div className="lmj-categories">
      <label for="category-selector">
        Choisissez une catégorie de plante :
      </label>
      <select
        onChange={(e) => updateCategorieSelected(e.target.value)}
        id="category-selector"
        defaultValue="all"
        className="lmj-categories-select"
      >
        <option key="all" value="all">
          toutes les catégories
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
