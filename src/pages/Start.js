import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import btnsound from '../components/btnsound.mp3';




export default function Start() {


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


    function btns() {
        new Audio(btnsound).play()
    }


    const handleClick = () => {
        start();
        btns();
    };


    const navigate = useNavigate(); // Hook for navigation

    const start = () => {
        navigate('/home'); // Navigate to the Home page
    };
    return (
        <div className='startWin' style={{ width: '100vw', height: '92vh', backgroundColor: '#0f393f', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ color: '#00ffaf' }}>Welcome to</h1>
            <p style={{ fontSize: '200px', color: 'white', cursor: 'pointer' }}><b>Bubbles</b></p>
            <button className='btn btn py-2 px-5 glow' onClick={handleClick}>Start</button>
        </div>
    )
}
