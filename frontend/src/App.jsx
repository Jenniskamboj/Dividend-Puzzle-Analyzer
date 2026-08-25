import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import MLAnalysis from "./pages/MLAnalysis";
import TheoryAnalysis from "./pages/TheoryAnalysis";
import Comparison from "./pages/Comparison";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        {/* Sidebar */}

        <aside className="sidebar">

          <div className="logo">

            <div className="logo-icon">
              D
            </div>

            <div>
              <h2>Dividend</h2>
              <span>Puzzle Analyzer</span>
            </div>

          </div>


          <nav className="navigation">

            <NavLink
              to="/"
              end
              className="nav-item"
            >
              <span>⌂</span>
              Dashboard
            </NavLink>


            <NavLink
              to="/companies"
              className="nav-item"
            >
              <span>◉</span>
              Companies
            </NavLink>


            <NavLink
              to="/ml-analysis"
              className="nav-item"
            >
              <span>◆</span>
              ML Analysis
            </NavLink>


            <NavLink
              to="/theories"
              className="nav-item"
            >
              <span>◈</span>
              Theory Analysis
            </NavLink>


            <NavLink
              to="/comparison"
              className="nav-item"
            >
              <span>⇄</span>
              Comparison
            </NavLink>


            <NavLink
              to="/about"
              className="nav-item"
            >
              <span>ⓘ</span>
              About
            </NavLink>

          </nav>


          <div className="sidebar-footer">

            <span>
              Dividend Puzzle
            </span>

            <small>
              Data Analytics Project
            </small>

          </div>

        </aside>


        {/* Main */}

        <main className="main">

          <header className="header">

            <div>

              <p className="eyebrow">
                FINANCIAL ANALYTICS
              </p>

              <h1>
                Dividend Puzzle Analyzer
              </h1>

            </div>


            <div className="profile">

              <div className="avatar">
                J
              </div>

              <div>

                <strong>
                  Jennis
                </strong>

                <span>
                  Project Analyst
                </span>

              </div>

            </div>

          </header>


          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/companies"
              element={<Companies />}
            />

            <Route
              path="/ml-analysis"
              element={<MLAnalysis />}
            />

            <Route
              path="/theories"
              element={<TheoryAnalysis />}
            />

            <Route
              path="/comparison"
              element={<Comparison />}
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>


          <footer>

            <span>
              Dividend Puzzle Analyzer
            </span>

            <span>
              Data Analytics · Machine Learning · Finance
            </span>

          </footer>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;