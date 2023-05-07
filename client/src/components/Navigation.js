import { useState } from "react";
import { GrSearch, GrMenu } from "react-icons/gr";
import Categories from "./Categories";
import MenuOptions from "./MenuOptions";
import Search from "./Search";

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenuOptions, setMenuOptions] = useState(false);

  const handleOpenSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="navigation">
      <div className="navigationContainer">
        <div className="navigationTop">
          <Categories />
          <div className="navigationRight">
            <div className="navigationItem">
              <GrSearch className="icon" onClick={handleOpenSearch} />
            </div>
            <div className="navigationItem showMenuOptions">
              <GrMenu
                className="icon"
                onClick={() => setMenuOptions(!showMenuOptions)}
              />
              <MenuOptions
                setMenuOptions={setMenuOptions}
                showMenuOptions={showMenuOptions}
              />
            </div>
          </div>
        </div>
        <div
          className={
            showSearch ? "navigationBottom active" : "navigationBottom"
          }
        >
          <Search setShowSearch={setShowSearch} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
