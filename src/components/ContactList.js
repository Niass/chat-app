import React from "react";
import "./ContactList.css";
import Contact from "./Contact";
function ContactList(props) {
  const users = [
    {
      id: "ioi1421",
      first: "Louella",
      last: "Castillo",
      imgSrc: "https://randomuser.me/api/portraits/thumb/women/7.jpg"
    },
    {
      id: "osjh87",
      first: "Ayoub",
      last: "Ingebrigtsen",
      imgSrc: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
    },
    {
      id: "oki8_è",
      first: "Flenn",
      last: "Kuhn",
      imgSrc: "https://randomuser.me/api/portraits/thumb/men/80.jpg"
    },
    {
      id: "ojjk676",
      first: "Marcial",
      last: "Sales",
      imgSrc: "https://randomuser.me/api/portraits/thumb/men/97.jpg"
    },
    {
      id: "-è-GH",
      first: "Esma",
      last: "Sinanoğlu",
      imgSrc: "https://randomuser.me/api/portraits/thumb/women/72.jpg"
    }
  ];
  const arrOnline = [false, true];
  return (
    <div className="">
      {users.map(({ first, id, imgSrc }) => (
        <Contact
          key={id}
          name={first}
          id={id}
          imgSrc={imgSrc}
          isOnline={arrOnline[Math.round(Math.random())]}
        />
      ))}
    </div>
  );
}

export default ContactList;
