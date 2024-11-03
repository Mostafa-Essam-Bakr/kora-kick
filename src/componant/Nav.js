import { Link } from "react-router-dom";
import log from "../Assets/logo.png";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { GiAcousticMegaphone } from "react-icons/gi";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <img src={log} alt="" className="logo" />
        </li>
      </ul>
      <ul className="ulnavcenter">
        <li>
          <Link>القائمة الرئيسية</Link>
        </li>
        <li>
          <Link>أخبار </Link>
        </li>{" "}
        <li>
          <Link> فريق</Link>
        </li>{" "}
        <li>
          <Link> لاعبون </Link>
        </li>{" "}
        <li>
          <Link>مباريات</Link>
        </li>
      </ul>
      <ul className="ulnavright">
        <li>
          {" "}
          <MdOutlineSubscriptions />
        </li>
        <li>
          <FaCouch />
        </li>
        <li>
          <GiAcousticMegaphone />
        </li>
      </ul>
    </div>
  );
}
