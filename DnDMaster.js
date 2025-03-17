function showAlert() {
    var dropdown = document.getElementById("race");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    
    // Define different text based on the selected option
    var message = "";
    if (selectedOption === "Dwarf") {
        message = "You selected the dwarf. Dwarves are a stout and resilient race in Dungeons & Dragons, known for their toughness, craftsmanship, and strong connection to the earth. Typically standing around 4 to 5 feet tall, they have broad, muscular builds and are known for their long lifespans, often living for centuries. Dwarves are skilled miners, stoneworkers, and smiths, creating finely crafted weapons, armor, and structures. Their society is often built around strongholds, deep in mountains or underground, and they value tradition, honor, and the bonds of family. Dwarves are also known for their unwavering determination, stubbornness, and a deep sense of loyalty to their kin and allies. Many dwarves are formidable fighters, with a strong affinity for battle axes, war hammers, and shields, making them tough opponents in combat. They also have natural resistance to poison and are well-versed in underground survival.";
    } else if (selectedOption === "Hill Dwarf") {
        message = "You selected the hill dwarf. Hill Dwarves are a subrace of dwarves that have adapted to life in more temperate, hilly regions rather than the deep mountains. They are known for their resilience and connection to the land, living in villages or strongholds built into rolling hills and fertile plains. Hill Dwarves tend to be more focused on farming, crafting, and trade, though they still maintain the typical dwarven love for fine craftsmanship and brewing. Physically, they are similar to other dwarves, with stocky builds and a strong sense of tradition. Hill Dwarves are particularly noted for their exceptional wisdom and endurance, both mentally and physically. They have a natural resistance to disease and gain an additional boost to their constitution, making them even tougher than other dwarves in terms of health. Hill Dwarves value their close-knit communities, where family ties are strong and everyone looks out for one another. In combat, they’re often seen as resilient and tough, able to withstand a lot of damage while supporting their allies.";
      } else if (selectedOption === "Mountain Dwarf") {
        message = "You selected the mountain dwarf. Mountain Dwarves are a subrace of dwarves known for their strength and their connection to the harsh, rocky mountains. They are often found living in grand fortresses built deep in the mountains, where they are expert miners, stonecutters, and blacksmiths. Mountain Dwarves are larger and more muscular than other dwarves, and they tend to have a more martial culture, focusing on war and defense. They are skilled warriors, favoring heavy armor and powerful weapons like axes and warhammers. In addition to their natural resistance to poison, they also have enhanced strength, making them formidable in battle.";
    } else if (selectedOption === "Duergar") {
        message = "You selected the duergar. Duergar, also known as gray dwarves, are a twisted, malevolent subrace of dwarves that dwell in the Underdark. Unlike their surface-dwelling kin, duergar are typically evil and cruel, often driven by hatred and a thirst for power. They are known for their grim, colorless appearance and their ability to magically enlarge themselves in battle. Duergar are skilled in mining and smithing, particularly in crafting weapons and armor that are infused with dark magic. While they may be less resilient to poison than other dwarves, their cunning and magic make them dangerous foes in combat.";
    } else if (selectedOption === "Elf") {
        message = "You selected the elf. Elves are a graceful and long-lived race known for their keen senses, magical aptitude, and deep connection to nature. Elves tend to live in forests, hidden enclaves, or in cities that blend harmoniously with the natural world. They are known for their agility, keen sight, and advanced skill in archery and magic. Elves live for centuries, often holding onto ancient knowledge and wisdom. Their societies are often egalitarian and they deeply value beauty, art, and the preservation of nature. In combat, elves are swift and precise, often relying on finesse over brute strength.";
    } else if (selectedOption === "Dark Elf") {
        message = "You selected the dark elf. Dark Elves, or drow, are a sinister and enigmatic subrace of elves that live in the Underdark. Known for their dark skin, white or silver hair, and piercing red eyes, the drow have a reputation for cruelty, treachery, and manipulation. They are skilled in both magic and combat, often wielding poison and shadows to their advantage. Drow society is matriarchal and driven by the worship of Lolth, the Spider Queen. Although they are highly intelligent and powerful, drow are often mistrusted by surface dwellers due to their history of violence and betrayal.";
    } else if (selectedOption === "Avariel") {
        message = "You selected the avariel. Avariel are a rare and noble subrace of elves with the gift of flight. These elves have wings, allowing them to soar through the skies with ease. Their graceful, bird-like features set them apart from other elves, and they are often associated with freedom and exploration. Avariel are usually found in remote, high-altitude regions, living in aerial cities or among the treetops. They are skilled in archery, magic, and aerial combat. Due to their rarity, avariel are often considered mysterious and ethereal by those who encounter them.";
    } else if (selectedOption === "Eladrin") {
        message = "You selected the eladrin. Eladrin are an ancient and mystical subrace of elves with a strong connection to the Feywild, a parallel realm of raw magic and unpredictable emotion. Eladrin are known for their ability to shift their appearance and demeanor based on the seasons, reflecting the changing nature of the Feywild itself. This connection to the Feywild grants them magical abilities, and they are often skilled in enchantment and illusion. Eladrin are elegant, mysterious, and often embody the whimsy and capriciousness of the fey. In combat, they are swift, unpredictable, and masters of both magic and martial arts.";
    } else if (selectedOption === "Halfling") {
        message = "You selected the halfling. Halflings are a small and nimble race, standing around 3 feet tall with a strong sense of community and a love for comfort and simplicity. Known for their luck and cheerful demeanor, halflings are often found in rural villages or close-knit communities, living simple, peaceful lives. They are quick, stealthy, and resilient, with a natural ability to avoid danger. Halflings are known for their courage despite their small size, and many make excellent adventurers, whether as rogues, bards, or fighters. Their luck seems to protect them in even the most dangerous situations.";
    } else if (selectedOption === "Human") {
        message = "You selected the human. Humans are a versatile and adaptable race, known for their drive, ambition, and rapid population growth. Standing between 5 and 6 feet tall, humans come in a wide range of physical appearances and cultural backgrounds. They are capable of mastering almost any skill or profession, and many humans are adventurers seeking to make their mark on the world. Humans are often the most populous race in any region, creating diverse societies filled with innovation, conflict, and change. They are ambitious and persistent, often rising to greatness through sheer willpower.";
    } else if (selectedOption === "Dragonborn") {
        message = "You selected the dragonborn. Dragonborn are a proud and honorable race descended from dragons, known for their draconic features and natural affinity with elemental energy. Standing over 6 feet tall, dragonborn possess scales that shimmer in various colors, with their draconic ancestry influencing both their appearance and abilities. They are formidable warriors, often wielding breath weapons that allow them to unleash blasts of fire, cold, or other elements. Dragonborn value honor and loyalty, and many choose to follow a code of conduct or a personal oath. They are brave, strong, and capable of great feats of strength and courage.";
    } else if (selectedOption === "Gnome") {
        message = "You selected the gnome. Gnomes are a small, curious, and highly intelligent race known for their love of invention and their keen understanding of magic. Standing around 3 to 4 feet tall, gnomes are known for their sharp minds and inventive nature, often creating fantastical machines or enchanting objects to make life easier or more fun. Gnomes value knowledge, curiosity, and creativity, and many are skilled in magic, particularly illusion and transmutation. Despite their small stature, gnomes are brave and resourceful adventurers, always eager to discover new things and solve complex problems.";
    } else if (selectedOption === "Rock Gnome") {
        message = "You selected the rock gnome. Rock gnomes are a subrace of gnomes known for their connection to the earth and their love of craftsmanship. They are particularly skilled in creating intricate mechanical devices and are often found working with metal, stone, and gems. Rock gnomes tend to be quiet and reserved, but they have a natural curiosity and love for tinkering. Their inventions often combine magic and technology, making them invaluable to adventuring parties seeking new solutions to complex problems. They are also known for their deep connection to their families and communities.";
    } else if (selectedOption === "Half Elf") {
        message = "You selected the half elf. Half-elves are a hybrid race born from the union of humans and elves, combining the best traits of both. They inherit the grace and longevity of elves, along with the adaptability and ambition of humans. Half-elves are often seen as outsiders, neither fully accepted by elves nor humans, which makes them versatile and adaptable in any situation. They are skilled diplomats, often excelling in roles that require charm and persuasion. Half-elves are also known for their magical potential, combining the magical aptitude of elves with the flexibility of human abilities.";
    } else if (selectedOption === "Half Orc") {
        message = "You selected the half orc. Half-orcs are the offspring of humans and orcs, blending the physical strength and resilience of orcs with the adaptability and cunning of humans. They are often seen as fierce warriors, known for their brutal combat skills and savage fury. Half-orcs tend to stand tall, with muscular builds and tusked faces, and they are often more inclined to embrace their orcish heritage, though some strive to prove their worth among humans. Half-orcs are naturally strong and resilient, able to endure great hardships and fight with ferocity. Many seek to find their place in the world, navigating the complexities of their dual heritage.";
    } else if (selectedOption === "Tiefling") {
        message = "You selected the tiefling. Tieflings are a race of humanoids with infernal ancestry, often bearing fiendish traits like horns, tails, and red or purple skin. They are often seen as outsiders or even villains due to their demonic heritage, but many tieflings reject this stigma and seek to prove themselves as individuals. Tieflings possess natural magical abilities, including resistance to fire damage and the potential to wield powerful infernal magic. Despite their fiendish appearance, tieflings are as varied as any other race, with some choosing to embrace their heritage, while others seek redemption and a different path.";
    } else if (selectedOption === "Aasimar") {
        message = "You selected the aasimar. Aasimars are celestial beings born of human ancestry, often marked by their radiant beauty and a divine purpose. They are often viewed as agents of good, with a strong connection to celestial realms and divine powers. Aasimars typically possess an aura of otherworldly grace, with golden or silver eyes and glowing features. They are often gifted with healing or radiant magic and have a natural resistance to necrotic damage. Many aasimar are chosen to be champions of good, using their divine abilities to fight against evil and protect the innocent.";
    } else if (selectedOption === "Fallen Aasimar") {
        message = "You selected the fallen aasimar. Fallen aasimar are those whose celestial bloodline has become corrupted, leading them down a darker, more twisted path. Unlike their noble cousins, fallen aasimar are often burdened with a sense of inner turmoil, struggling between their divine heritage and their darker tendencies. They are still powerful beings with celestial origins, but their connection to the divine has been tainted, often granting them powers related to shadows and darkness. Fallen aasimar are sometimes seen as tragic figures, struggling to maintain their sense of identity in the face of their corrupted nature.";
    } else if (selectedOption === "Lizardfolk") {
        message = "You selected the lizardfolk. Lizardfolk are reptilian humanoids known for their primal instincts and deep connection to the swamps and marshes where they make their homes. Lizardfolk are physically powerful and have a natural affinity for survival in harsh environments. Their tough scales provide natural armor, and they are skilled hunters, often using weapons like spears, shields, and bows. Lizardfolk have little concept of good or evil, operating instead on survival instincts and the need to protect their tribe. They are highly capable combatants and hunters, often driven by a sense of duty to their people.";
    } else if (selectedOption === "Tabaxi") {
        message = "You selected the tabaxi. Tabaxi are a race of feline humanoids known for their agility, curiosity, and love of exploration. With their cat-like features, including fur, sharp claws, and keen senses, tabaxi are excellent hunters, trackers, and acrobats. They are known for their adventurous spirit, often roaming the world in search of new experiences and treasures. Tabaxi value stories and often collect tales from their travels, making them excellent bards and performers. In combat, they rely on speed, stealth, and agility, using their natural claws and quick reflexes to overwhelm opponents.";
    } else if (selectedOption === "Bugbear") {
        message = "You selected the bugbear. Bugbears are large, brutish goblinoids known for their incredible strength, stealth, and violent nature. Standing over 7 feet tall, bugbears are powerful fighters who excel in ambush tactics and surprise attacks. Despite their intimidating appearance, bugbears can be surprisingly stealthy, using their size and agility to sneak up on unsuspecting enemies. They are often mercenaries, working for whoever can pay their price, and they have a natural ability to inflict terror in combat. Bugbears are known for their viciousness and their relentless pursuit of their goals.";
    } else if (selectedOption === "Orc") {
        message = "You selected the orc. Orcs are a fierce, warlike race known for their strength and their tendency to live in tribal societies. Orcs stand taller than most other races, with muscular builds and a propensity for violence and conflict. They are highly skilled warriors, often wielding massive weapons like greataxes and greatswords. Orcs have a strong warrior culture, and many of them are driven by the desire for power, conquest, or honor. While orcs are often seen as barbaric, they have a deep sense of loyalty to their tribes and families, and many orcs choose to become adventurers in search of glory.";
    } else if (selectedOption === "Kobold") {
        message = "You selected the kobold. Kobolds are small, reptilian creatures known for their cunning and craftiness. Standing about 2 to 3 feet tall, kobolds are often found in underground lairs, where they dig tunnels and create traps. They are highly intelligent and have a knack for creating elaborate devices, often using their ingenuity to outsmart opponents rather than engage in direct combat. Kobolds are notorious for their tendency to swarm in large numbers, overwhelming foes through sheer numbers and their clever tactics. Despite their small stature, kobolds are dangerous due to their resourcefulness and trap-making skills.";
    } else if (selectedOption === "Goblin") {
        message = "You selected the goblin. Goblins are small, green-skinned creatures known for their mischief, greed, and cunning. Often found in caves, forests, and ruins, goblins are resourceful and clever, relying on traps, ambushes, and quick thinking to survive. They are typically not strong fighters, but their speed and cleverness make them difficult to pin down. Goblins are known for their love of treasure and may often be found raiding settlements or adventurers' camps for valuables. Despite their small size and unpredictable nature, goblins can be dangerous opponents, especially when cornered.";
    } else if (selectedOption === "Tortle") {
        message = "You selected the tortle. Tortles are a race of turtle-like humanoids known for their stoic nature and their deep connection to the natural world. Standing around 5 to 6 feet tall, tortles have sturdy, armored shells that provide excellent protection in combat. They are known for their calm demeanor, patient outlook on life, and their affinity for nature and the sea. Tortles are often found as hermits, wandering the world in search of peace, wisdom, or adventure. They are highly resilient and adaptable, using their shells for defense and relying on their martial prowess to defend themselves when needed.";
    } else if (selectedOption === "Centaur") {
        message = "You selected the centaur. Centaurs are a race of half-human, half-horse creatures known for their strength, speed, and connection to the wild. Standing over 7 feet tall, centaurs are powerful, with the lower bodies of horses and the upper torsos of humans. They are skilled hunters, archers, and warriors, and they often live in open plains or forests, far from civilization. Centaurs value freedom and the natural world, and they tend to have a strong sense of honor and community. Their speed and mobility make them excellent in both combat and travel, and they are often called upon to protect the wilds from encroaching threats.";
    } else if (selectedOption === "Minotaur") {
        message = "You selected the minotaur. Minotaurs are large, bull-headed humanoids known for their incredible strength and ferocity. Standing around 7 feet tall, minotaurs have the heads of bulls and the muscular bodies of humanoid warriors. They are often found in labyrinthine mazes or deep caverns, where they use their strength and keen sense of direction to navigate. Minotaurs are skilled in close combat, using massive weapons like great axes or war hammers to deal devastating blows. Despite their fearsome appearance, many minotaurs are driven by a sense of honor and seek to prove their worth in battle.";
    } else if (selectedOption === "Kitsune") {
        message = "You selected the kitsune. Kitsune are mystical fox-like humanoids known for their cunning, agility, and magical abilities. Kitsune have the ability to shape-shift, often taking the form of foxes or other creatures, and they are known for their trickery and slyness. In combat, kitsune are agile and swift, often relying on their quick reflexes and magical tricks to outmaneuver opponents. They are skilled illusionists and charmers, and many kitsune are known for their mischievous personalities. Despite their playful nature, kitsune can be powerful allies and dangerous foes when their tricks are called upon.";
    }
    alert(message); // Show the alert with the corresponding message
}

