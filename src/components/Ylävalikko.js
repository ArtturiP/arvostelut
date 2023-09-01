import { Outlet, Link } from "react-router-dom";

const Ylävalikko = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Etusivu</Link>
          </li>
          <li>
            <Link to="/energiajuomat">Energiajuomat</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Ylävalikko;