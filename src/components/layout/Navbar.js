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
            <NavLink to="/company">empresa</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/contact">Contato</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/projects">Projetos</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
