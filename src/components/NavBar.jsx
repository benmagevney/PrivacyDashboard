import SearchBar from "./SearchBar";

const NavBar = ({ searchQuery, setSearchQuery, companyNames }) => {

    return (
        <div className="bg-white mx-10">
            <div className="flex items-center justify-between">
                <h1 className="font-black text-3xl py-5">
                    Data Privacy Dashboard
                </h1>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} companyNames={companyNames} />
            </div>

        </div>
    )

}

export default NavBar;