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
                Travel App es una agencia de viaje cuyo obetivo es promover el turismo en Argentina.
                Que los viajeros puedan conocer y disfrutar de la cultura, la gastronomia, los paisajes y los lugares de Argentina 
                a través de los ojos de su gente.
                Hemos diseñado paquetes de viajes dirigidos a diferentes públicos tomando en cuenta, calidad del servicio, 
                facilidades de pago y atención personalizada al viajero en Argentina.
                
                </p>
            </div>
        </div>

        <h1 className="about-title">Nuestro equipo</h1>
        <div className="team-container">
            <div className="box">
                <div>
                    <img className="img-box" alt="team" src="https://avatars.githubusercontent.com/u/89668743?v=4" />
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
                    <img className="img-box" alt="team" src="https://avatars.githubusercontent.com/u/89312376?v=4" />
                </div>
                <div className="info-box">
                    <h3>Agustina Paez</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href="https://www.linkedin.com/in/agustina-paez-a1a208194/" target="_blank">
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
                    <img className="img-box" alt="team" src="data:image/jpeg;base64,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" />
                </div>
                <div className="info-box">
                    <h3>Alejandro Coniglio</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href="https://www.linkedin.com/in/alejandro-coniglio/" target="_blank">
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
                        <a href="https://www.linkedin.com/in/andrea-ovalles-developer/" target="_blank">
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
                    <img className="img-box" alt="team" src="https://avatars.githubusercontent.com/u/58927717?v=4"/>
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
                    <img className="img-box" alt="team" src="https://avatars.githubusercontent.com/u/19315386?v=4" />
                </div>
                <div className="info-box">
                    <h3>Gianluca Brunner </h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href="https://www.linkedin.com/in/gianluca-brunner/" target="_blank">
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
                        <a href="https://www.linkedin.com/in/joaquingplante/" target="_blank">
                            <img
                                src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg"
                                alt=""
                                width="20px"
                                height="20px"
                                className="icon"
                            />
                        </a>
                        <a href="https://github.com/Joaquin-Garcia-Plante" target="_blank">
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
                        <a href="https://www.linkedin.com/in/maria-judith-lara-goncalves/?originalSubdomain=ve" target="_blank">
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