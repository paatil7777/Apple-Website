import React, { useState } from "react";

/* Sample data to search */
const searchData = [
  "iPhone 14",
  "iPhone 14 Pro",
  "Vivo V27",
  "Vivo V25 Pro",
  "Oppo F21",
  "Oppo Reno 10",
  "Poco X5",
  "Poco F5",
  "Redmi Note 12",
  "Redmi Note 12 Pro",
];

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setResults([]);
      return;
    }

    // Filter the searchData array based on the query
    const filteredResults = searchData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      alert(`Found: ${results.join(", ")}`);
    } else {
      alert("No results found");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-stylish">
      <div className="container-fluid">
        <div className="navbar-logo">
          <span className="s-logo">SATVIK THE MOBILE ONE STOP SHOP</span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    iCloud
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Apple Music
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Show search results */}
          {results.length > 0 && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                border: "1px solid #ddd",
                marginTop: "5px",
                maxHeight: "200px",
                overflowY: "auto",
                width: "200px",
                zIndex: 1000,
              }}
            >
              {results.map((item, index) => (
                <div
                  key={index}
                  style={{ padding: "5px 10px", cursor: "pointer" }}
                  onClick={() => {
                    setSearchQuery(item);
                    setResults([]);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
