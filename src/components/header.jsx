import React from 'react'
import ReactDOM from 'react-dom/client'
import { pyramid } from '../mario'
import { cash } from '../database'

function header() {
    return (
      <div>
        <app />
        <div id="body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                {pyramid}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                {cash}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  