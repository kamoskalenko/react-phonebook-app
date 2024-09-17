import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div>
      <h3>
        <FaUser className="my-icon" />
        {name}
      </h3>
      <p>
        <FaPhoneAlt className="my-icon" />
        {number}
      </p>
      <button onClick={() => onDelete(id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
};

export default Contact;
