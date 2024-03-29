import LinkedinIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Nikhil Shinde</h2>
        <div className="prompt">
          <p>A Web Developer with a passion for learning and creating</p>
          <LinkedinIcon></LinkedinIcon>
          <EmailIcon/>
          <GithubIcon/>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, bootstrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>UI / UX Design</h2>
            <span>
              NodeJS, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              C, C++, Java, Python
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home