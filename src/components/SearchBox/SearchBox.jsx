const SearchBox = ({ value, onSearch }) => {
  return (
    <div className="search-box">
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
