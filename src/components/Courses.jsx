import React from 'react';

const Courses = ({ id, title, institute, link }) => {
  return (
    <div>
      <div className='list'>
        <h4 style={{ marginRight: '10px' }}><span class="material-symbols-outlined world_icon" >
          language
        </span> {title} </h4>
        <a href={link} target='_blank' >
          <span class="material-symbols-outlined">
            line_start_arrow_notch
          </span>
        </a>
      </div>
      <h6>Institución: {institute} </h6>
    </div>
  );
};

export default Courses;