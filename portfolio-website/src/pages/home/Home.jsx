import "./Home.css";

import heroImg from "../../assets/icons/websiteBanner.jpg";
import emailIcon from "../../assets/icons/mailIcon.png";
import resumeIcon from "../../assets/icons/resumeIcon.png";
import linkedinIcon from "../../assets/icons/linkedinIcon.png";

import academicImg from "../../assets/icons/ALSSLogo.png";
import pulseImg from "../../assets/icons/PulseCheckLogo.png";
import clcImg from "../../assets/icons/CLC.jpg";

import { Link } from "react-router-dom";


function Divider() {
  return <div className="divider" />;
}

function SocialLinks() {
  return (
    <div className="social-section">
      <a href="mailto:moorselene@gmail.com">
        <img src={emailIcon} alt="Email" />
      </a>

      <a
        href="https://selene-nguyen-ca.github.io/#/resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={resumeIcon} alt="Resume" />
      </a>

      <a
        href="https://www.linkedin.com/in/selenenguyen0976"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
    </div>
  );
}

function Quest({
  image,
  title,
  children,
  reference,
  imageClass = "",
}) {
  return (
    <article className="quest">
      <div className={`quest-image ${imageClass}`}>
        <img src={image} alt="" />
      </div>

      <div className="quest-content">
        <h3>{title}</h3>

        <div className="quest-description">
          {children}
        </div>

        {reference && (
          <div className="reference">
            {reference}
          </div>
        )}
      </div>
    </article>
  );
}

function Home() {
  return (
    <main className="page">
      <div className="container">

        {/* Hero */}
        <img
          src={heroImg}
          alt="Selene Nguyen"
          className="hero-image"
        />

        {/* Introduction */}
        <section className="intro">

          <p>
            Hello friends, I am a graduate of the
            University of British Columbia (UBC) with a degree of
            Computer Science &amp; Business Combined Major.
          </p>

          <p>
            Throughout my journey at UBC, I took on many different missions. I explored
            fashion and style as a Peer Advisor at Chapman Learning Commons, tackled
            technical challenges while learning the ins and outs of the campus’s largest
            recording studio, and eventually became a three-headed student worker at MedIT.
          </p>

          <p>
            At MedIT, I worked alongside the AV Team Lead to transform the Academic
            Learning Space Stewards pilot program into a permanent part of MedIT. I
            designed workflows to strengthen our day-to-day operations, collaborated
            with the Data Management Team to automate redundant processes, and organized
            countless events that brought our team closer together.
          </p>

          <p>
            Through these exciting journeys, my workstyle
            has been shaped by the belief that the true strength
            of a person lies in their ability to be part of something
            larger than themselves: to envision what a united group can
            accomplish and make possible; to learn through collaboration
            while celebrating each other’s uniqueness; and to develop the
            empathy that comes from sharing the same challenges.
          </p>

          <p className="bold">
            So, friends, what are you excited about?
          </p>

          <p className="bold">
            And more importantly, are you ready to embark on a new
            journey with me?
          </p>

          <Divider />

          <SocialLinks />

        </section>

        {/* Quests */}
        <section className="quests">

          <h2>Quests &amp; Conquers</h2>

          <Divider />

          <Quest
            image={academicImg}
            title={
              <Link
                to="/projects/project-1"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="quest-link"
              >
                Academic Learning Space Stewards{" "}
                <span className="strike">Pilot</span> Program
              </Link>
            }
            reference="Reference: Ricky Mahl - AV Team Lead (MedIT)"
          >
            <p>
              How one can help convert a potential spark into a permanent
              milestone of MedIT.
            </p>

            <p>
              <strong>Solution:</strong> The dance of dragons, being fearless in the face of challenges,
              and the vison of a united team that can accomplish the impossible.
            </p>
          </Quest>

          <Divider />

          <Quest
            image={pulseImg}
            title={
              <Link
                to="/projects/project-2"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="quest-link"
              >
                Pulse Check Application
              </Link>
            }
            imageClass="pulse-image"
            reference={
              <>
                Reference:{" "}
                <a
                  href="https://apex.med.ubc.ca/ords/r/av/pulsecheck109/room-submission1?session=4717747715640"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pulse Check
                </a>
              </>
            }
          >
            <p>
              Heyyy, it is just not about 1s and 0s. A collaborative
              efforts of ambitious{" "}
              <strong>coven of coding witches.</strong>
            </p>
          </Quest>

          <Divider />

          <Quest
            image={clcImg}
            title={
              <Link
                to="/projects/project-3"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="quest-link"
              >
                Publishing &amp; Writing Sample
              </Link>
            }
          >
            <p>
              You know ... I am kinda a nerd myself. From{" "}
              <strong>
                writing manuals of maching IO to why fashion matters!
              </strong>
            </p>

            <p>
              Reference:{" "}
              <a href="mailto:clc.staff@ubc.ca">
                clc.staff@ubc.ca
              </a>
            </p>
          </Quest>

        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            Email:{" "}
            <a href="mailto:moorselene@gmail.com">
              moorselene@gmail.com
            </a>
          </p>

          <p>
            Website:{" "}
            <a
              href="https://selene-nguyen-ca.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              selene-nguyen-ca.github.io
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/selenenguyen0976"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/selenenguyen0976
            </a>
          </p>
        </footer>

      </div>
    </main>
  );
}

export default Home;