function showCAlert() {
    var dropdown = document.getElementById("class");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var message = "";
if (selectedOption === "Barbarian") {
message = "You selected the Barbarian. Barbarians are fierce warriors from the wilds, known for their primal rage and physical prowess. They are often found in remote tribes or nomadic cultures, relying on their raw strength and instinct to survive. In combat, Barbarians can enter a state of rage, granting them enhanced strength, durability, and resistance to damage. Their unyielding ferocity and endurance make them formidable opponents in battle. Barbarians typically favor simple weapons like great axes and swords, though they are also adept at using their fists and brute strength to overpower enemies. Though their social interactions may be rough, they are fiercely loyal to their tribe and allies.";
} else if (selectedOption === "Bard") {
message = "You selected the Bard. Bards are versatile spellcasters and musicians, blending magic with creativity and charm. Known for their charismatic personalities, Bards can inspire allies, manipulate emotions, and cast spells with a wide range of effects. Their talents extend beyond magic, as Bards are often skilled in various arts, including music, dance, and acting. They have access to a diverse spellcasting list and can adapt to many situations, whether through combat, persuasion, or social encounters. With their deep knowledge of lore and history, Bards also excel at supporting allies and taking on a variety of roles in a party.";
} else if (selectedOption === "Cleric") {
message = "You selected the Cleric. Clerics are holy warriors and spellcasters, devoted to the gods and their divine power. They serve as intermediaries between the mortal world and the divine, wielding divine magic to heal the wounded, protect the innocent, and smite their enemies. Clerics are often skilled in both combat and magic, making them versatile members of any adventuring party. Their abilities vary depending on their deity and domain, with some focused on healing, others on destruction, and some providing protection or guidance. Clerics are often leaders, providing wisdom and guidance to their companions.";
} else if (selectedOption === "Druid") {
message = "You selected the Druid. Druids are spellcasters who are deeply connected to nature and its forces. They can channel the magic of the natural world, transforming into animals, commanding the elements, or communing with the spirits of the wild. Druids have an inherent bond with the land, often serving as guardians of forests, rivers, and other natural places. Their shape-shifting ability allows them to assume the form of various animals, gaining unique abilities in each form. Druids also have powerful healing magic and nature-based spells, making them indispensable in both combat and exploration.";
} else if (selectedOption === "Fighter") {
message = "You selected the Fighter. Fighters are masters of martial combat, excelling with a wide variety of weapons and armor. They are highly skilled in physical combat, using their strength, dexterity, and tactics to defeat their enemies. Fighters are often well-rounded in battle, capable of both dealing and absorbing damage. Depending on their chosen fighting style, they can focus on offense, defense, or a balance of both. Fighters are versatile, able to take on many different roles, whether as frontline tanks, damage dealers, or strategic commanders in battle.";
} else if (selectedOption === "Monk") {
message = "You selected the Monk. Monks are martial artists who harness the power of their bodies and minds to perform incredible feats of agility, speed, and strength. They are trained in ancient traditions, often using unarmed combat and the manipulation of their own ki (life energy) to enhance their abilities. Monks are known for their exceptional mobility, able to move quickly across the battlefield and strike with precision and devastating force. They also possess a unique ability to heal and deflect attacks, making them both offensive and defensive specialists in combat.";
} else if (selectedOption === "Paladin") {
message = "You selected the Paladin. Paladins are holy knights, warriors of faith who serve the forces of good and righteousness. They are known for their unwavering commitment to their cause, their ability to heal the wounded, and their fearsome ability to smite evil. Paladins possess divine powers granted by their deity, which they use to protect the innocent, destroy evil, and inspire their allies. They are also highly skilled in combat, often wielding heavy armor and weapons with great proficiency. Paladins take an oath to uphold a specific code of conduct, which guides their actions and decisions.";
} else if (selectedOption === "Ranger") {
message = "You selected the Ranger. Rangers are expert trackers, hunters, and survivalists, often at home in the wilderness. They excel in ranged combat, using bows and crossbows, but are also proficient in melee combat when necessary. Rangers have a deep connection to nature and the animals around them, often having animal companions to aid them in battle. They are skilled in survival, able to find food, shelter, and navigate difficult terrain. Rangers also have access to nature-based magic, allowing them to manipulate the environment, heal wounds, and enhance their abilities.";
} else if (selectedOption === "Rogue") {
message = "You selected the Rogue. Rogues are stealthy, cunning, and versatile adventurers, excelling in tasks that require finesse and quick thinking. They are often found in shadowy corners, using their skills in stealth, sleight of hand, and lockpicking to accomplish their goals. In combat, Rogues rely on speed and precision, striking when the enemy least expects it. They can deal devastating sneak attacks, targeting vulnerable areas with deadly accuracy. Rogues are also highly adaptable, capable of fitting into many roles, whether as scouts, thieves, or infiltrators.";
} else if (selectedOption === "Sorcerer") {
message = "You selected the Sorcerer. Sorcerers are innate spellcasters, drawing their power from within rather than from study or prayer. Their magic is often a part of their heritage, with bloodlines tied to dragons, fey, or other magical creatures. Sorcerers have access to powerful spells, and their magic is often more spontaneous and unpredictable than that of other spellcasters. They can manipulate the forces of magic in unique ways, with abilities like metamagic, allowing them to alter spells on the fly. Sorcerers are often more focused on offensive magic and can unleash devastating spells with overwhelming force.";
} else if (selectedOption === "Warlock") {
message = "You selected the Warlock. Warlocks are spellcasters who have entered into pacts with powerful, often otherworldly beings, such as fiends, fey, or eldritch entities. In exchange for power, Warlocks are granted access to a limited set of spells and abilities that reflect their patron’s nature. Warlocks often have a mysterious and somewhat dangerous aura, as they are bound to their patron's whims. They can cast a variety of spells, typically focused on curses, manipulation, and dark magic. Their unique pact abilities, such as invocations, allow them to customize their magical powers.";
} else if (selectedOption === "Wizard") {
message = "You selected the Wizard. Wizards are master spellcasters who dedicate their lives to studying the arcane arts. They learn their magic through rigorous study, unlocking the secrets of the universe by reading ancient tomes and experimenting with magical forces. Wizards have a vast array of spells at their disposal, making them extremely versatile. Their magic covers everything from elemental destruction to illusion and transmutation. Though physically weak, Wizards are powerful tacticians, using their intelligence and spellcraft to solve problems and defeat enemies from a distance.";
} 
alert(message);
}
function rollButtons() {
const xReg = /X\((.*?)\)/;
const yReg = /Y\((.*?)\)/;
const zReg = /Z\((.*?)\)/;
// positive lookbehind not supported in all browsers
// (?<=Z\()[0-9]+
let rollBtn = document.querySelectorAll('.roll-button');
rollBtn.forEach((button) => {
button.addEventListener('click', () => {
const deg = 360;
// check if element is one that is already rotated on the X axis by default
if( button.classList.contains('octa') || button.classList.contains('pentrap') || button.classList.contains('icosa')) {
rotate(button,'Z',zReg,deg);
} else {
rotate(button,'Y',yReg,deg);
}
const min = button.getAttribute('data-min');
const max = button.getAttribute('data-max');
const parent = button.parentElement;
const dice = Number(parent.parentElement.querySelector('.dice-num').value);
const mod = Number(parent.parentElement.querySelector('.modifier').value);

const outcome = parent.parentElement.querySelector('.outcome');
//console.log(`min: ${min}, max: ${max}, dice: ${dice}, mod: ${mod}`);
// roll(min value, max value, number of dice, modifier)
console.log( roll(min, max, dice, mod) );

setTimeout(() => {
outcome.innerText = roll(min, max, dice, mod);
}, 900);
});
});
}
rollButtons();

