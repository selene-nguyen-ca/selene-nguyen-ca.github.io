import "./Home.css";

import heroImg from "../../assets/4d9c01eebf2b12f0aa8d56d63c4f15a6.jpg";

import emailIcon from "../../assets/1fdb0384a18d0cf572a59e091873cb65.png";
import resumeIcon from "../../assets/3026bb1e5bcc2780f7c843b2b482b244.png";
import linkedinIcon from "../../assets/67c923fa2ec7d8171e30e8e1ce4da597.png";

import academicImg from "../../assets/756d48e13ccbc15f9dcd92d43ac53dd3.png";
import pulseImg from "../../assets/2c19d0e0d6919604b164c5289340ea8c.png";
import clcImg from "../../assets/1cc87ef857d719e9040bc11b958e1f72.jpg";

function Divider() {
  return <div className="divider" />;
}

function SocialLinks() {
  return (
    <div className="social-section">
      <a href="mailto:selenemoor@gmail.com">
        <img src={emailIcon} alt="Email" />
      </a>

      <a
        href="https://www.selene-nguyen-ca.github.io/resume"
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
            Hello friends, I am a fresh-out-of-school graduate of the
            University of British Columbia (UBC) with a degree of
            Computer Science &amp; Business Combined Major.
          </p>

          <p>
            Throughout my journey at UBC, I took on many quests: from
            writing about <em>“the philosophy of fashion &amp; style”</em>
            at Chapman Learning Commons, to fighting technical issues
            while weaving the epics of the largest recording studio on
            campus, and eventually becoming a three-headed dragon at
            MedIT. Each head had its own mission: one designed workflows
            to enhance our day-to-day operations, another debated
            security issues alongside scientific analysts on the Data
            Management team, and the third celebrated my coworkers’
            achievements by organizing countless events.
          </p>

          <p>
            Through these exciting journeys, I learned that the greatness
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
              <>
                Academic Learning Space Stewards{" "}
                <span className="strike">Pilot</span> Program
              </>
            }
            reference="Reference: Ricky Mahl - AV Team Lead (MedIT)"
          >
            <p>
              How one can help convert a potential spark into a permanent
              milestone of MedIT.
            </p>

            <p>
              <strong>Solution:</strong> I turned myself 3-head-dragron...
            </p>
          </Quest>

          <Divider />

          <Quest
            image={pulseImg}
            title="Pulse Check Application"
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
            title="CLC Blog Contributor"
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