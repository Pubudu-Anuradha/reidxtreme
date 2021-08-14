import React from "react";
import "./Prizes.css";

const prizes = [
  { emo: "🥇", cash: "Rs.30000" },
  { emo: "🥈", cash: "Rs.20000" },
  { emo: "🥉", cash: "Rs.10000" },
];

function Prizes() {
  return (
    <div id="prizes" class="marg">
      <h2>Prizes</h2>
      <div class="prizes">
        {prizes.map((prize) => {
          return (
            <div class="prize">
              <div class="emo">{prize.emo}</div>
              <div class="cash">{prize.cash}</div>
            </div>
          );
        })}
      </div>
      <div class="message">and, Swags for all active participants</div>
    </div>
  );
}

export default Prizes;