// random inclusive number function
function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// dice rolll function
function roll(min, max, dice, mod) {
let num = [];
let i = 0;
do {
i = i + 1;
num.push(getRandomIntInclusive(min, max));
} while (i < dice);
const sum = (num.reduce((partialSum, a) => partialSum + a, 0)) + mod;
//console.log(num);
//console.log(sum);
return sum;
}

// rotate function
function rotate(element,axis,reg,degree) {
if( element.style.transform === '' ) {
element.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
}
const transform = element.style.transform;
//need to get current value
let currentDegree = transform.match(reg);
currentDegree = Number(currentDegree[0].match( /[0-9]+/ ));
const deg = degree + currentDegree;
element.style.transform = transform.replace(reg, `${axis}(${deg}deg)`);
}

// number increment function
function numberIncrements() {
const numMinus = document.querySelectorAll('.num-minus');
const numPlus = document.querySelectorAll('.num-plus');

numMinus.forEach((button) => {
button.addEventListener('click', function() {
const input = this.parentElement.querySelector('.num');
input.value--;
});
});

numPlus.forEach((button) => {
button.addEventListener('click', function() {
const input = this.parentElement.querySelector('.num');
input.value++;
});
});
}
numberIncrements();
const proficiencyBonus = 2;

document.getElementById("generateCharacterBtn").addEventListener("click", generateCharacterSheet);
document.getElementById("rollStatsBtn").addEventListener("click", rollStats);
document.getElementById("generateCharacterBtn").addEventListener("touchstart", generateCharacterSheet);
document.getElementById("rollStatsBtn").addEventListener("touchstart", rollStats);
document.getElementById("race").addEventListener("change", applyRacialModifiers);
;

function calculateModifier(score) {
return Math.floor((score - 10) / 2);
}

function updateModifiers() {
const stats = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
stats.forEach(stat => {
const score = parseInt(document.getElementById(stat + "Display").textContent);
const mod = calculateModifier(score);
const modDisplay = (mod >= 0 ? "+" : "") + mod;
document.getElementById(stat + "Mod").textContent = modDisplay;
});
}

function rollStats() {
const stats = [];

while (stats.length < 6) {
const rolls = [];
for (let j = 0; j < 4; j++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
}
rolls.sort((a, b) => a - b);
rolls.shift(); // Remove the lowest roll
const stat = rolls.reduce((a, b) => a + b, 0); // Sum the remaining three rolls

// Only add the stat if it is between 8 and 17
if (stat >= 8 && stat <= 17) {
    stats.push(stat);
}
}

// Destructure stats into specific ability scores
const [strength, dexterity, constitution, intelligence, wisdom, charisma] = stats;

// Update the DOM with the stats
document.getElementById("strengthDisplay").textContent = strength;
document.getElementById("dexterityDisplay").textContent = dexterity;
document.getElementById("constitutionDisplay").textContent = constitution;
document.getElementById("intelligenceDisplay").textContent = intelligence;
document.getElementById("wisdomDisplay").textContent = wisdom;
document.getElementById("charismaDisplay").textContent = charisma;

updateModifiers();

makeStatsEditable();

applyRacialModifiers();
}

document.addEventListener("DOMContentLoaded", function() {
var overlay = document.getElementById("overlay");
setTimeout(function() {
overlay.style.display = "none";
document.body.style.overflow = "none"; // Re-enable scrolling
}, 5000); // 5 seconds
document.body.style.overflow = "auto"; // Re-enable scrolling
});

function makeStatsEditable() {
const stats = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
stats.forEach(stat => {
const display = document.getElementById(stat + "Display");
display.contentEditable = true;
display.style.borderBottom = "1px dashed #4A90E2";
display.style.cursor = "text";
display.addEventListener("input", () => {
    let value = parseInt(display.textContent);
    if (isNaN(value)) {
        value = 0;
        display.textContent = value;
    }
    // Update modifier
    const mod = calculateModifier(value);
    document.getElementById(stat + "Mod").textContent = (mod >= 0 ? "+" : "") + mod;

    // Re-apply racial modifiers if any stat is edited
    if (
        ["charisma", "intelligence", "wisdom", "constitution", "dexterity", "strength"].includes(stat)
    ) {
        applyRacialModifiers();
    }
});
});
}

function showSection(sectionId) {
const sections = ['characterGen', 'main', 'spellGuide'];
sections.forEach(id => {
document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
});
}

function returnButton(otherSectionId) {
const otherSections = ['characterGen', 'main', 'spellGuide'];
if (document.getElementById('main').style.display === 'none') {
otherSections.forEach(id => {
    document.getElementById(id).style.display = 'none';
});
document.getElementById('main').style.display = 'block';
}
}

