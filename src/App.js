import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Studio from './pages/Studio'

function App() {
return(
    <HashRouter>
    <div>
        
        <Switch>
            <Route exact path="/" component={Studio}/>
           
        </Switch>
    </div>
</HashRouter>
)}

export default App;
