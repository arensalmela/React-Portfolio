import React from "react"
import WeatherDB from "../Assets/WeatherDB.png"
import TravelWebsite from "../Assets/Project1.png"
import WDSched from "../Assets/WDSched.png"
import Password from "../Assets/password.png"
import Hydrohomies from "../Assets/hydrohomies.png"
import Notetaker from "../Assets/notetaker.png"

function ProjectCards(){

    return (
        <div>
        <div className="row">
          <div className="col">
            <div className="card shadow-lg p-3 mb-5 roundCorners" style={{width: '18rem'}}>
              <img className="imgRound card-img-top" src={WeatherDB} alt="Card image cap" />
              <div className="card-body">
                <h5 className="changeFont card-title">Weather Dashboard</h5>
                <p className="changeFont">Input a city, find out the weather</p>
                <div className="row portfolioBtns">
                  <a href=" https://arensalmela.github.io/WeatherDashboard/" target="_blank" className="btn btn-outline-primary">Website</a>
                  <br />
                  <a href="https://github.com/arensalmela/WeatherDashboard" target="_blank" className="btn btn-outline-primary">Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg p-3 roundCorners" style={{width: '18rem'}}>
              <img className="imgRound card-img-top" src={TravelWebsite} alt="Card image cap" />
              <div className="card-body card-color">
                <h5 className="changeFont card-title">Stay Yummy!</h5>
                <p className="changeFont">Discover hotels and restaurants</p>
                <div className="row portfolioBtns">
                  <a href=" https://arensalmela.github.io/TravelWebsite/" target="_blank" className="btn btn-outline-primary">Website</a>
                  <br />
                  <a href="https://github.com/arensalmela/TravelWebsite" target="_blank" className="btn btn-outline-primary">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card shadow-lg p-3 roundCorners" style={{width: '18rem'}}>
              <img className="imgRound card-img-top" src={WDSched} alt="Card image cap" />
              <div className="card-body card-color">
                <h5 className="changeFont card-title">Schedule</h5>
                <p className="changeFont">Keep yourself organized</p>
                <div className="row portfolioBtns">
                  <a href=" https://arensalmela.github.io/WorkDayScheduler/
                " target="_blank" className="btn btn-outline-primary">Website</a>
                  <a href="https://github.com/arensalmela/WorkDayScheduler" target="_blank" className="btn btn-outline-primary">Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="roundCorners shadow-lg p-3 card" style={{width: '18rem'}}>
              <img className="imgRound card-img-top" src={Password} alt="Card image cap" />
              <div className="card-body card-color">
                <h5 className="changeFont card-title">Password Generator</h5>
                <p className="changeFont">Need a new password?</p>
                <div className="row portfolioBtns">
                  <a href=" https://arensalmela.github.io/PasswordGenerator/" target="_blank" className="btn btn-outline-primary">Website</a>
                  <a href="https://github.com/arensalmela/PasswordGenerator" target="_blank" className="btn btn-outline-primary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card shadow-lg p-3 mt-5 roundCorners" style={{width: '18rem'}}>
              <img className="imgRound card-img-top" src={Hydrohomies} alt="Card image cap" />
              <div className="card-body">
                <h5 className="changeFont card-title">Hydrohomies</h5>
                <p className="changeFont">Quench Your Thirst!</p>
                <div className="row portfolioBtns">
                  <a href="https://hydro-homies.herokuapp.com/index.html
                  " target="_blank" className="btn btn-outline-primary">Website</a>
                  <br />
                  <a href="https://github.com/arensalmela/hydrohomies" target="_blank" className="btn btn-outline-primary">Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg mt-5 p-3 roundCorners" style={{width: '18rem'}}>
              <img className="imgRound card-img-top" src={Notetaker} alt="Card image cap" />
              <div className="card-body card-color">
                <h5 className="changeFont card-title">Note Taker</h5>
                <p className="changeFont">Save & Delete Notes</p>
                <div className="row portfolioBtns">
                  <a href="https://ads-notetaker.herokuapp.com/" target="_blank" className="btn btn-outline-primary">Website</a>
                  <br />
                  <a href="https://github.com/arensalmela/NoteCreator" target="_blank" className="btn btn-outline-primary">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default ProjectCards