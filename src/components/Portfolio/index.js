import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
          name: '' ,
          description: 'PWA',
          link: "",
          repo: ""
          
        },
        {
          name: '',
          description: '',
          link: "",
          repo: ""
        },
        {
          name: '',
          description: '',
          link: "",
          repo: ""
        },
        {
          name: '',
          description: '',
          link: "",
          repo: ""
        },
        {
          name: '',
          description: '',
          link: "",
          repo: ""
        },
      ]);

      return (
        <div className='portfolio'>
            <div className='flex-row'>
              <div className='card'>
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
              </div>
            </div>
        </div>
      );
}

export default Portfolio;