import React, { useState } from "react";

const MenuCard = ({ menuData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOrder = () => {
    alert("ordered");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMenuData = menuData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search menu items"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar-input"
        />
      </div>
      <section className="main-card--cointainer">
        {filteredMenuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <div className="card-container" key={id}>
              <div className="card ">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle"> {category}</span>
                  <h2 className="card-title"> {name} </h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />

                <span className="card-tag  subtle" onClick={handleOrder}>
                  Order Now
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
