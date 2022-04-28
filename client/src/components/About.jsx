import React from "react";
import { Link } from "react-router-dom";
import './About.css';
function About() {
  return (
    <div className="w-full h-screen relative">
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-[#a39ac4]">
        <div>
          <h1>TRAVEL APP.</h1>
        </div>
        <ul className="hidden md:flex">
          <li>
            {" "}
            <Link to="/">HOME</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/destination">DESTINOS</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="about-container">
        <h1 className="about-title">Acerca de nosotros</h1>

        <div className="text">
          <p className="text">
            Travel App es una agencia de viaje cuyo obetivo es promover el
            turismo en Argentina. Que los viajeros puedan conocer y disfrutar de
            la cultura, la gastronomia, los paisajes y los lugares de Argentina
            a través de los ojos de su gente. Hemos diseñado paquetes de viajes
            dirigidos a diferentes públicos tomando en cuenta, calidad del
            servicio, facilidades de pago y atención personalizada al viajero en
            Argentina.
          </p>
        </div>
      </div>

      <h1 className="about-title">Nuestro equipo</h1>
      <div className="team-container">
        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://avatars.githubusercontent.com/u/89668743?v=4"
            />
          </div>
          <div className="info-Box">
            <h3>Albamar Flores</h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a href="https://www.linkedin.com/in/albamarfdc" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a href="https://github.com/Albamarfdc" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://avatars.githubusercontent.com/u/89312376?v=4"
            />
          </div>
          <div className="info-box">
            <h3>Agustina Paez</h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a
                href="https://www.linkedin.com/in/agustina-paez-a1a208194/"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a href="https://github.com/AgustinaPaez" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://ca.slack-edge.com/TPRS7H4PN-U02J1GJ6WLD-ca217b05db44-512"
            />
          </div>
          <div className="info-box">
            <h3>Alejandro Coniglio</h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a
                href="https://www.linkedin.com/in/alejandro-coniglio/"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a href="https://github.com/aleconiglio16" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFM5UAKLePwog/profile-displayphoto-shrink_200_200/0/1651152334680?e=1656547200&v=beta&t=Xdj5g9bRaSm4bL7Ojlc2AL9zWjJdUVCh3SbmFYtKRrc"
            />
          </div>
          <div className="info-box">
            <h3>Andrea Ovalles</h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a
                href="https://www.linkedin.com/in/andrea-ovalles-developer/"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a href="https://github.com/Andynv" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://avatars.githubusercontent.com/u/58927717?v=4"
            />
          </div>
          <div className="info-box">
            <h3>Carlos Diaz</h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a href="https://www.linkedin.com/in/carlos13df/" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a href="https://github.com/Carlos13-Lab" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://avatars.githubusercontent.com/u/19315386?v=4"
            />
          </div>
          <div className="info-box">
            <h3>Gianluca Brunner </h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a
                href="https://www.linkedin.com/in/gianluca-brunner/"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a href="https://github.com/gianbr" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://avatars.githubusercontent.com/u/90679087?v=4"
            />
          </div>
          <div className="info-box">
            <h3>Joaquín García</h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a
                href="https://www.linkedin.com/in/joaquingplante/"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/Joaquin-Garcia-Plante"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              className="img-box"
              alt="team"
              src="https://avatars.githubusercontent.com/u/87342173?v=4"
            />
          </div>
          <div className="info-box">
            <h3>Judith Goncalves</h3>
            <h4>Full-Stack Developer</h4>
            <span className="links-container">
              <a
                href="https://www.linkedin.com/in/maria-judith-lara-goncalves/?originalSubdomain=ve"
                target="_blank"
              >
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
              <a href="https://github.com/Juth7" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png"
                  alt=""
                  width="20px"
                  height="20px"
                  className="icon"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
    
}
export default About;