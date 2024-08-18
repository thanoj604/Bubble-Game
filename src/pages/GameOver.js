import React from 'react'
import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom'
import btnsound from '../components/btnsound.mp3';



export default function GameOver() {



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


    let location = useLocation()
    const { score } = location.state || {};



    function btns(){
        new Audio(btnsound).play()
      }



    const navigate = useNavigate(); 

    const handleRestart = () => {
        navigate('/home'); 
    };


    let greet = "";

    if(score < 50){
        greet = "Better Luck Next Time!";
    }

    else if(score >= 50 && score <= 200){
        greet = "Amazing score!"
    }

    else if(score >=201 && score <= 400){
        greet = "Fantastic job!";
    }

    else if(score >=401 && score <= 500){
        greet = "Bingo!";
    }

    else if(score >=501 && score <= 800){
        greet = "You crushed it!";
    }

    else if(score >=801 && score <= 1000){
        greet = "You nailed it!";
    }

    else if(score >=1000 && score <= 1500){
        greet = "Bravo! What a score!";
    }

    else if(score >=1501 && score <= 2500){
        greet = "Kudos on your score!";
    }

    else{
        greet = "You are Unstopable!";
    }




    return (
        <div style={{width:'100vw', height:'92vh', backgroundColor:'#0f393f', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onClick={btns}>

            <p className='gm' style={{color:'#00ffaf', fontSize:'100px'}}><b>Game Over</b></p>


            <h3 className='text-white mt-3'>{greet}</h3>

            <h1 className='text-white mt-1'><b>{score}</b></h1>

           
           
            
            
            <button className='btn btn mt-4 glow' onClick={handleRestart}>Try Again</button>
        </div>
    )
}
