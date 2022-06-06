import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav>
        <div>
          <img
            className="logo"
            src="https://i.pinimg.com/originals/86/24/b9/8624b9b308105be3dff04e49d54f93d3.jpg"
            alt="Problem?"
            width="30%"
          />
          <p>Meme App Alk Project</p>
        </div>

        <Button className="btn-nav-regular">
          <NavLink to="/regular" className="linkStyle">
            Regular
          </NavLink>
        </Button>
        <Button className="btn-nav-hot">
          <NavLink to="/hot" className="linkStyle">
            Hot
          </NavLink>
        </Button>
        <Button className="btn-nav-mem">
          <NavLink to="/memegenerator" className="linkStyle">
            Meme Generator
          </NavLink>
        </Button>
      </nav>
      <Outlet />
    </>
  );
};
