import './App.css';
import faker from "faker";
import Team from "./Team/Team";

const App = ()=>{
  return(
    <div className="ui container comments">
      <h3 className="ui dividing header" style={{padding: "20px 0px 0px 0px"}}>Our Team</h3>
      <div className="ui four column grid">
        <div className="row">
          <div className="column">
              <Team name="Andy" role="Software Developer" description="Andy is a software developer living in New York loves hiking." avatar={faker.image.technics()} friends_count="52"></Team>
          </div>
          <div className="column">
              <Team name="Ashley" role="Tester" description="Ashley is a tester, loves reading and travelling." avatar={faker.image.fashion()} friends_count="23"></Team>
          </div>
          <div className="column">
              <Team name="Bobby" role="Designer" description="Bobby is a designer, loves and enjoy food." avatar={faker.image.people()} friends_count="137"></Team>
          </div>
          <div className="column">
              <Team name="Casey" role="Manager" description="Casey join as a manager from 2018, loves dancing and movies." avatar={faker.image.sports()} friends_count="22"></Team>
          </div>
        </div>
      </div>
    </div>
  )}

export default App;
