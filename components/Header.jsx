export const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <nav className="navbar bg-body-secondary py-4">
        <div className="container">
          <a className="navbar-brand fw-bold fst-italic text-primary" href="/">
            𝓂𝑒𝑒𝓉𝓊𝓅
          </a>
          <div className="d-flex align-items-center">
            <i className="bi bi-search me-2"></i>
            <input
              className=" form-control me-2"
              type="search"
              value={searchTerm}
              placeholder="Search By title and tags"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
