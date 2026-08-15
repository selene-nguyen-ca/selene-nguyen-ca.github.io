import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#002145",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          margin: 0,
          padding: "24px",
          textAlign: "center",
          fontSize: "27px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        THANK YOU LETTER
      </h1>

      {/* FIRST SECTION */}
      <section
        style={{
          padding: "0 24px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              width: "50%",
            }}
          >
            <img
              src="/images/77b36324ef4ae4b9f71842a3bbb69ab3.jpg"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* TEXT */}
          <div
            style={{
              width: "50%",
              color: "#ffffff",
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: "16px",
              lineHeight: 2.01,
              letterSpacing: "0.038em",
            }}
          >
            After one year as part of the Academic Learning Space
            Steward program and witnessing its growth, we are filled
            with immense gratitude for your guidance and leadership.
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div
        style={{
          height: "1px",
          margin: "0 24px 16px",
          backgroundColor: "#bfc3c8",
        }}
      />

      {/* SECOND PARAGRAPH */}
      <section
        style={{
          padding: "0 41px 16px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#ffffff",
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: "16px",
            lineHeight: 1.82,
            letterSpacing: "0.07em",
          }}
        >
          You have supported not only us students but also Ricky as
          he stepped into his role as the new AV Lead of the team.
          Throughout this past year, you have been instrumental in
          building and shaping the program with patience, dedication,
          and encouragement.
        </p>
      </section>

      {/* IMAGE SECTION */}
      <section
        style={{
          padding: "38px 80px",
          backgroundColor: "#07192b",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "50%",
            }}
          >
            <img
              src="/images/8a09b754e69d3a1194464be63ab4ff77.png"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              width: "50%",
            }}
          >
            <img
              src="/images/e677da1e11a0be1e41bee41f5354b32e.jpg"
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section
        style={{
          padding: "19px 24px 16px",
        }}
      >
        <p
          style={{
            maxWidth: "451px",
            margin: "0 auto",
            color: "#ffffff",
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: "16px",
            lineHeight: 1.91,
            letterSpacing: "0.046em",
            textAlign: "justify",
          }}
        >
          We wish you every success in your future endeavors. We have
          no doubt that wherever your career takes you next, you will
          continue to make a lasting impact on the people and teams
          around you. Thank you for believing in us and for giving us
          students the opportunity to be part of something so special.
        </p>
      </section>

      {/* BOTTOM IMAGE */}
      <section
        style={{
          backgroundColor: "#07192b",
          paddingBottom: "24px",
        }}
      >
        <img
          src="/images/cbef9d23d86748659d6f5d79255fb588.jpg"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </section>
    </main>
  );
}

export default App;