function applyRacialModifiers() {
const race = document.getElementById("race").value;
const charismaDisplay = document.getElementById("charismaDisplay");
let baseCharisma = parseInt(charismaDisplay.textContent);
const intelligenceDisplay = document.getElementById("intelligenceDisplay");
let baseIntelligence = parseInt(intelligenceDisplay.textContent);
const wisdomDisplay = document.getElementById("wisdomDisplay");
let baseWisdom = parseInt(wisdomDisplay.textContent);
const constitutionDisplay = document.getElementById("constitutionDisplay");
let baseConstitution = parseInt(constitutionDisplay.textContent);
const dexterityDisplay = document.getElementById("dexterityDisplay");
let baseDexterity = parseInt(dexterityDisplay.textContent);
const strengthDisplay = document.getElementById("strengthDisplay");
let baseStrength = parseInt(strengthDisplay.textContent);

// Charisma Modifier
if (charismaDisplay.dataset.modApplied === "true") {
charismaDisplay.textContent = baseCharisma - 1;
charismaDisplay.dataset.modApplied = "false";
}

if (["Human", "Dragonborn", "Tabaxi", "Eladrin", "Dark Elf"].includes(race)) {
charismaDisplay.textContent = baseCharisma + 1;
charismaDisplay.dataset.modApplied = "true";

if (["Half-Elf", "Aasimar", "Kitsune"].includes(race)) {
    charismaDisplay.textContent = baseCharisma + 2;
    charismaDisplay.dataset.modApplied = "true";
}
}

const charismaMod = calculateModifier(parseInt(charismaDisplay.textContent));
document.getElementById("charismaMod").textContent = (charismaMod >= 0 ? "+" : "") + charismaMod;

// Intelligence Modifier
if (intelligenceDisplay.dataset.modApplied === "true") {
intelligenceDisplay.textContent = baseIntelligence - 1;
intelligenceDisplay.dataset.modApplied = "false";
}

if (["Human", "Tiefling", "Half-Orc"].includes(race)) {
intelligenceDisplay.textContent = baseIntelligence + 1;
intelligenceDisplay.dataset.modApplied = "true";

if (["Gnome", "Rock Gnome"].includes(race)) {
    intelligenceDisplay.textContent = baseIntelligence + 2;
    intelligenceDisplay.dataset.modApplied = "true";
} else if (race === "Orc") {
    intelligenceDisplay.textContent = baseIntelligence - 2;
    intelligenceDisplay.dataset.modApplied = "true";
}
}

const intelligenceMod = calculateModifier(parseInt(intelligenceDisplay.textContent));
document.getElementById("intelligenceMod").textContent = (intelligenceMod >= 0 ? "+" : "") + intelligenceMod;

// Wisdom Modifier
if (wisdomDisplay.dataset.modApplied === "true") {
wisdomDisplay.textContent = baseWisdom - 1;
wisdomDisplay.dataset.modApplied = "false";
}

if (["Human", "Tiefling", "Aasimar", "Tortle", "Lizardfolk", "Centaur"].includes(race)) {
wisdomDisplay.textContent = baseWisdom + 1;
wisdomDisplay.dataset.modApplied = "true";

if (race === "Hill Dwarf") {
    wisdomDisplay.textContent = baseWisdom + 2;
    wisdomDisplay.dataset.modApplied = "true";
}
}

const wisdomMod = calculateModifier(parseInt(wisdomDisplay.textContent));
document.getElementById("wisdomMod").textContent = (wisdomMod >= 0 ? "+" : "") + wisdomMod;

// Constitution Modifier
if (constitutionDisplay.dataset.modApplied === "true") {
constitutionDisplay.textContent = baseConstitution - 1;
constitutionDisplay.dataset.modApplied = "false";
}

if (["Halfling", "Rock Gnome", "Tiefling", "Aasimar", "Orc", "Minotaur", "Elf", "Goblin", "Human", "Half-Orc"].includes(race)) {
constitutionDisplay.textContent = baseConstitution + 1;
constitutionDisplay.dataset.modApplied = "true";

if (["Lizardfolk", "Dwarf"].includes(race)) {
    constitutionDisplay.textContent = baseConstitution + 2;
    constitutionDisplay.dataset.modApplied = "true";
}
}

const constitutionMod = calculateModifier(parseInt(constitutionDisplay.textContent));
document.getElementById("constitutionMod").textContent = (constitutionMod >= 0 ? "+" : "") + constitutionMod;

// Dexterity Modifier
if (dexterityDisplay.dataset.modApplied === "true") {
dexterityDisplay.textContent = baseDexterity - 1;
dexterityDisplay.dataset.modApplied = "false";
}

if (["Gnome", "Human", "Tiefling", "Bugbear"].includes(race)) {
dexterityDisplay.textContent = baseDexterity + 1;
dexterityDisplay.dataset.modApplied = "true";

if (["Elf", "Halfling", "Goblin", "Tabaxi"].includes(race)) {
    dexterityDisplay.textContent = baseDexterity + 2;
    dexterityDisplay.dataset.modApplied = "true";
}
}

const dexterityMod = calculateModifier(parseInt(dexterityDisplay.textContent));
document.getElementById("dexterityMod").textContent = (dexterityMod >= 0 ? "+" : "") + dexterityMod;

// Strength Modifier
if (strengthDisplay.dataset.modApplied === "true") {
strengthDisplay.textContent = baseStrength - 1;
strengthDisplay.dataset.modApplied = "false";
}

if (["Duergar", "Human", "Tiefling", "Fallen Aasimar"].includes(race)) {
strengthDisplay.textContent = baseStrength + 1;
strengthDisplay.dataset.modApplied = "true";

if (["Mountain Dwarf", "Dragonborn", "Centaur", "Half-Orc", "Bugbear", "Tortle", "Orc", "Minotaur"].includes(race)) {
    strengthDisplay.textContent = baseStrength + 2;
    strengthDisplay.dataset.modApplied = "true";

    if (race === "Kobold") {
        strengthDisplay.textContent = baseStrength - 2;
        strengthDisplay.dataset.modApplied = "true";
    }
}
}

const strengthMod = calculateModifier(parseInt(strengthDisplay.textContent));
document.getElementById("strengthMod").textContent = (strengthMod >= 0 ? "+" : "") + strengthMod;
}


const refreshBtn = document.getElementById("reloadpage");

