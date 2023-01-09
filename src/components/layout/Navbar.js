import { NavLink } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/costs_logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <NavLink to="/">
          <img src={logo} alt="Costs" />
        </NavLink>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/company">Company</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/contato">Contact</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/newproject">New project</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
