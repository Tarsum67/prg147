import React from "react";
import "./App.css";

// Banner / Logo component
function Banner(props) {
  return (
    <header className="banner">
      <div className="banner-inner">
        <div>
          <h1>{props.title}</h1>
          <p className="banner-subtitle">{props.subtitle}</p>
          <p className="banner-name">Created by: {props.name}</p>
        </div>
        <nav>
          <ul className="nav-list">
            {props.navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Main content component
function Main(props) {
  return (
    <main className="main-content">
      {/* Intro section */}
      <section className="content-section">
        <h2>{props.introTitle}</h2>
        <p>{props.introText}</p>
      </section>

      {/* Description of the work being done on this page (required) */}
      <section className="content-section">
        <h2>{props.descriptionTitle}</h2>
        <p>{props.descriptionText}</p>
      </section>

      {/* Extra placeholder content */}
      <section className="content-section">
        <h3>{props.extraSectionTitle}</h3>
        <p>{props.extraSectionText}</p>
      </section>
    </main>
  );
}

// Footer component
function Footer(props) {
  return (
    <footer className="footer">
      <p>
        {props.year} {props.owner}. All rights reserved.
      </p>
      <p>Date: {props.fullDate}</p>
    </footer>
  );
}

// App component that passes props into the child components
function App() {
  const today = new Date();
  const fullDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="App">
      <Banner
        title="JavaScript Libraries Final Project"
        subtitle="React Components and Props Demonstration"
        name="Travis Routhier"
        navItems={["Home", "About", "Libraries", "Contact"]}
      />

      <Main
        introTitle="Welcome to the React Demo"
        introText="This page demonstrates how to use React components and props to build a simple layout with a banner, main content area, and footer. Each section on this page receives its content through props passed down from the App component."
        descriptionTitle="Description of the Work on This Page"
        descriptionText="For this final project, I created a React application that uses three main components: a Banner, a Main content area, and a Footer. The Banner component displays the page title, a short subtitle, navigation items, and my name. The Main component includes several sections of placeholder content along with this description of the work being done on the page. The Footer component displays copyright information and the current date. All of the text and values shown in these components are passed in using props so that the components remain reusable and flexible."
        extraSectionTitle="Additional Placeholder Content"
        extraSectionText="This is an additional content section used to demonstrate how props can be used to pass different headings and text into a reusable React component. In a larger application, this approach would make it easier to manage and update page content while keeping the overall layout consistent."
      />

      <Footer
        year={today.getFullYear()}
        owner="Travis Routhier"
        fullDate={fullDate}
      />
    </div>
  );
}

export default App;
