import React, { useState, useEffect } from "react";
import "./About.scss";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function About() {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });
  return (
    <CSSTransition in={inProp} timeout={800} classNames="landing">
      <div>
        <div style={{ width: "70%" }} className="flexBox">
          <p className="title">
            About{" "}
            <InfoOutlinedIcon
              style={{ marginBottom: "-8px" }}
              sx={{ fontSize: 60 }}
            />
          </p>
          <p className="text">
            I am a novice web developer. Since 2015, programming is my passion.
            I finished studies in the field of computer science. Mainly I&apos;m
            interested in web applications especially front-end. I would like
            primarily at projects that every time they will teach me something
            and will allow you to gain experience. In 2021 I opened my own
            activity.
          </p>
          <p className="title">
            Skills
            <PsychologyOutlinedIcon
              style={{ marginBottom: "-8px" }}
              sx={{ fontSize: 70 }}
            />
          </p>
          <table className="text">
            <tbody>
              <tr>
                <td>Programming Languages:</td>
                <td>C, C++, JavaScript, Java, Python,</td>
              </tr>
              <tr>
                <td>Web Technologies:</td>
                <td>
                  React.js, CSS3, HTML5, Express.js, jQuery, Node.js, Socket.io,
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex">
          <div className="halfBox1">
            <a
              className="boxButton buttonOne"
              href="https://drive.google.com/file/d/1ycPl8O5wA3x7rylQESDTNK6z1qteLUsd/view?usp=sharingf"
              target="blank"
            >
              <p>RESUME</p>
            </a>
          </div>
          <div className="halfBox2">
            <Link to="/app/contact" className="boxButton buttonTwo">
              <p>CONTACT</p>
            </Link>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default About;
