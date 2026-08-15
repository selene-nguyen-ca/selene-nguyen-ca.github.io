import quest1Img from "./assets/quest1.png";
import quest2Img from "./assets/quest2.png";
import quest3Img from "./assets/quest3.jpg";

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: "#1e1e1e",
        marginBottom: "16px",
      }}
    />
  );
}

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#1e1e1e",
        border: "2px solid #1e1e1e",
        padding: "25px 37px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ padding: "13px" }}>
        <p
          style={{
            margin: "0 0 16px",
            color: "#ffffff",
            fontSize: "13.3px",
            fontWeight: 500,
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: "16px",
          }}
        >
          Email:{" "}
          <a
            href="mailto:moorselene@gmail.com"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            moorselene@gmail.com
          </a>
        </p>

        <p
          style={{
            margin: "0 0 16px",
            color: "#ffffff",
            fontSize: "13.3px",
            fontWeight: 500,
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: "16px",
          }}
        >
          Website:{" "}
          <a
            href="https://selene-nguyen-ca.github.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            selene-nguyen-ca.github.io
          </a>
        </p>

        <p
          style={{
            margin: 0,
            color: "#ffffff",
            fontSize: "13.3px",
            fontWeight: 500,
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: "16px",
          }}
        >
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/selenenguyen0976"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            www.linkedin.com/in/selenenguyen0976
          </a>
        </p>
      </div>
    </footer>
  );
}

function Quest({
  image,
  title,
  children,
  reference,
  pulseCheck = false,
}) {
  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "37.65% 1fr",
          gap: "16px",
          alignItems: "start",
          marginBottom: "16px",
        }}
      >
        {/* Image */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              display: "block",
              width: "100%",
              maxWidth: "210px",
              height: "auto",
            }}
          />
        </div>

        {/* Text */}
        <div
          style={{
            padding: "19px",
            borderRadius: pulseCheck ? "12px" : "0",
          }}
        >
          <h2
            style={{
              margin: "0 0 16px",
              color: "#2e2e2e",
              fontSize: "24px",
              fontWeight: 400,
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.14,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>

          {children}

          {reference && (
            <p
              style={{
                margin: 0,
                color: "#2e2e2e",
                fontSize: "14px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: 1.3,
              }}
            >
              Reference: {reference}
            </p>
          )}
        </div>
      </section>

      <Divider />
    </>
  );
}

