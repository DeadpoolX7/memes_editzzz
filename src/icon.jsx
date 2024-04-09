
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Github = ()=>{  
    const githubUrl = 'https://github.com/DeadpoolX7';
    return(
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size="3x" style={{color:"black"}}/>
    </a>
    );
}
export default Github;