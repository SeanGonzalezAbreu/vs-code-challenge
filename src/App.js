import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { getRandomSections } from "./random";
import { Section } from "./Section";

class App extends Component {
  state = { sections: [], activeSectionID: "" };

  handleChange = (id) => {
    this.setState({ activeSectionID: id });
  };

  componentDidMount() {
    const sections = getRandomSections();
    this.setState({ sections });
  }

  render() {
    return (
      <div className="App">
        <header className="p-3 mb-3 border-bottom">
          <h4>
            Vascar Solutions{" "}
            <small className="text-muted">Code Challenge</small>
          </h4>
        </header>
        <main className="main-container">
          <ul className="nav flex-column border-right side-menu">
            {this.state.sections.map((section) => (
              <li className="nav-item" key={section.id}>
                <a
                  className={
                    this.state.activeSectionID === section.id
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href={"#" + section.id}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-3">
            {this.state.sections.map(({ title, id, paragraphs }) => (
              <Section
                key={id}
                id={id}
                title={title}
                paragraphs={paragraphs}
                onChange={this.handleChange}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
