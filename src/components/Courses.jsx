import React from 'react';

const Courses = ({ id, title, institute, link }) => {
  return (
    <li>
      <a href={link} target='_blank' style={{ border: "1px solid green" }}>
        <h5>{title}</h5>
      </a>
      <h6> <b>Institución: </b> {institute} </h6>
    </li>
  );
};

export default Courses;