import React, {useState, useEffect} from 'react';

import './global.css'
import './app.css'
import './sidebar.css'
import './main.css'


function App() {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  async function handleAddDev(e){
    e.preventDefault();
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

        console.log(position)
      },
      (err) =>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )

  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={github_username} onChange ={e=>setGithub_username(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e=>setTechs(e.targetvalue)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange = { e=> setLatitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange = { e=> setLongitude(e.target.value)}/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
     
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
