import React, {useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import pop from '../components/pop.mp3';
import gameover from '../components/gameover.mp3';

<body style={{ backgroundColor: '#4cc1ba' }}>

</body>

export default function Home() {
  let [RT, setRT] = useState(Math.floor(Math.random() * 10)); 
  let [RV, setRV] = useState(null); 
  let [sc, setsc] = useState(0);
  let navigate = useNavigate();


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


  function ply() {
    new Audio(pop).play()
  }

  function plyover() {
    new Audio(gameover).play()
  }


  const updateTarget = () => {
    setRT(Math.floor(Math.random() * 10));
  };

  const Target = () => {
    return (
      <div
        className='popScreen mt-3 h1 text-white'
        style={{ height: '7.4vh', width: '5vw', borderRadius: '10px', display: 'flex', alignItems: 'center', color: 'white' }}
      >
        {RT}
      </div>
    );
  };


  const Score = () => {


    return (



      <div
        className='scoreScreen mt-3 h1 text-white'
        style={{
          height: '8vh',
          width: '5vw',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        {sc}
      </div>)

  }


  const Matcher = (value) => {
    console.log('Clicked Value:', value);
    console.log('Target Value:', RT);
    setRV(value);
    if (value === RT) {
      setsc(sc += 10)
      ply();
      console.log("same");
      updateTarget();
    }

    else {
      plyover();
      navigate('/gameover', { state: { score: sc }});
    }
  };

  const Timer = () => {

    const [time, setTime] = useState(6);

    useEffect(() => {

      const tik = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(tik);
            plyover();
            navigate('/gameover', { state: { score: sc }});
            return 0;
          }

          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(tik);
    }, []);

    return (
      <div
        className='timeScreen mt-3 h1 text-white'
        style={{
          height: '8vh',
          width: '5vw',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        {time}
      </div>
    );
  };

  const Circle = () => {
    const circles = [];

    for (let i = 0; i < 105; i++) {
      const circleValue = Math.floor(Math.random() * 10);
      circles.push(
        <button
          key={i}
          type="button"
          className='circle btn btn-primary'
          onClick={() => Matcher(circleValue)} 
          style={{
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2fb192',
            
            height: '60px',
            width: '60px',
            color: 'white',
            border: '2px solid white',
            borderRadius: '50%'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} className='container'>{circleValue}</div>
        </button>
      );
    }



    return (
      <div className='circle-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        {circles}
      </div>
    );


  };

  

  return (
    <>
      <div style={{ height: '92vh', width: '100vw', backgroundColor: '#0f393f', overflow:'hidden'}}>
        <div className='container p-3' style={{ height: '82vh', width: '100vw', borderRadius: '10px', overflow:'hidden'}}>
          <div className='ScoreBoard container mt-2' style={{ height: '12vh', width: '64vw', borderRadius: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

            <div style={{ display: 'flex', }}>
              <div className='pops mt-3 text-white' style={{ height: '8vh', width: '6vw', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className='h1'>Find</span>
              </div>
              <div><Target /></div>
            </div>

            <div style={{ display: 'flex' }}>
              <div className='pops mt-3 h3 text-white' style={{ height: '8vh', width: '6vw', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className='h1'>Timer</span>
              </div>
              <div><Timer /></div>
            </div>


            <div style={{ display: 'flex' }}>
              <div className='pops mt-3 h3 text-white' style={{ height: '8vh', width: '6vw', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className='h1'>Score</span>
              </div>
              <div><Score /></div>
            </div>


          </div>
          <div className='bubblePlate container mt-3 p-3' style={{ height: '84vh', width: '100vw', borderRadius: '10px', overflow: 'hidden' }}>
            <Circle />
          </div>
        </div>
      </div>
    </>
  );
}
