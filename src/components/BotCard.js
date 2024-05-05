import React from "react";

// Mapping of bot types to CSS classes for icons
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

// BotCard component receives bot data and functions for adding, removing, and deleting bots
function BotCard({ bot, addBot, removeBot, isInArmy, deleteBot }) {
  // Function to handle bot card click event
  const handleClick = () => {
    // If bot is already in the army, remove it; otherwise, add it
    if (isInArmy) {
      removeBot(bot);
    } else {
      addBot(bot);
    }
  };

  // Render the bot card with its details
  return (
    <div className="ui column">
      {/* Bot Card */}
      <div
        className="ui card"
        key={bot.id}
        onClick={handleClick} // Click event handler to add/remove bot from the army
      >
        {/* Bot Image */}
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        {/* Bot Content */}
        <div className="content">
          {/* Bot Name and Type */}
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} /> {/* Render bot type icon */}
          </div>
          {/* Bot Catchphrase */}
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        {/* Bot Attributes */}
        <div className="extra content">
          {/* Health */}
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          {/* Damage */}
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          {/* Armor */}
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          {/* Delete Button */}
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => deleteBot(bot.id)} // Click event handler for delete button
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
