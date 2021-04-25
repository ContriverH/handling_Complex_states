import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(contact, (preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="lName"
          // value={contact.fName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          // value={contact.lName}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="fName"
          // value={contact.email}
          placeholder="First Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
