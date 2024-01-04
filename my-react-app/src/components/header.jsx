import React from 'react'
import { pyramid } from '../mario'
import { cash } from '../database'

function Header() {
  return (
      <header className="Header" id="Header" data-scene="about">
          <div className="Header__inner">
              <h1 className="Header__title">
                  <a href="/"><img src="/assets/images/common/header_title.svg" alt="福永 祐介" /></a>
              </h1>
              <nav className="Header__nav">
                  <ul className="list">
                      <li>
                          <a className="anchor is-inactive" href="/about/"><span>ABOUT</span></a>
                      </li>
                      <li>
                          <a className="anchor" href="mailto:atilla.arbeit1@gmail.com" target="_blank"><span>CONTACT</span></a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div>
              <App />
              <div id="body">
                  <table className="table">
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Header</th> {/* Add a header for the pyramid column */}
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              {/* Replace {pyramid} and {cash} with actual content for these cells */}
                              <td>Your Pyramid Content</td>
                          </tr>
                          {pyramid}
                      </tbody>
                  </table>
              </div>
          </div>
      </header>
  );
}
