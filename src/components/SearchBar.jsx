import React, { useState } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, companyNames }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            const suggestions = companyNames
                .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
                .slice(0, 10); // Limit to 10 suggestions
            setFilteredSuggestions(suggestions);
        } else {
            setFilteredSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search..."
                className="bg-backgroundBlue p-2 rounded-2xl w-96 ml-2"
            />
            {filteredSuggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 rounded-2xl mt-1 w-96 max-h-72 overflow-y-auto z-10">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="cursor-pointer p-2 hover:bg-gray-200 ml-2"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