function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f0f1f5",
        margin: 0,
        padding: 0,
      }}
    >
      <main
        style={{
          width: "600px",
          maxWidth: "100%",
          margin: "0 auto",
          backgroundColor: "#8cddf2",
          overflow: "hidden",
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: "#2e2e2e",
        }}
      >
        {/* =========================
            HERO
        ========================== */}

        <img
          src={heroImg}
          alt="Selene's UBC journey"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />

        {/* =========================
            INTRODUCTION
        ========================== */}

        <section
          style={{
            padding: "24px 24px 0",
          }}
        >
          <Divider />

          {/* Quote */}
          <blockquote
            style={{
              margin: "0 0 16px",
              padding: 0,
              color: "#2e2e2e",
              fontSize: "18.7px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.49,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            “The thing about you, Selene, is that you delivered what you
            envision”
            <br />
            <span>
              — Ricky Mahl, AV Team Lead (MedIT)
            </span>
          </blockquote>

          {/* Paragraph 1 */}
          <p
            style={{
              margin: "0 0 16px",
              color: "#2e2e2e",
              fontSize: "14.7px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.62,
            }}
          >
            Hello friends, I am a fresh-out-of-school graduate of the
            University of British Columbia (UBC) with a degree of Computer
            Science &amp; Business Combined Major.
          </p>

          {/* Paragraph 2 */}
          <p
            style={{
              margin: "0 0 16px",
              color: "#2e2e2e",
              fontSize: "14.7px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.62,
            }}
          >
            Throughout my journey at UBC, I took on many quests: from writing
            about{" "}
            <em>“the philosophy of fashion &amp; style”</em>{" "}
            at Chapman Learning Commons, to fighting technical issues while
            weaving the epics of the largest recording studio on campus, and
            eventually becoming a three-headed dragon at MedIT. Each head had
            its own mission: one designed workflows to enhance our day-to-day
            operations, another debated security issues alongside scientific
            analysts on the Data Management team, and the third celebrated my
            coworkers’ achievements by organizing countless events.
          </p>

          {/* Paragraph 3 */}
          <p
            style={{
              margin: "0 0 16px",
              color: "#2e2e2e",
              fontSize: "14.7px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.62,
            }}
          >
            Through these exciting journeys, I learned that the greatness of a
            person lies in their ability to be part of something larger than
            themselves: to envision what a united group can accomplish and
            make possible; to learn through collaboration while celebrating
            each other’s uniqueness; and to develop the empathy that comes
            from sharing the same challenges.
          </p>

          {/* Closing questions */}
          <p
            style={{
              margin: "0 0 16px",
              color: "#2e2e2e",
              fontSize: "14.7px",
              fontWeight: 700,
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.62,
            }}
          >
            So, friends, what are you excited about?
          </p>

          <p
            style={{
              margin: "0 0 16px",
              color: "#2e2e2e",
              fontSize: "14.7px",
              fontWeight: 700,
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.62,
            }}
          >
            And more importantly, are you ready to embark on a new journey
            with me?
          </p>
        </section>

        {/* =========================
            CONTACT
        ========================== */}

        <Footer />

        {/* =========================
            QUESTS
        ========================== */}

        <section
          style={{
            padding: "0 24px",
          }}
        >
          <h1
            style={{
              margin: 0,
              padding: "0 0 16px",
              color: "#2e2e2e",
              fontSize: "32px",
              fontWeight: 400,
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Quests &amp; Conquers
          </h1>

          <Divider />

          {/* =========================
              QUEST 1
          ========================== */}

          <Quest
            image={quest1Img}
            title={
              <>
                Academic Learning Space Stewards{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                  }}
                >
                  Pilot
                </span>{" "}
                Program
              </>
            }
            reference="Ricky Mahl — AV Team Lead (MedIT)"
          >
            <p
              style={{
                margin: "0 0 16px",
                color: "#2e2e2e",
                fontSize: "14.7px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: 1.3,
              }}
            >
              How one can help convert a potential spark into a permanent
              milestone of MedIT.
            </p>

            <p
              style={{
                margin: "0 0 16px",
                color: "#2e2e2e",
                fontSize: "14.7px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: 1.3,
              }}
            >
              <strong>Solution:</strong> I turned myself 3-head-dragon...
            </p>
          </Quest>

          {/* =========================
              QUEST 2
          ========================== */}

          <Quest
            image={quest2Img}
            title="Pulse Check Application"
            pulseCheck
            reference={
              <a
                href="https://apex.med.ubc.ca/ords/r/av/pulsecheck109/room-submission1?session=4717747715640"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1a62ff",
                  textDecoration: "underline",
                }}
              >
                Pulse Check
              </a>
            }
          >
            <p
              style={{
                margin: "0 0 16px",
                color: "#1e1e1e",
                fontSize: "14.7px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: 1.3,
              }}
            >
              Heyyy, it is just not about 1s and 0s. A collaborative effort of
              ambitious{" "}
              <strong>coven of coding witches.</strong>
            </p>
          </Quest>

          {/* =========================
              QUEST 3
          ========================== */}

          <Quest
            image={quest3Img}
            title="CLC Blog Contributor"
            reference={
              <>
                <a
                  href="https://learningcommons.ubc.ca/i-tried-it-a-new-aesthetic-for-a-week/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: "999px",
                    backgroundColor: "#81cadd",
                    color: "#1e1e1e",
                    textDecoration: "none",
                  }}
                >
                  UBC
                </a>{" "}
                &amp;{" "}
                <a
                  href="mailto:clc.staff@ubc.ca"
                  style={{
                    color: "#1e1e1e",
                    textDecoration: "none",
                  }}
                >
                  clc.staff@ubc.ca
                </a>
              </>
            }
          >
            <p
              style={{
                margin: "0 0 16px",
                color: "#1e1e1e",
                fontSize: "14.7px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: 1.3,
              }}
            >
              You know ... I am kinda a nerd myself. From{" "}
              <strong>
                writing manuals of machine IO to why fashion matters!
              </strong>
            </p>
          </Quest>
        </section>

        {/* =========================
            BOTTOM CONTACT
        ========================== */}

        <Footer />
      </main>
    </div>
  );
}

export default App;