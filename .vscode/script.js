const charprops = {
    heroname: ["Wanderer-Boozy", "Master-Twinkly", "Killer-Key", "Lord-Bold", "Artist-Violent"],
    attack: ["High-low kick", "Vomit", "Pillow strangle", "Sliding tackle", "Pencil stab"],
    enemyReaction: ["Start's crying and runs to his mom.", "Died and reborn stronger to comeback and avenge you.", "Dodged your attack and his now laughing at you."],
};

const personality = {
    "Wanderer-Boozy": "Travelles around the world to get drunk everywhere he can, and most dangerous when he's sober.",
    "Master-Twinkly": "He's the Govener of Twinkly island where all the nippleless people live, he's most dangerous when he cries.",
    "Killer-Key": "He was found in a dumpster when he was 3 years old by Wanderer Boozy and he's most dangerous when he's clean.",
    "Lord-Bold": "He became lord because he was mistaken to be someone else, he's most dangerous when a hair grows on his head.",
    "Artist-Violent": "No one never taught him how to speak, he expresses his self only with violents, he's most dangerous when people try speaking to him.",
};

const ranNumber = num => {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
};

const GenerateMessage = () => {
   let genMessage = [];
    for(let key in charprops){
        let KeyVal = charprops[key];
        let randIndex = ranNumber(KeyVal.length);
        genMessage.push(KeyVal[randIndex]);
        
    };
    console.log(`Your Hero name is: ${genMessage[0]}.\n ${personality[genMessage[0]]}\n Someone cross the line and you used: ${genMessage[1]}.\n Your enemy: ${genMessage[2]}`);
};

GenerateMessage();