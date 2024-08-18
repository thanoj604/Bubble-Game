import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {

  function checkResolution() {
        
    const minWidth = 1024; 
    const minHeight = 768;  
   
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

  
    if (screenWidth < minWidth || screenHeight < minHeight) {
        document.body.innerHTML = "<div style= 'display:flex; width: 100vw; height: 92vh; justify-content: center; text-align:center; flex-direction:column; background-color:#0f393f; color:#00ffaf;'><h2 style='color:#00ffaf back;'>Game not supported in this resolution. Please use a larger screen. If you are on PC, Maximize the window to the full screen and Refresh the page.</h2></div>";
    }
}


window.onload = checkResolution;
window.onresize = checkResolution;

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className='aboutWin' style={{ width: '100vw', height: '92vh', backgroundColor: '#0f393f', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
      <h1 style={{ color: '#00ffaf', marginBottom: '20px' }}>About</h1>
      <p style={{ fontSize: '24px', color: 'white', textAlign: 'center', maxWidth: '600px', marginBottom: '20px' }}>
        <b>Bubbles</b> is a fun and engaging game that challenges your reflexes and strategy. Created with the passion for classic gaming, it offers endless entertainment for players of all ages.
      </p>
      <div className="accordion w-100" id="accordionPanelsStayOpenExample" style={{ marginBottom: '20px' }}>
        <div className="accordion-item" style={{ backgroundColor: '#0f393f', borderColor: '#00ffaf', color: 'white' }}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ backgroundColor: '#3fa585', color: 'white' }}>
              Game Objective
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={{ color: 'white' }}>
              <strong>Your goal is to pop as many bubbles as possible.</strong> The more bubbles you pop, the higher your score. Test your reflexes and see how far you can go!
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: '#0f393f', borderColor: '#00ffaf', color: 'white' }}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{ backgroundColor: '#3fa585', color: 'white' }}>
              How to Play
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ color: 'white' }}>
              <span><strong>Use your mouse to pop the Bubbles.</strong> In the upper portion of the screen, three elements are displayed: Find, Timer, and Score. The Find element shows the number you need to find from a group of bubbles containing random numbers. You have 6 seconds to find the number. If you don't find it in time, the game will be over.</span>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: '#0f393f', borderColor: '#00ffaf', color: 'white' }}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{ backgroundColor: '#3fa585', color: 'white' }}>
              Scoring
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ color: 'white' }}>
              <strong>Each bubble popped gives you 10 points. Finally this game is developed by Thanoj sriman</strong>
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/d-thanoj-sriman/" target='_blank' style={{color:'#00ffaf'}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg></a>
    </div>
  );
}
