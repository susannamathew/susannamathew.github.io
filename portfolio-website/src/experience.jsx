import React, { useEffect, useState, useRef } from 'react';
import './css/home.css'; 
import './css/experience.css'; 
import './css/App.css'; 
import cloud1 from './images/cloud1.svg';
import cloud2 from './images/cloud2.svg';
import star from './images/star.svg';
import {ref, get } from "firebase/database";
import {db} from './util/firebase';

function MyWebsite( {theme} ) {
  const Star = ({ style }) => (
    <img className="star" src={star} alt="star" style={style} />
  );

  const starPositions = [
    { left: '10%', top: '20%' },
    { left: '30%', top: '0%' },
  ];
  
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const experiencesSnapshot = await get(ref(db, '/Experience'));
      const experiencesData = transformCardData(experiencesSnapshot.val());
      setExperiences(experiencesData);

      const projectsSnapshot = await get(ref(db, '/Projects'));
      const projectsData = transformCardData(projectsSnapshot.val());
      setProjects(projectsData);

      const researchSnapshot = await get(ref(db, '/Research'));
      const researchData = transformCardData(researchSnapshot.val());
      setResearch(researchData);
    };

    fetchData();
  }, []);

  // Helper function to transform card data from Firebase snapshot
  function transformCardData(data) {
    return Object.entries(data || {}).map(([key, value]) => ({
      name: key,
      company: value.Company ? value.Company : "",
      time: value.Time,
      description: value.Description,
      skills: value.Skills ? value.Skills : []
    }));
  }

  const skillColors = {
    "Python": "#B7CF6A", 
    "Java": "#A1E8D9", 
    "Scratch": "#DA8079",
    "Javascript": "#9797DF",
    "React JS": "#9797DF",
    "Node JS": "#9797DF",
    "React Native": "#9797DF",
    "CSS": "#E6CD73",
    "CSS Animation" : "#E6CD73",
    "HTML": "#E6CD73",
    "Figma": "#E6CD73",
    "Firebase DB": "#3C865E",
    "MySQL": "#3C865E",
  };

  const logos = {
    "Juni Learning": require('./images/juni logo.png'),
    "First American": require('./images/fa logo.png'),
  };

  function ExperienceCard({ roleName, company, time, description, skills }) {
    // Ref for the card element
    const cardRef = useRef(null);

    // Effect to resize the card after it's mounted
    useEffect(() => {
      if (cardRef.current) {
        resizeMasonryItem(cardRef.current);
      }
    }, []);
    let logo = company && logos[company];
    return (
      <div className="experience-card" ref={cardRef}>
        <div className="masonry-content">
            <div className='row'>
              {logo && <img src={logo} alt={`${company} logo`} className="company-logo" />}
              <h3 className="experience-role">{roleName}</h3>
            </div>
            <div className='row'>
                    {company && <h4 className="experience-company">{company + " , "}</h4>}
                    {time && <h4 className="experience-time">{time}</h4>}
            </div>
            <h4 className="experience-description">{description}</h4>
            {skills && <SkillList skills={skills} />}
          </div>
        </div>
    );
  }

  function SkillList({ skills }) {
    return (
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <h4 className="skill" style={{ backgroundColor: skillColors[skill] || '#888' }}>{skill}</h4>
          </li>
        ))}
      </ul>
    );
  }

  function resizeMasonryItem(item) {
    // Assuming .masonry is your grid container and .masonry-content is the content wrapper inside your .experience-card
    var grid = document.getElementsByClassName('experiences-container')[0],
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  
    var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    
    item.style.gridRowEnd = 'span ' + rowSpan;
  }
  
  function resizeAllMasonryItems() {
    var allItems = document.getElementsByClassName('experience-card');
  
    for (var i = 0; i < allItems.length; i++) {
      resizeMasonryItem(allItems[i]);
    }
  }
  
  window.onload = resizeAllMasonryItems;
  window.onresize = resizeAllMasonryItems;

  return (
    <>
    <section id="landing-page">
        {
          theme === 'light' ? (
            <div className="clouds-container">
              <div className="cloud1"><img src={cloud1} alt="cloud1" /></div>
              <div className="cloud2"><img src={cloud2} alt="cloud2" /></div>
            </div>
          ):(
            <div className="stars-container">
              {starPositions.map((pos, index) => (
                <Star key={index} style={pos} />
              ))}
            </div>
          )
          
        }
        <div className="exp-heading">
          <h2>Experience</h2>
        </div>
         <div className="experiences-container">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              roleName={exp.name}
              company={exp.company}
              time={exp.time}
              description={exp.description}
              skills={exp.skills}
            />
          ))}
        </div>
        <div className="exp-heading">
          <h2>Projects</h2>
        </div>
         <div className="experiences-container">
          {projects.map((exp, index) => (
            <ExperienceCard 
              key={index}
              roleName={exp.name}
              time={exp.time}
              description={exp.description}
              skills={exp.skills}
            />
          ))}
        </div>
        <div className="exp-heading">
          <h2>Research</h2>
        </div>
         <div className="experiences-container">
          {research.map((exp, index) => (
            <ExperienceCard 
              key={index}
              roleName={exp.name}
              time={exp.time}
              description={exp.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MyWebsite;
