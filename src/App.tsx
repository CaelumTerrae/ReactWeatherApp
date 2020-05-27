import React from 'react';
import WeatherCard from './components/weathercard'
import InfoForm from './components/infoform'
import './App.css';

interface InfoFormFields {
  name: string,
  zipcode: string,
}

function App() {
  const [userInfo, setUserInfo] = React.useState<InfoFormFields>();

  
  return (
    <div className="App">
      <header className="App-header">
        {userInfo ?
        <WeatherCard day="Monday" high={82} low={74} rain={80}/>
        :<InfoForm setUserInfo={setUserInfo}/>}
      </header>
    </div>
  );
}

export default App;
