import { Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/types";
import { switchPage } from "./Navbar.slice";

const Navbar = () => {
  const currentPage = useAppSelector((state) => state.navbar.activePage);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Navbar - {currentPage}</h1>
      <Button variant="outlined" onClick={() => dispatch(switchPage("Book"))}>
        Book
      </Button>
      <Button
        variant="outlined"
        style={{ margin: "0 10px" }}
        onClick={() => dispatch(switchPage("Students"))}
      >
        Student List
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch(switchPage("Subjects"))}
      >
        Subject List
      </Button>
    </div>
  );
};

export default Navbar;
