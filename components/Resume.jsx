import React, { useState } from 'react';

// Constants
import Colors from '../constants/Colors.js';

function Resume(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const boxShadow = isHovered ? '-24px 24px 0px ' + Colors.Dark() : '-8px 8px 0px ' + Colors.Dark();
  const transform = isHovered ? 'translate(16px, -16px)' : 'translate(0px, 0px)';

  return (
      <a href='/documents/Resume.pdf' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
          color: 'black',
          textDecoration: 'none',
          backgroundColor: 'white',
          width: 'fit-content',
          display: 'block',
          textAlign: 'center',
          fontFamily: 'Arial',
          fontSize: '12px',
          padding: '2rem',
          boxShadow: boxShadow,
          transform: transform,
          transition: 'all 0.25s ease-in-out',
          ...props.style
        }}>
          <h2>Olivia Harris</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}>
            <p>(941) 704-2067</p>
            <a href='mailto:olivia@oliviaharris.me' style={{
              textDecoration: 'none',
              color: 'black'
            }}>olivia@oliviaharris.me</a>
            <a href='https://github.com/OliviaHarris03' style={{
              textDecoration: 'none',
              color: 'black'
            }}>github.com/OliviaHarris03</a>
            <a href='https://oliviaharris.me' style={{
              textDecoration: 'none',
              color: 'black'
            }}>oliviaharris.me</a>
          </div>
          <h3 style={{
            textAlign: 'left',
            marginTop: '0.75rem'
          }}>Education</h3>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'black',
            marginTop: '0.2rem',
            marginBottom: '0.2rem'
          }}/>
          <div style={{
            marginLeft: '1rem',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bolder'
            }}>
                <p>University of Central Florida | 3.4 / 4.0 GPA</p>
                <p>Expected Graduation May 2025</p>
            </div>
            <p>Bachelor of General Studies (B.G.S.) in Integrative General Studies</p>
            <p>Minors in Computer Science and Digital Media</p>
            <p><b>Relevant Coursework:</b> Frontend Web Design, Object Oriented Programming, Systems Software, Data Structures</p>
            <p><b>Honors:</b> Dean's List</p>
          </div>
          <h3 style={{
            textAlign: 'left',
            marginTop: '0.75rem'
          }}>Technical Skills</h3>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'black',
            marginTop: '0.2rem',
            marginBottom: '0.2rem'
          }}/>
          <div style={{
            marginLeft: '1rem',
            textAlign: 'left'
          }}>
            <p><b>Languages:</b> C, C++, C#, Java, JavaScript, TypeScript, SQL, Golang, HTML, CSS, Python, PHP</p>
            <p><b>Frameworks and Libraries:</b> React, Electron, Node.js, Express.js, jQuery, AngularJS, Tailwind</p>
            <p><b>Applications:</b> MySQL, Postman, cPanel, Firebase, Trello, Figma, Visual Studio, VS Code</p>
            <p><b>Tools and Methodologies:</b> Git, GitHub, Rest APIs, Full-Stack, Scrum, Agile, Cloud Computing, Frontend, Backend</p>
          </div>
          <h3 style={{
            textAlign: 'left',
            marginTop: '0.75rem'
          }}>Project Experience</h3>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'black',
            marginTop: '0.2rem',
            marginBottom: '0.2rem'
          }}/>
          <div style={{
            marginLeft: '1rem',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bolder'
            }}>
              <p>Campus Networking Application</p>
              <p>December 2024 - Present</p>
            </div>
            <ul style={{
              marginLeft: '1.5rem'
            }}>
              <li>Worked together on a 5-person team to develop a new web-based social platform for college campuses</li>
              <li>Constructed a component-based user interface using React and Tailwind, utilizing Figma as a visualization tool</li>
              <li>Utilized React to connect the frontend user interface to the Node.js powered backend through REST APIs</li>
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bolder'
              }}>
                <p>Headline Guesser</p>
                <p>May 2024 - August 2024</p>
            </div>
            <ul style={{
              marginLeft: '1.5rem'
            }}>
              <li>Designed a full-stack web application using React to quiz users and teach them about bias and media literacy</li>
              <li>Implemented a user login system and various social features using Express.js, a MySQL database, and Node.js</li>
              <li>Developed a two-factor authentication system using nodemailer to provide an increase in account security</li>
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bolder'
              }}>
                <p>Story Forge</p>
                <p>September 2023 - January 2024</p>
            </div>
            <ul style={{
              marginLeft: '1.5rem'
            }}>
              <li>Created an AI-powered web application with React that can produce over 100 unique interactive stories</li>
              <li>Integrated OpenAI’s GPT-4 API into backend Express.js to provide responses to users through REST APIs</li>
              <li>Designed a scalable user interface in Figma and utilized jQuery to speed up development by 20%</li>
            </ul>
          </div>
          <h3 style={{
            textAlign: 'left',
            marginTop: '0.75rem'
          }}>Leadership Experience</h3>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'black',
            marginTop: '0.2rem',
            marginBottom: '0.2rem'
          }}/>
          <div style={{
            marginLeft: '1rem'
          }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bolder'
              }}>
                <p>Google Student Developer Club | President</p>
                <p>August 2024 - Present</p>
            </div>
            <ul style={{
              marginLeft: '1.5rem',
              textAlign: 'left'
            }}>
              <li>Developed instructional content for over 600 students and assisted with their projects and resumes</li>
              <li>Managed organizational functions and led a team to host events and workshops for students</li>
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bolder'
              }}>
                <p>KnightHacks | Hackathon Organizer</p>
                <p>July 2024 - November 2024</p>
            </div>
            <ul style={{
              textAlign: 'left',
              marginLeft: '1.5rem'
            }}>
              <li>Collaborated on a team to manage a budget of nearly $30,000 for various hackathon expenses</li>
              <li>Managed workshops held throughout the course of the hackathon for the benefit of nearly 1,000 participants</li>
            </ul>
          </div>
          <h3 style={{
            textAlign: 'left',
            marginTop: '0.75rem'
          }}>Competitions</h3>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'black',
            marginTop: '0.2rem',
            marginBottom: '0.2rem'
          }}/>
          <div style={{
            marginLeft: '1rem',
            textAlign: 'left'
          }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bolder'
              }}>
                <p>Shellhacks Hackathon</p>
                <p>September 2023</p>
            </div>
            <ul style={{
              marginLeft: '1.5rem'
            }}>
              <li>Collaborated on a team to program a web application that uses AI to provide over 100 responses to users</li>
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bolder'
              }}>
                <p>KnightHacks Project Competition</p>
                <p>November 2022</p>
            </div>
            <ul style={{
              marginLeft: '1.5rem'
            }}>
              <li>Worked on a team to create a set of 2 applications that save users time through desktop-phone communication</li>
            </ul>
          </div>
          <h3 style={{
            textAlign: 'left',
            marginTop: '0.75rem'
          }}>Experience</h3>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'black',
            marginTop: '0.2rem',
            marginBottom: '0.2rem'
          }}/>
          <div style={{
            marginLeft: '1rem',
            textAlign: 'left'
          }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <p><b>UCF Office of Student Involvement,</b> Front Desk Attendant </p>
                <p><b>November 2022</b></p>
            </div>
            <ul style={{
              marginLeft: '1.5rem'
            }}>
              <li>Efficiently managed equipment rental services, processing over 50 transactions daily with staff and students</li>
              <li>Handled 100+ visitors by phone or in-person per day, ensuring courteous and informative interactions</li>
              <li>Completed various administrative tasks, including document preparation, supporting multiple office departments</li>
            </ul>
          </div>
      </a>
  );
}

export default Resume;