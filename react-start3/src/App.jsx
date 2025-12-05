import "./App.css";

// Banner / Logo component (top of page)
function Banner({ title, subtitle, name, navItems }) {
  return (
    <header className="banner">
      <div className="banner-inner">
        <div>
          <h1>{title}</h1>
          <p className="banner-subtitle">{subtitle}</p>
          <p className="banner-name">Created by: {name}</p>
        </div>

        <nav>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Main content component (middle of page)
function Main({
  introTitle,
  introText,
  descriptionTitle,
  descriptionText,
  extraSectionTitle,
  extraSectionText,
}) {
  return (
    <main className="main-content">
      {/* Intro section */}
      <section className="content-section">
        <h2>{introTitle}</h2>
        <p>{introText}</p>
      </section>

      {/* REQUIRED: Description of the work being done on this page */}
      <section className="content-section">
        <h2>{descriptionTitle}</h2>
        <p>{descriptionText}</p>
      </section>

      {/* Extra placeholder content */}
      <section className="content-section">
        <h3>{extraSectionTitle}</h3>
        <p>{extraSectionText}</p>
      </section>
    </main>
  );
}

// Footer component (bottom of page)
function Footer({ year, owner, fullDate }) {
  return (
    <footer className="footer">
      <p>
        &copy; {year} {owner}. All rights reserved.
      </p>
      <p>Date: {fullDate}</p>
    </footer>
  );
}

// App component: passes props into the child components
function App() {
  const today = new Date();
  const fullDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
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
        descriptionText="For this final project, I created a React application that uses three main components: a Banner, a Main content area, and a Footer. The Banner component displays the page title, a subtitle, simple navigation items, and my name. The Main component includes several sections of placeholder content along with this description of the work being done on the page. The Footer component displays copyright information and the current date. All of the text and values shown in these components are passed in using props so that the components remain reusable and easy to update."
        extraSectionTitle="Additional Placeholder Content"
        extraSectionText="This additional section demonstrates how props can be used to pass different headings and paragraphs into a reusable component. In a larger application, this approach would allow you to reuse layout components across multiple pages while changing only the data that is passed in as props."
      />

      <Footer year={today.getFullYear()} owner="Travis Routhier" fullDate={fullDate} />
    </div>
  );
}

export default App;
