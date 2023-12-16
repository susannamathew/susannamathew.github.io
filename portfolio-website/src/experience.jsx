import React, { useEffect, useState } from 'react';
import './css/home.css'; 
import './css/experience.css'; 
import './App.css'; 
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

  useEffect(() => {
    const fetchExperiences = async () => {
      const path = ref(db, '/');
      const snapshot = await get(path);
      const data = snapshot.val();
      const roles = Object.keys(data);
    
      const experiencesData = await Promise.all(roles.map(async (roleName) => {
        const companySnapshot = await get(ref(db, `${roleName}/Company`));
        const timeSnapshot = await get(ref(db, `${roleName}/Time`));
        const descriptionSnapshot = await get(ref(db, `${roleName}/Description`));
        const skillsSnapshot = await get(ref(db, `${roleName}/Skills`));
    
        // Convert skills object to array
        const skills = skillsSnapshot.val() ? Object.values(skillsSnapshot.val()) : [];
    
        return {
          roleName,
          company: companySnapshot.val(),
          time: timeSnapshot.val(),
          description: descriptionSnapshot.val(),
          skills
        };
      }));
    
      setExperiences(experiencesData);
    };

    fetchExperiences();
  }, []);


  function ExperienceCard({ roleName, company, time, description, skills }) {
    return (
      <div className="experience-card">
        <h4 className="experience-role">{roleName}</h4>
        {company && <p className="experience-company">{company}</p>}
        {time && <p className="experience-time">{time}</p>}
        <p className="experience-description">{description}</p>
        <SkillList skills={skills} />
      </div>
    );
  }

  function SkillList({ skills }) {
    return (
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill">{skill}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
    <section id="landing-page">
        <div className="page-name">
          <h3>Experience + Projects</h3>
        </div>
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
         <div className="experiences-container">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              roleName={exp.roleName}
              company={exp.company}
              time={exp.time}
              description={exp.description}
              skills={exp.skills}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MyWebsite;
