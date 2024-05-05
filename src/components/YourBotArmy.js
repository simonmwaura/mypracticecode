import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({armyBots,removeBot,deleteBot}) {
  //your bot army code here...
  const isInArmy = (botId) => {
    return armyBots.some(bot => bot.id === botId);
  };
  // This function isInArmy checks if a bot with a given ID is present in the armyBots array. It uses the some() method to iterate through the array and returns true if any bot's ID matches the provided botId.

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army

          {
          armyBots.map(bot => (
            <BotCard key={bot.id} bot={bot} removeBot={removeBot} isInArmy={isInArmy(bot.id)}  deleteBot={deleteBot} />
        ))
        }

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
