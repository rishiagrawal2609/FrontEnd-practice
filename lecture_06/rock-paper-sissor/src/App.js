import './App.css';
import { Button, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className='emoji'>
        <Typography variant='h1'className='huem'>
          👨
        </Typography>
        <Typography variant='h1'className='cuem'>
          🤖
        </Typography>
      </div>
      <div className='score'>
        <Typography variant='h2' className='headscore'>
          Score
        </Typography>
        <div className='scoreCard'>
        <Typography variant='h1'className='HumanScore'>
          1
        </Typography>
        <Typography variant='h1'>
          /
        </Typography>
        <Typography variant='h1' className='Computer Score'>
          1
        </Typography>
        </div>
      </div>
      <div className='choice'>
        <div className='human'>
            <Typography className='hucho' variant='h5'>
              Your Choice
            </Typography>
            <Typography className='huItem' variant='h3'>
              Rock
            </Typography>
        </div>
        <div className='computer'>
          <Typography className='compcho' variant='h5'>
            Computer Choice
          </Typography>
          <Typography className='compItem' variant='h3'>
            Sissor
          </Typography>
        </div>
      </div>
      <div className='userInput'>
        <Button variant='contained'id='rock'>Rock</Button>
        <Button variant='contained' id= 'paper'>Paper</Button>
        <Button variant='contained'id='sissor'>Sissor</Button>
      </div>
    </div>
  );
}

export default App;
