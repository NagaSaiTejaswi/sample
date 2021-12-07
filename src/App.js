import logo from './logo.svg';
import './App.css';
import Saruu from '../src/Assets/Images/saruu.jpg';
import Saruu1 from '../src/Assets/Images/saruu1.jpeg';
import Pilaka from '../src/Assets/Images/pilaka.jpg';
import pilaka1 from '../src/Assets/Images/pilaka1.jpg';
import Dora from '../src/Assets/Images/dora.jpg';
import Dora1 from '../src/Assets/Images/dora1.jpg';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
			<div class="item">
				<div class="polaroid"><img src={Saruu}/>
					<div class="caption">Ohoo teacher superrr &#128076;</div>
				</div>
			</div>

			<div class="item">
				<div class="polaroid"><img src={Saruu1}/>
					<div class="caption">How Cute &#128525;</div>
				</div>
			</div>

			<div class="item">
				<div class="polaroid"><img src={Pilaka}/>
					<div class="caption">hello dora garuuu &#128540; </div>
				</div>
			</div>

			<div class="item">
				<div class="polaroid"><img src={pilaka1}/>
					<div class="caption">Enti pandhi emi susthunav, aa aa &#128541;</div>
				</div>
			</div>
  
			<div class="item">
				<div class="polaroid"><img src={Dora}/>
					<div class="caption">Saruu Saruu kani kani &#128521;</div>
				</div>
			</div>
			
			<div class="item">
				<div class="polaroid"><img src={Dora1}/>
					<div class="caption">emi styleuu pilaka &#128526;</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
