import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function TaskF() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchParams]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchParams({ q: query });
    navigate(`/?q=${query}`);
  };

  const mockData = ['html', 'css', 'bootstrap', 'js'];

  const results = mockData.filter((item) =>
    item.includes(query)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      {query
        ?
        (
          <div>
            <h2>Search Results for "{query}":</h2>
            {
            results.length > 0 
              ? (
              <ul>
                {results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            )
              : (
                <p>No results found.</p>
              )}
          </div>
        ) 
        : 
        ( 
          <div>
            <h2>All Items:</h2>
            <ul>
              {mockData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

export default TaskF;