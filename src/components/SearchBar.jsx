const SearchBar = ({ searchQuery, setSearchQuery }) => {

    return (
        <div className="">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className=" bg-backgroundBlue p-2 rounded-2xl  w-96"
            />
        </div>
    )

};

export default SearchBar;