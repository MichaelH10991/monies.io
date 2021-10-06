import React from "react"
import config from "../config"

const Balance = () => {
  return (
    <div>
      <div>You have £5000</div>
      <div style={{ margin: "0% 25% 0% 25%", textAlign: "start" }}>
        <form>
          <div>
            <label>add money</label>
            <div>
              <input />
              <button>Add</button>
            </div>
          </div>
          <div>
            <label>remove money</label>
            <div>
              <input />
              <button>Remove</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Balance