function handleClick() {
window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
refreshBtn.addEventListener("touchstart", handleClick);

function calculateSkill(ability, proficiencyId) {
const abilityScore = parseInt(document.getElementById(ability + "Display").textContent);
const modifier = calculateModifier(abilityScore);
const isProficient = document.getElementById(proficiencyId).checked;
return modifier + (isProficient ? proficiencyBonus : 0);
}

function addDarkvision() {
const race = document.getElementById("race").value;
return (["Dwarf", "Elf", "Half-Elf", "Gnome", "Tiefling", "Half-Orc", "Aasimar", "Mountain Dwarf", 
     "Hill Dwarf", "Rock Gnome", "Eladrin", "Fallen Aasimar", "Tabaxi", 
     "Bugbear", "Orc", "Goblin"].includes(race)) ? 
"-Darkvision: 60ft" : 
"";
}

function superiorDarkvision() {
const race = document.getElementById("race").value;
return (["Duergar", "Dark Elf", "Kitsune"].includes(race)) ? 
"-Darkvision: 120ft" : 
"";

}

function languageCommon() {
const race = document.getElementById("race").value;
return (["Dwarf", "Elf", "Hill Dwarf", "Half Elf", "Gnome", "Tiefling", 
     "Half Orc", "Aasimar", "Mountain Dwarf", "Rock Gnome", "Duergar", 
     "Dark Elf", "Eladrin", "Fallen Aasimar", "Tabaxi", "Bugbear", 
     "Orc", "Goblin", "Halfling", "Human", "Dragonborn", "Lizardfolk", 
     "Kobold", "Tortle", "Centaur", "Minotaur", "Kitsune", "Avariel"].includes(race)) ? 
"- You can speak Common" : 
"";
}

function languageUndercommon() {
const race = document.getElementById("race").value;
return (["Dwarf", "Hill Dwarf", "Mountain Dwarf", "Rock Gnome", "Duergar"].includes(race)) ? 
"- You can speak Undercommon" : 
"";
}

function languageElvish() {
const race = document.getElementById("race").value;
return (["Elf", "Half Elf", "Aasimar", "Avariel", "Dark Elf", "Eladrin", "Fallen Aasimar"].includes(race)) ? 
"- You can speak Elvish" : 
"";
}

function languageDwarvish() {
const race = document.getElementById("race").value;
return (["Dwarf", "Hill Dwarf", "Gnome", "Mountain Dwarf", "Rock Gnome", "Duergar"].includes(race)) ? 
"- You can speak Dwarvish" : 
"";
}

function languageHalfling() {
const race = document.getElementById("race").value;
return (race === "Halfling") ? 
"- You can speak Halfling" : 
"";
}

function languageDraconic() {
const race = document.getElementById("race").value;
return (["Dragonborn", "Lizardfolk", "Kobold", "Kitsune"].includes(race)) ? 
"- You can speak Draconic" : 
"";
}

function languageGnomish() {
const race = document.getElementById("race").value;
return (["Gnome", "Rock Gnome"].includes(race)) ? 
"- You can speak Gnomish" : 
"";
}

function languageOrc() {
const race = document.getElementById("race").value;
return (["Half Orc", "Orc"].includes(race)) ? 
"- You can speak Orc" : 
"";
}

function languageInfernal() {
const race = document.getElementById("race").value;
return (["Tiefling", "Fallen Aasimar"].includes(race)) ? 
"- You can speak Infernal" : 
"";
}

function languageGoblin() {
const race = document.getElementById("race").value;
return (["Bugbear", "Goblin"].includes(race)) ? 
"- You can speak Goblin" : 
"";
}

function languageCelestial() {
const race = document.getElementById("race").value;
return (["Aasimar", "Fallen Aasimar"].includes(race)) ? 
"- You can speak Celestial" : 
"";
}

function languageSylvan() {
const race = document.getElementById("race").value;
return (["Aasimar", "Dark Elf", "Fallen Aasimar", "Tabaxi", "Lizardfolk", 
     "Tortle", "Centaur", "Minotaur", "Kitsune"].includes(race)) ? 
"- You can speak Sylvan" : 
"";
}

function dwarfInfo() {
const race = document.getElementById("race").value;
return (["Dwarf"].includes(race)) ?
"-Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.\n" +
"-Dwarven Combat Training: You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.\n" +
"-Stonecunning: Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.":
"";
}

function hillDwarfInfo() {
const race = document.getElementById("race").value;
return (["Hill Dwarf"].includes(race)) ?
"-Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level." : 
"";
}
function MountainDwarfInfo() {
const race = document.getElementById("race").value;
return (["Mountain Dwarf"].includes(race)) ? 
"-Dwarven Armor Training: You have proficiency with light and medium armor." : 
"";
}
function duergarInfo() {
const race = document.getElementById("race").value;
return (["Duergar"].includes(race)) ? 
"-Duergar Resilience: You have advantage on saving throws against illusions and against being charmed or paralyzed.\n" +
"-Duergar Magic: You can cast the *Enlarge/Reduce* spell on yourself once per long rest, using only the *Enlarge* option, and you can cast *Invisibility* on yourself once per long rest. Intelligence is your spellcasting ability for these spells.\n" +
"-Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.":
"";
}
function elfInfo() {
const race = document.getElementById("race").value;
return (["Elf"].includes(race)) ?
"-Keen Senses: You have proficiency in the Perception skill.\n" +
"-Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep.\n" +
"-Trance: Elves dont need to sleep. Instead, they meditate deeply, remaining semi-conscious, for 4 hours a day. (The common word for this meditation is “trance.”)":
"";
}
function darkElfInfo() {
const race = document.getElementById("race").value;
return (["Dark Elf"].includes(race)) ?
"-Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.\n" +
"-Drow Magic: You know the *Dancing Lights* cantrip. At 3rd level, you can cast *Faerie Fire* once per long rest, and at 5th level, you can cast *Darkness* once per long rest. Charisma is your spellcasting ability for these spells.":
"";
}
function avarielInfo() {
const race = document.getElementById("race").value;
return (["Avariel"].includes(race)) ?
"-Flight: You have a flying speed of 30 feet as long as you arent wearing medium or heavy armor.\n" +
"-Keen Senses: You have proficiency in the Perception skill.\n" +
"-Aerial Grace: You have advantage on Dexterity (Acrobatics) checks related to flying or aerial maneuvers.":
"";
}

function eladrinInfo() {
const race = document.getElementById("race").value;
return (["Eladrin"].includes(race)) ?
"- **Spring Eladrin**: You embody the spirit of renewal and growth. You gain the ability to bring joy and vitality to others.\n" +
"- **Summer Eladrin**: You radiate warmth and energy. You can inspire courage in your allies and deal fire damage with your Fey Step ability.\n" +
"- **Autumn Eladrin**: You represent the spirit of change and harvest. Your presence calms others, and you can charm creatures with your Fey Step.\n" +
"- **Winter Eladrin**: You exude cold and reserve. Your aura can intimidate others, and you can frighten creatures with your Fey Step ability":
"";
}

function halflingInfo() {
const race = document.getElementById("race").value;
return (["Halfling"].includes(race)) ?
"-Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.\n" +
"-Lucky: When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.\n" +
"-Brave: You have advantage on saving throws against being frightened.":
"";
}

function dragonbornInfo() {
const race = document.getElementById("race").value;
return (["Dragonborn"].includes(race)) ?
"-Draconic Ancestry: You have a special connection to a type of dragon, which determines your breath weapon and resistance.\n" +
"-Breath Weapon: You can use your action to exhale destructive energy. Your breath weapon is determined by your draconic ancestry.\n" +
"-Damage Resistance: You have resistance to the damage type associated with your draconic ancestry.\n" +
"-Dragon Fear: You can use your action to frighten creatures. This ability can only be used once per long rest.":
"";
}


function gnomeInfo() {
const race = document.getElementById("race").value;
return (["Gnome"].includes(race)) ?
"-Gnome Cunning: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\n" +
"-Artificers Lore: You have proficiency with artisans tools and can add double your proficiency bonus to checks related to them.":
"";
}

function rockGnomeInfo() {
const race = document.getElementById("race").value;
return (["Rock Gnome"].includes(race)) ?
"-Natural Illusionist: You know the *Minor Illusion* cantrip.\n" +
"-Stonecunning: You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.\n" +
"-Artificers Lore: You have proficiency with artisans tools and can add double your proficiency bonus to checks related to them.":
"";
}

function halfElfInfo() {
const race = document.getElementById("race").value;
return (["Half Elf"].includes(race)) ?
"-Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep.\n" +
"-Skill Versatility: You gain proficiency in two skills of your choice.":
"";
}
function halfOrcInfo() {
const race = document.getElementById("race").value;
return (["Half Orc"].includes(race)) ?
"-Menacing: You gain proficiency in the Intimidation skill.\n" +
"-Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.\n" +
"-Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one additional weapon damage die.":
"";
}
function tieflingInfo() {
const race = document.getElementById("race").value;
return (["Tiefling"].includes(race)) ?
       "- **Base Tiefling Traits**:\n" +
       "  - **Hellish Resistance**: You have resistance to fire damage.\n" +
       "  - **Infernal Legacy**: You know the *Thaumaturgy* cantrip. When you reach 3rd level, you can cast the *Hellish Rebuke* spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the *Darkness* spell once with this trait and regain the ability to do so when you finish a long rest.\n" +
       "  - **Fiendish Presence**: Your lineage grants you an otherworldly charm. You have proficiency in the Persuasion skill.\n\n" +
       "- **Asmodeus Tiefling**:\n" +
       "  - **Infernal Legacy**: You know the *Thaumaturgy* cantrip and, at 3rd level, you can cast *Hellish Rebuke* once per long rest.\n" +
       "  - **Fire Resistance**: You have resistance to fire damage.\n\n" +
       "- **Mephistopheles Tiefling**:\n" +
       "  - **Infernal Legacy**: You know the *Thaumaturgy* cantrip and can cast *Hellish Rebuke* and *Ice Storm* at 3rd and 5th level, respectively, once per long rest.\n" +
       "  - **Cold Resistance**: You have resistance to cold damage.\n\n" +
       "- **Zariel Tiefling**:\n" +
       "  - **Infernal Legacy**: You know the *Thaumaturgy* cantrip and can cast *Hellish Rebuke* and *Searing Smite* at 3rd and 5th level, respectively, once per long rest.\n" +
       "  - **Radiant Resistance**: You have resistance to radiant damage.\n\n" +
       "- **Fierna Tiefling**:\n" +
       "  - **Infernal Legacy**: You know the *Thaumaturgy* cantrip and can cast *Charm Person* and *Fireball* at 3rd and 5th level, respectively, once per long rest.\n" +
       "  - **Fire Resistance**: You have resistance to fire damage.\n\n" +
       "- **Belial Tiefling**:\n" +
       "  - **Infernal Legacy**: You know the *Thaumaturgy* cantrip and can cast *Disguise Self* and *Fireball* at 3rd and 5th level, respectively, once per long rest.\n" +
       "  - **Fire Resistance**: You have resistance to fire damage.":
       "";
}

function aasimarInfo() {
const race = document.getElementById("race").value;
return (["Aasimar"].includes(race)) ?
"-Celestial Resistance: You have resistance to necrotic damage and radiant damage.\n" +
"-Healing Hands: You can use your action to touch a creature and restore a number of hit points equal to your level. You can’t use this feature again until you finish a long rest.\n" +
"-Light Bearer: You know the *Light* cantrip. When you reach 3rd level, you can cast the *Lesser Restoration* spell once with this trait and regain the ability to do so when you finish a long rest.":
"";
}

function fallenAasimarInfo() {
const race = document.getElementById("race").value;
return (["Fallen Aasimar"].includes(race)) ?
       "-Celestial Resistance: You have resistance to necrotic damage and radiant damage.\n" +
       "-Healing Hands: You can use your action to touch a creature and restore a number of hit points equal to your level. You can’t use this feature again until you finish a long rest.\n" +
       "-Light Bearer: You know the *Light* cantrip. When you reach 3rd level, you can cast the *Lesser Restoration* spell once with this trait and regain the ability to do so when you finish a long rest.\n" +
       "-Necrotic Shroud: At 3rd level, you can use your action to unleash the power of your divine heritage, causing your eyes to glow and wings to sprout from your back. For 1 minute, you gain the following benefits:\n" +
       "  - You have a flying speed of 30 feet.\n" +
       "  - You can force each creature of your choice within 10 feet of you to make a Wisdom saving throw against your spell save DC. On a failed save, a creature takes 2d6 necrotic damage and is frightened of you until the end of your next turn.\n" +
       "  - You can use this feature once per long rest.":
       "";
}

function tabaxiInfo() {
const race = document.getElementById("race").value;
return (["Tabaxi"].includes(race)) ?
    "- Feline Agility: You can move with a burst of speed. You can double your speed for the turn, and you can’t do so again until you move 0 feet on one of your turns.\n" +
    "- Cats Talent: You have proficiency in the Acrobatics and Stealth skills.\n" +
    "- Claw: You have a claw attack that you can use as a natural weapon. It deals 1d4 slashing damage on a hit.":
    "";
}
function tortleInfo() {
const race = document.getElementById("race").value;
return (["Tortle"].includes(race)) ?
"- Ability Score Increase: Your Strength score increases by 1, and your Wisdom score increases by 1.\n" +
"- Armor Class: Your shell provides you with an AC of 17 (natural armor) when you are not wearing armor.\n" +
"- Hold Breath: You can hold your breath for up to 1 hour.\n" +
"- Natural Armor: When you arent wearing armor, your AC is 17 + your Dexterity modifier.":
"";
}

function orcInfo() {
const race = document.getElementById("race").value;
return (["Orc"].includes(race)) ?
"- Ability Score Increase: Your Strength score increases by 2, and your Constitution score increases by 1.\n" +
"- Aggressive: You can use a bonus action to move up to your speed toward an enemy that you can see.\n" +
"- Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.":
"";
}
function bugbearInfo() {
const race = document.getElementById("race").value;
return (["Bugbear"].includes(race)) ?
"- Ability Score Increase: Your Strength score increases by 2, and your Dexterity score increases by 1.\n" +
"- Surprise Attack: If you are hidden from a creature and hit it with an attack during your first turn, you deal an extra 2d6 damage to it.\n" +
"- Long-Limbed: When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.":
"";
}
function koboldInfo() {
const race = document.getElementById("race").value;
return (["Kobold"].includes(race)) ?
"- Pack Tactics: You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn’t incapacitated.\n" +
"- Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you or your target is in direct sunlight.":
"";
}
function goblinInfo() {
const race = document.getElementById("race").value;
return (["Goblin"].includes(race)) ?
"- Fury of the Small: When you hit a creature with an attack and it is larger than you, you can deal extra damage equal to your level.\n" +
"- Nimble Escape: You can take the Disengage or Hide action as a bonus action on each of your turns.":
"";
}

function centaurInfo() {
const race = document.getElementById("race").value;
return (["Centaur"].includes(race)) ?
"- Equine Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n" +
"- Charge: If you move at least 30 feet straight toward a target and then hit it with a melee attack on the same turn, you can deal an extra 1d8 damage to it.\n" +
"- Survivor: You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, or Survival.":
"";
}
function minotaurInfo() {
const race = document.getElementById("race").value;
return (["Minotaur"].includes(race)) ?
"- Labyrinthine Recall: You can perfectly recall any path you have traveled.\n" +
"- Horns: You can use your horns as a natural weapon. It deals 1d6 piercing damage on a hit.":
"";
}
function kitsuneInfo() {
const race = document.getElementById("race").value;
return (["Kitsune"].includes(race)) ?
"- Shapechanger: You can use your action to polymorph into a Small or Medium humanoid or back into your true form. Your statistics remain the same in each form.\n" +
"- Fox Magic: You know the *Minor Illusion* cantrip. When you reach 3rd level, you can cast *Disguise Self* once with this trait and regain the ability to do so when you finish a long rest.\n" +
"- Enhanced Reflexes: You have proficiency in the Acrobatics skill.":
"";
}

function assignSpells(className) {
const magicClasses = {
Wizard: {
    cantrips: ["Fire Bolt", "Mage Hand", "Prestidigitation", "Ray of Frost", "Light", "Shocking Grasp", "Minor Illusion", "Acid Splash"],
    spells: ["Magic Missile", "Shield", "Mage Armor", "Detect Magic", "Identify", "Burning Hands", "Feather Fall", "Thunderwave"]
},
Sorcerer: {
    cantrips: ["Fire Bolt", "Shocking Grasp", "Minor Illusion", "Ray of Frost", "Acid Splash", "Light", "Chill Touch", "Message"],
    spells: ["Magic Missile", "Chromatic Orb", "Mage Armor", "Detect Magic", "Burning Hands", "Shield", "Feather Fall", "Thunderwave"]
},
Bard: {
    cantrips: ["Vicious Mockery", "Minor Illusion", "Mage Hand", "Prestidigitation", "Dancing Lights", "Message"],
    spells: ["Healing Word", "Charm Person", "Disguise Self", "Cure Wounds", "Feather Fall", "Tasha's Hideous Laughter"]
},
Cleric: {
    cantrips: ["Guidance", "Sacred Flame", "Thaumaturgy", "Light", "Spare the Dying", "Resistance"],
    spells: ["Cure Wounds", "Bless", "Detect Magic", "Shield of Faith", "Healing Word", "Sanctuary"]
},
Druid: {
    cantrips: ["Druidcraft", "Produce Flame", "Shillelagh", "Guidance", "Resistance", "Thorn Whip"],
    spells: ["Entangle", "Cure Wounds", "Faerie Fire", "Goodberry", "Thunderwave", "Speak with Animals"]
},
Warlock: {
    cantrips: ["Eldritch Blast", "Chill Touch", "Minor Illusion", "Mage Hand", "Prestidigitation", "Friends"],
    spells: ["Hex", "Armor of Agathys", "Hellish Rebuke", "Charm Person", "Witch Bolt", "Detect Magic"]
}
};

// Check if the class is a magic user
if (magicClasses[className]) {
const { cantrips, spells } = magicClasses[className];

// Helper function to pick random items
function pickRandom(array, count) {
    const numItems = Math.min(array.length, count);
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(0, numItems);
}

const selectedCantrips = pickRandom(cantrips, 4); // Pick up to 4 cantrips
const selectedSpells = pickRandom(spells, 2);     // Pick up to 2 spells

return {
    cantrips: selectedCantrips.join(", "),
    spells: selectedSpells.join(", ")
};
} else {
// For non-magic users
return { cantrips: "Non-magic user", spells: "Non-magic user" };
}
}

function assignWeapons(className) {
const weaponClasses = {
Barbarian: {
    best: ["Greataxe", "Greatsword", "Maul", "Halberd", "Battleaxe", "Longsword", "Glaive", "Lance", "Morningstar", "Pike", "Rapier", "Warhammer"],
    simple: ["Club", "Greatclub", "Handaxe", "Javelin", "Lighthammer", "Mace", "Quarterstaff", "Sickle", "Spear"]
},
Fighter: {
    best: ["Battleaxe", "Greataxe", "Greatsword", "Glaive", "Halberd", "Longsword", "Pike", "Rapier", "Scimitar", "Warhammer"],
    simple: ["Club", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Lance", "Sickle", "Spear", "Whip", "Morningstar", "Shortsword", "Longbow"]
},
Paladin: {
    best: ["Longsword", "Battleaxe", "Warhammer", "Greatsword", "Maul", "Morningstar", "Glaive", "Halberd"],
    simple: ["Club", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Lance", "Sickle", "Spear", "Whip", "Shortsword", "Longbow"]
},
Cleric: {
    best: ["Mace", "Quarterstaff", "Warhammer", "Sling"],
    simple: ["Club", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Sickle", "Spear", "Morningstar", "Battleaxe", "Longsword", "Greatsword"]
},
Rogue: {
    best: ["Rapier", "Shortsword", "Dagger"],
    simple: ["Club", "Handaxe", "Light Hammer", "Quarterstaff", "Sickle", "Spear", "Longsword"]
},
Warlock: {
    best: ["Quarterstaff", "Dagger", "Shortbow"],
    simple: ["Club", "Greatclub", "Handaxe", "Javelin", "Lighthammer", "Mace", "Sickle", "Spear", "Dart", "Sling"]
},
Bard: {
    best: ["Quarterstaff", "Rapier", "Shortsword", "Shortbow"],
    simple: ["Club", "Greatclub", "Handaxe", "Javelin", "Lighthammer", "Mace", "Sickle", "Spear", "Dart", "Sling"]
},
Ranger: {
    best: ["Longbow", "Shortbow"],
    simple: ["Dart", "Sling", "Net", "Blowgun", "Quarterstaff", "Battleaxe", "Club", "Glaive", "Greataxe", "Greatclub", "Halberd", "Handaxe", "Javelin", "Lance", "Light Hammer", "Sickle", "Spear", "Maul", "Morningstar", "Longsword", "Greatsword", "Shortsword", "Rapier", "Whip", "Scimitar", "Warhammer"]
}
};

if (weaponClasses[className]) {
const { best, simple } = weaponClasses[className];

// Helper function to pick random items
function pickRandom(array, count) {
    // Ensure count doesn't exceed array length
    const numItems = Math.min(array.length, count);
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(0, numItems);
}

const selectedBest = pickRandom(best, 1); // Pick one primary weapon
const selectedSimple = pickRandom(simple, 2);     // Pick two secondary weapons

return {
    best: selectedBest.join(", "),
    simple: selectedSimple.join(", ")
};
} else {
// For non-weapon users
return { best: "", simple: "" };
}
}

function generateCharacterSheet() {
const name = document.getElementById("charName").value || "Unnamed Hero";
const backStory = document.getElementById("backstory").value || "You have no backstory";
const background = document.getElementById("background").value;
const alignment = document.getElementById("alignment").value;
const race = document.getElementById("race").value;
const charClass = document.getElementById("class").value;
const armorSelect = document.getElementById("armor");
const armor = armorSelect.value;
const armorAC = armorSelect.options[armorSelect.selectedIndex].getAttribute("data-ac");
const darkVisionDisplay = addDarkvision();
const superiorDarkVision = superiorDarkvision();
const commonLangDisplay = languageCommon();
const elvishLangDisplay = languageElvish();
const dwarvishLangDisplay = languageDwarvish();
const undercommonLangDisplay = languageUndercommon();
const gnomishLangDisplay = languageGnomish();
const halflingLangDisplay = languageHalfling();
const orcLangDisplay = languageOrc();
const draconicLangDisplay = languageDraconic();
const goblinLangDisplay = languageGoblin();
const infernalLangDisplay = languageInfernal();
const celestialLangDisplay = languageCelestial();
const sylvanLangDisplay = languageSylvan();
const classSelect = document.getElementById("class");
const classdie = classSelect.value;
const charHitDie = classSelect.options[classSelect.selectedIndex].getAttribute("data-dievalue");
const speedSelect = document.getElementById("race");
const speed = speedSelect.value;
const charSpeed = speedSelect.options[speedSelect.selectedIndex].getAttribute("data-speed");

// Ability scores and modifiers
const stats = {
strength: parseInt(document.getElementById("strengthDisplay").textContent),
dexterity: parseInt(document.getElementById("dexterityDisplay").textContent),
constitution: parseInt(document.getElementById("constitutionDisplay").textContent),
intelligence: parseInt(document.getElementById("intelligenceDisplay").textContent),
wisdom: parseInt(document.getElementById("wisdomDisplay").textContent),
charisma: parseInt(document.getElementById("charismaDisplay").textContent)
};

const modifiers = {
strength: calculateModifier(stats.strength),
dexterity: calculateModifier(stats.dexterity),
constitution: calculateModifier(stats.constitution),
intelligence: calculateModifier(stats.intelligence),
wisdom: calculateModifier(stats.wisdom),
charisma: calculateModifier(stats.charisma)
};

// Gather proficiency bonuses based on checked proficiencies
const proficiencies = {
strength: document.getElementById("strengthProficient").checked,
dexterity: document.getElementById("dexterityProficient").checked,
constitution: document.getElementById("constitutionProficient").checked,
intelligence: document.getElementById("intelligenceProficient").checked,
wisdom: document.getElementById("wisdomProficient").checked,
charisma: document.getElementById("charismaProficient").checked
};

// Calculate skills (based on proficiencies)
const skills = {
athletics: calculateSkill("strength", "strengthProficient"),
acrobatics: calculateSkill("dexterity", "dexterityProficient"),
sleightOfHand: calculateSkill("dexterity", "dexterityProficient"),
stealth: calculateSkill("dexterity", "dexterityProficient"),
arcana: calculateSkill("intelligence", "intelligenceProficient"),
history: calculateSkill("intelligence", "intelligenceProficient"),
investigation: calculateSkill("intelligence", "intelligenceProficient"),
nature: calculateSkill("intelligence", "intelligenceProficient"),
religion: calculateSkill("intelligence", "intelligenceProficient"),
animalHandling: calculateSkill("wisdom", "wisdomProficient"),
insight: calculateSkill("wisdom", "wisdomProficient"),
medicine: calculateSkill("wisdom", "wisdomProficient"),
perception: calculateSkill("wisdom", "wisdomProficient"),
survival: calculateSkill("wisdom", "wisdomProficient"),
deception: calculateSkill("charisma", "charismaProficient"),
intimidation: calculateSkill("charisma", "charismaProficient"),
performance: calculateSkill("charisma", "charismaProficient"),
persuasion: calculateSkill("charisma", "charismaProficient")
};

const dwarfInformation = dwarfInfo();
const hillDwarfInformation = hillDwarfInfo();
const mountainDwarfInformation = MountainDwarfInfo();
const duergarInformation = duergarInfo();
const elfInformation = elfInfo();
const darkElfInformation = darkElfInfo();
const avarielInformation = avarielInfo();
const eladrinInformation = eladrinInfo();
const halflingInformation = halflingInfo();
const dragonbornInformation = dragonbornInfo();
const gnomeInformation = gnomeInfo();
const rockGnomeInformation = rockGnomeInfo();
const halfElfInformation = halfElfInfo();
const halfOrcInformation = halfOrcInfo();
const tieflingInformation = tieflingInfo();
const aasimarInformation = aasimarInfo();
const fallenAasimarInformation = fallenAasimarInfo();
const tabaxiInformation = tabaxiInfo();
const tortleInformation = tortleInfo();
const orcInformation = orcInfo();
const bugbearInformation = bugbearInfo();
const koboldInformation = koboldInfo();
const goblinInformation = goblinInfo();
const centuarInformation = centaurInfo();
const minotarInformation = minotaurInfo();
const kitsuneInformation = kitsuneInfo();

const health = ((Number(modifiers.constitution)) + (Number(charHitDie)));

const proficiencyBonus = 2; // Set proficiency bonus here
const spellDetails = assignSpells(charClass);
const weaponDetails = assignWeapons(charClass);

const sheet = `
Character Name: ${name}
Background: ${background}
Alignment: ${alignment}
Race: ${race} | Class: ${charClass}
HP:${health}|Speed:${charSpeed}|Proficiency Bonus:+${proficiencyBonus}|AC:${armorAC}

Ability Scores:
- Strength: ${stats.strength} (${modifiers.strength >= 0 ? '+' : ''}${modifiers.strength})
- Dexterity: ${stats.dexterity} (${modifiers.dexterity >= 0 ? '+' : ''}${modifiers.dexterity})
- Constitution: ${stats.constitution} (${modifiers.constitution >= 0 ? '+' : ''}${modifiers.constitution})
- Intelligence: ${stats.intelligence} (${modifiers.intelligence >= 0 ? '+' : ''}${modifiers.intelligence})
- Wisdom: ${stats.wisdom} (${modifiers.wisdom >= 0 ? '+' : ''}${modifiers.wisdom})
- Charisma: ${stats.charisma} (${modifiers.charisma >= 0 ? '+' : ''}${modifiers.charisma})

Proficiencies: ${proficiencies.strength ? 'Strength' : ''}${proficiencies.dexterity ? ', Dexterity' : ''}${proficiencies.constitution ? ', Constitution' : ''}${proficiencies.intelligence ? ', Intelligence' : ''}${proficiencies.wisdom ? ', Wisdom' : ''}${proficiencies.charisma ? ', Charisma' : ''}

Cantrips: ${spellDetails.cantrips}
Spells: ${spellDetails.spells}

Player Hit Die: 1d${charHitDie}
Primary Weapon: ${weaponDetails.best}
Backup Weapons: ${weaponDetails.simple}

Skills:
- Athletics: ${skills.athletics}
- Acrobatics: ${skills.acrobatics}
- Sleight Of Hand: ${skills.sleightOfHand}
- Stealth: ${skills.stealth}
- Arcana: ${skills.arcana}
- History: ${skills.history}
- Investigation: ${skills.investigation}
- Nature: ${skills.nature}
- Religion: ${skills.religion}
- Animal Handling: ${skills.animalHandling}
- Insight: ${skills.insight}
- Medicine: ${skills.medicine}
- Perception: ${skills.perception}
- Survival: ${skills.survival}
- Deception: ${skills.deception}
- Intimidation: ${skills.intimidation}
- Performance: ${skills.performance}
- Persuasion: ${skills.persuasion}

Racial Abilities: ${darkVisionDisplay} ${superiorDarkVision}

Languages: ${commonLangDisplay} ${undercommonLangDisplay} ${elvishLangDisplay} ${dwarvishLangDisplay} ${draconicLangDisplay} ${halflingLangDisplay} ${gnomishLangDisplay} ${infernalLangDisplay} ${celestialLangDisplay} ${orcLangDisplay} ${goblinLangDisplay} ${sylvanLangDisplay}

Features and Traits:
${dwarfInformation} ${hillDwarfInformation} ${mountainDwarfInformation} ${duergarInformation} ${elfInformation} ${darkElfInformation} ${avarielInformation} ${eladrinInformation} ${halflingInformation} ${dragonbornInformation} ${gnomeInformation} ${rockGnomeInformation} ${halfElfInformation} ${halfOrcInformation} ${tieflingInformation} ${aasimarInformation} ${fallenAasimarInformation} ${tabaxiInformation} ${tortleInformation} ${orcInformation} ${bugbearInformation} ${koboldInformation} ${goblinInformation} ${centuarInformation} ${minotarInformation} ${kitsuneInformation}

Backstory: ${backStory}
`;

document.getElementById("characterSheet").textContent = sheet;
document.getElementById("characterSheet").classList.remove("hidden");
}
document.getElementById("downloadButton").addEventListener("click", function () {
const name = document.getElementById("charName").value || "Unnamed Hero";
const backStory = document.getElementById("backstory").value || "You have no backstory";
const background = document.getElementById("background").value;
const alignment = document.getElementById("alignment").value;
const race = document.getElementById("race").value;
const charClass = document.getElementById("class").value;
const armorSelect = document.getElementById("armor");
const armor = armorSelect.value;
const armorAC = armorSelect.options[armorSelect.selectedIndex].getAttribute("data-ac");
const darkVisionDisplay = addDarkvision();
const superiorDarkVision = superiorDarkvision();
const commonLangDisplay = languageCommon();
const elvishLangDisplay = languageElvish();
const dwarvishLangDisplay = languageDwarvish();
const undercommonLangDisplay = languageUndercommon();
const gnomishLangDisplay = languageGnomish();
const halflingLangDisplay = languageHalfling();
const orcLangDisplay = languageOrc();
const draconicLangDisplay = languageDraconic();
const goblinLangDisplay = languageGoblin();
const infernalLangDisplay = languageInfernal();
const celestialLangDisplay = languageCelestial();
const sylvanLangDisplay = languageSylvan();
const classSelect = document.getElementById("class");
const classdie = classSelect.value;
const charHitDie = classSelect.options[classSelect.selectedIndex].getAttribute("data-dievalue");
const speedSelect = document.getElementById("race");
const speed = speedSelect.value;
const charSpeed = speedSelect.options[speedSelect.selectedIndex].getAttribute("data-speed");

// Ability scores and modifiers
const stats = {
strength: parseInt(document.getElementById("strengthDisplay").textContent),
dexterity: parseInt(document.getElementById("dexterityDisplay").textContent),
constitution: parseInt(document.getElementById("constitutionDisplay").textContent),
intelligence: parseInt(document.getElementById("intelligenceDisplay").textContent),
wisdom: parseInt(document.getElementById("wisdomDisplay").textContent),
charisma: parseInt(document.getElementById("charismaDisplay").textContent)
};

const modifiers = {
strength: calculateModifier(stats.strength),
dexterity: calculateModifier(stats.dexterity),
constitution: calculateModifier(stats.constitution),
intelligence: calculateModifier(stats.intelligence),
wisdom: calculateModifier(stats.wisdom),
charisma: calculateModifier(stats.charisma)
};

// Gather proficiency bonuses based on checked proficiencies
const proficiencies = {
strength: document.getElementById("strengthProficient").checked,
dexterity: document.getElementById("dexterityProficient").checked,
constitution: document.getElementById("constitutionProficient").checked,
intelligence: document.getElementById("intelligenceProficient").checked,
wisdom: document.getElementById("wisdomProficient").checked,
charisma: document.getElementById("charismaProficient").checked
};

// Calculate skills (based on proficiencies)
const skills = {
athletics: calculateSkill("strength", "strengthProficient"),
acrobatics: calculateSkill("dexterity", "dexterityProficient"),
sleightOfHand: calculateSkill("dexterity", "dexterityProficient"),
stealth: calculateSkill("dexterity", "dexterityProficient"),
arcana: calculateSkill("intelligence", "intelligenceProficient"),
history: calculateSkill("intelligence", "intelligenceProficient"),
investigation: calculateSkill("intelligence", "intelligenceProficient"),
nature: calculateSkill("intelligence", "intelligenceProficient"),
religion: calculateSkill("intelligence", "intelligenceProficient"),
animalHandling: calculateSkill("wisdom", "wisdomProficient"),
insight: calculateSkill("wisdom", "wisdomProficient"),
medicine: calculateSkill("wisdom", "wisdomProficient"),
perception: calculateSkill("wisdom", "wisdomProficient"),
survival: calculateSkill("wisdom", "wisdomProficient"),
deception: calculateSkill("charisma", "charismaProficient"),
intimidation: calculateSkill("charisma", "charismaProficient"),
performance: calculateSkill("charisma", "charismaProficient"),
persuasion: calculateSkill("charisma", "charismaProficient")
};

const dwarfInformation = dwarfInfo();
const hillDwarfInformation = hillDwarfInfo();
const mountainDwarfInformation = MountainDwarfInfo();
const duergarInformation = duergarInfo();
const elfInformation = elfInfo();
const darkElfInformation = darkElfInfo();
const avarielInformation = avarielInfo();
const eladrinInformation = eladrinInfo();
const halflingInformation = halflingInfo();
const dragonbornInformation = dragonbornInfo();
const gnomeInformation = gnomeInfo();
const rockGnomeInformation = rockGnomeInfo();
const halfElfInformation = halfElfInfo();
const halfOrcInformation = halfOrcInfo();
const tieflingInformation = tieflingInfo();
const aasimarInformation = aasimarInfo();
const fallenAasimarInformation = fallenAasimarInfo();
const tabaxiInformation = tabaxiInfo();
const tortleInformation = tortleInfo();
const orcInformation = orcInfo();
const bugbearInformation = bugbearInfo();
const koboldInformation = koboldInfo();
const goblinInformation = goblinInfo();
const centuarInformation = centaurInfo();
const minotarInformation = minotaurInfo();
const kitsuneInformation = kitsuneInfo();

const health = ((Number(modifiers.constitution)) + (Number(charHitDie)));

const proficiencyBonus = 2; // Set proficiency bonus here
const spellDetails = assignSpells(charClass);
const weaponDetails = assignWeapons(charClass);

const contentStrengthScore = `
Strength 
${stats.strength}

(${modifiers.strength >= 0 ? '+' : ''}${modifiers.strength})
`;
const contentDexterityScore = `
Dexterity 
${stats.dexterity}

(${modifiers.dexterity >= 0 ? '+' : ''}${modifiers.dexterity})
`;
const contentConstitutionScore = `
Constitution
${stats.constitution}

(${modifiers.constitution >= 0 ? '+' : ''}${modifiers.constitution})
`;
const contentIntelligenceScore = `
Intelligence
${stats.intelligence}

(${modifiers.intelligence >= 0 ? '+' : ''}${modifiers.intelligence})
`;
const contentWisdomScore = `
Wisdom 
${stats.wisdom}

(${modifiers.wisdom >= 0 ? '+' : ''}${modifiers.wisdom})
`;
const contentCharismaScore = `
Charisma 
${stats.charisma}

(${modifiers.charisma >= 0 ? '+' : ''}${modifiers.charisma})
`;

const skillContent = `
${skills.athletics}- Athletics(str)

${skills.animalHandling}- Animal Handling(wis)

${skills.acrobatics}- Acrobatics(dex)

${skills.arcana}- Arcana(int)

${skills.deception}- Deception(cha)

${skills.history}- History(int)

${skills.investigation}- Investigation(int)

${skills.nature}- Nature(int)

${skills.religion}- Religion(int)

${skills.sleightOfHand}- Sleight Of Hand(dex)

${skills.insight}- Insight(wis)

${skills.medicine}- Medicine(wis)

${skills.perception}- Perception(wis)

${skills.survival}- Survival(wis)

${skills.stealth}- Stealth(dex)

${skills.intimidation}- Intimidation(cha)

${skills.performance}- Performance(cha)

${skills.persuasion}- Persuasion(cha)


SKILLS
`;

const attacks1 = `
Primary Weapon: \n${weaponDetails.best}

Secondary Weapon: \n${weaponDetails.simple}

Spells: \n${spellDetails.spells}

Cantrips: \n${spellDetails.cantrips}

`;

const characterTraits =`
Features&Traits:\n
${dwarfInformation} ${hillDwarfInformation} ${mountainDwarfInformation} ${duergarInformation} ${elfInformation} ${darkElfInformation} ${avarielInformation} ${eladrinInformation} ${halflingInformation} ${dragonbornInformation} ${gnomeInformation} ${rockGnomeInformation} ${halfElfInformation} ${halfOrcInformation} ${tieflingInformation} ${aasimarInformation} ${fallenAasimarInformation} ${tabaxiInformation} ${tortleInformation} ${orcInformation} ${bugbearInformation} ${koboldInformation} ${goblinInformation} ${centuarInformation} ${minotarInformation} ${kitsuneInformation}

`;

const { jsPDF } = window.jspdf;
const pdf = new jsPDF({
unit: "px",
format: "a4"
});
const margin = 20;
const pageHeight = pdf.internal.pageSize.height - margin * 2;
const pageWidth = pdf.internal.pageSize.width - margin * 2;

const x = 300;
const y = 40;
const boxWidth = 200;
const boxHeight = 265;

const lines = pdf.splitTextToSize(characterTraits, boxWidth);

pdf.setFontSize(20);

pdf.text("Name: " + name, 10, 20);

pdf.setFontSize(10);
pdf.text("Class: " + charClass, 180, 20);
pdf.text("Background: " + background, 260, 20);
pdf.text("Race: " + race, 180, 30);
pdf.text("Alignment: " + alignment, 260, 30);
pdf.text("AC: " + armorAC, 170, 50);
pdf.text(" " + skills.stealth, 205, 50);
pdf.text("Initiative", 205, 60);
pdf.text(charSpeed, 245, 50);
pdf.text("Speed", 245, 60);
pdf.rect(203, 40, 30, 30);
pdf.rect(165, 40, 30, 30);
pdf.rect(243, 40, 30, 30);
pdf.rect(165, 75, 108, 30);
pdf.text("Max HP:" + health, 205, 84);
pdf.text("Current Hit Points:", 175, 95);
pdf.rect(165, 110, 108, 30);
pdf.text("Temporary hit points:", 175, 125);
pdf.rect(165, 145, 54, 30);
pdf.text("Hit die: 1D" + charHitDie, 168, 160);

pdf.rect(219, 145, 54, 30);
pdf.text("Success", 220, 155);
pdf.ellipse(252, 153, 3, 3);
pdf.ellipse(260, 153, 3, 3);
pdf.ellipse(268, 153, 3, 3);
pdf.text("Failures", 220, 165);
pdf.ellipse(252, 163, 3, 3);
pdf.ellipse(260, 163, 3, 3);
pdf.ellipse(268, 163, 3, 3);
pdf.text("Death Saves", 223, 173);

pdf.rect(10, 40, 40, 40);
pdf.text(contentStrengthScore, 11, 43);
pdf.rect(10, 90, 40, 40);
pdf.text(contentDexterityScore, 11, 93);
pdf.rect(10, 140, 40, 40);
pdf.text(contentConstitutionScore, 11, 143);
pdf.rect(10, 190, 40, 40);
pdf.text(contentIntelligenceScore, 11, 193);
pdf.rect(10, 240, 40, 40);
pdf.text(contentWisdomScore, 11, 243);
pdf.rect(10, 290, 40, 40);
pdf.text(contentCharismaScore, 11, 293);

pdf.rect(60, 40, 20, 20);
pdf.text("" + proficiencyBonus, 70, 50);
pdf.rect(80, 42, 70, 15);
pdf.text("Proficiency Bonus", 82, 50);

pdf.rect(60, 140, 90, 270);
pdf.rect(60, 70, 90, 68);
pdf.setFontSize(8);
pdf.text("" + skillContent, 75, 140);
pdf.setFontSize(10);
pdf.text("Strength     " + skills.athletics, 65, 80);
pdf.text("Dexterity    " + skills.acrobatics, 65, 88);
pdf.text("Constitution " + skills.athletics, 65, 96);
pdf.text("Intelligence " + skills.nature, 65, 104);
pdf.text("Wisdom       " + skills.medicine, 65, 112);
pdf.text("Charisma     " + skills.performance, 65, 120);
pdf.text("SAVING THROWS", 65, 130);

const x1 = 170;
const y1 = 200;
const boxWidth1 = 140;
const boxHeight1 = 200;

const lines1 = pdf.splitTextToSize(attacks1, boxWidth1);
pdf.rect(165, 180, 108, 165);
pdf.setFontSize(8);
lines1.forEach((line1, i) => {
const lineHeight1 = 9;
const lineY1 = y1 + i * lineHeight1;
if (lineY1 > y1 + boxHeight1) return;
pdf.text(line1, x1, lineY1);
});

pdf.setFontSize(10);
pdf.rect(297, 38, 132, 305);
lines.forEach((line, i) => {
const lineHeight = 9;
const lineY = y + i * lineHeight;
if (lineY > y + boxHeight) return;
pdf.text(line, x, lineY);
});

const x2 = 167;
const y2 = 360;
const boxWidth2 = 260;
const boxHeight2 = 360;

const lines2 = pdf.splitTextToSize(backStory, boxWidth2);
pdf.setFontSize(10);
pdf.rect(165, 350, 265, 130);
lines2.forEach((line2, i) => {
const lineHeight2 = 9;
const lineY2 = y2 + i * lineHeight2;
if (lineY2 > y2 + boxHeight2) return;
pdf.text(line2, x2, lineY2);
});

pdf.save("character-sheet.pdf");
});
