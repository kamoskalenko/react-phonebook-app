import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = { name: "", phone: "" };

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(10, "Must be 10 characters or less")
    .matches(
      /^(\+?\d{1,4}?[\s-]?)?(\(?\d{1,4}?\)?[\s-]?)?[\d\s-]{5,15}$/,
      "Phone number is not valid"
    )
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameField = useId();
  const phoneField = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.phone,
    };

    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="contact-form">
        <div>
          <label htmlFor={nameField}>Name</label>
          <Field
            name="name"
            type="text"
            className="input-field"
            id={nameField}
          />
          <ErrorMessage name="name" component="p" />
        </div>

        <div>
          <label htmlFor={phoneField}>Phone</label>
          <Field name="phone" type="tel" id={phoneField} />
          <ErrorMessage name="phone" component="p" />
        </div>

        <button type="submit" className="btn-submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// const ContactForm = ({ onAdd }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newContact = {
//       id: Date.now(),
//       name: e.target.elements.name.value,
//       number: e.target.elements.phone.value,
//     };

//     onAdd(newContact);
//     e.target.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" />
//       <input type="tel" name="phone" />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default ContactForm;
