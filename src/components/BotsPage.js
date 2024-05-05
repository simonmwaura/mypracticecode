import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  //make 
  const [bots, setBots] = useState([]);
 

  const [armyBots, setArmyBots] = useState([]);
  //this is a variable that is used to store the bots in the bot army section

//to complete the 1st deliverable we have to fetch the data using useeffect then we have to use map and i will do that in the bot collection componenet

useEffect(
  ()=>{
    fetch('https://mypracticecode-2.onrender.com/bots')
  .then((response) => response.json())
  .then((json) => setBots(json));
  },[]
)

//to do the second deliverable i need to make a function which would be used to addbots to the bot army
function addBot(bot) {

  //The bot can be enlisted only **once**. this means i neeed to make sur that a bot is used once and can never be used again

  const isBotAlreadyAdded = armyBots.some(armyBot => armyBot.id === bot.id);


  if (!isBotAlreadyAdded) {
    setArmyBots(prevArmyBots => [...prevArmyBots, bot]);
  }
}

  function removeBot(bot) {
    const newArmyBots = armyBots.filter(armyBot => armyBot.id !== bot.id);
    setArmyBots(newArmyBots)
  }

  function deleteBot(botId) {
    fetch(`https://mypracticecode-2.onrender.com/bots/${botId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete bot');
      }
      alert("Deleted successfully!");
      return fetch('https://mypracticecode-2.onrender.com/bots'); 
    })
    .then(response => response.json()) 
    .then(json => setBots(json))
    .catch(error => {
      console.error('Error deleting bot:', error);
    });
  }

  return (
    <div>
      <YourBotArmy armyBots={armyBots} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} addBot={addBot} />
    </div>
  )
}

export default BotsPage;
