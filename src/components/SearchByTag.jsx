import { useState } from "react";
import projects from "../projects.json";
import ProjectDisplay from "./ProjectDisplay";

const SearchByTag = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const results = projects.filter(project =>
      project.tags.some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setSearchResults(results);
    setHasSearched(true);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSearchResults([]);
    setHasSearched(false);
  };

  const displayedProjects = hasSearched ? searchResults : projects;

  return (
    <div className="searchListContainer">
      <h3>Search by Tag:</h3>
      <input
        type="text"
        placeholder="Enter tag"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="tagSearch"
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset Search</button>

      {hasSearched && searchResults.length === 0 ? (
        <p>Sorry, no results for that keyword.</p>
      ) : (
        displayedProjects.map(project => (
          <ProjectDisplay key={project.title} project={project} />
        ))
      )}
    </div>
  );
};

export default SearchByTag;
