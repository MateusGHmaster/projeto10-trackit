import ReactDOM from 'react-dom';
import App from './components/App';
import './components/reset.css';
import './components/style.css';

const TrackIt = App();
ReactDOM.render (TrackIt, document.querySelector('.root'));