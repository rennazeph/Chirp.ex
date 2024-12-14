// Authors data with names and image URLs
const authors = {
    citizen1: { image: "genav1.png" },
    citizen2: { image: "genav2.png" },
    PowerServices: { image: "genav3.png" },
    PublicRoadServices: { image: "genav4.png" },
    WaterServices: { image: "genav5.png" },
    RecyclingCenter: { image: "genav6.png" },
    PublicBusSystem: { image: "genav7.png" },
    SubwayServices: { image: "genav8.png" },
    TelecomServices: { image: "genav9.png" },
};

// Chirp decks
const deck1 = [
    { chirp: "Moved in to the city. Here\'s to my fresh new start.", author: "citizen1" },
{ chirp: "This is my first day in this city. What\'s the best to visit?", author: "citizen2" },
{ chirp: "We need more fashion stores, I hate buying online for clothes.", author: "citizen1" },
{ chirp: "Work, sleep, eat, buy... there must be more to life.", author: "citizen1" },
{ chirp: "They should let me be the Major. I\'d fix everything right up.", author: "citizen2" },
{ chirp: "I think everyone should get to live somewhere nice.", author: "citizen2" },
{ chirp: "I\'m off to the hospital. I hope I don\'t see any dead people.", author: "citizen2" },
{ chirp: "Stop looking into my head.", author: "citizen2" },
{ chirp: "I have been stalking you too.", author: "citizen2" },
{ chirp: "I need a drink with a little umbrella on it.", author: "citizen1" },
{ chirp: "I am an adult now, when do olives start tasting good?", author: "citizen1" },
{ chirp: "The Major demolished my house. But at least I got a good price for it.", author: "citizen2" },
{ chirp: "Recycling garbage isn\'t enough to make rent.", author: "citizen1" },
{ chirp: "I had to grind to get this view.", author: "citizen1" },
{ chirp: "I wanna be a great artist someday.", author: "citizen1" },
{ chirp: "I am sure my boss values my hard work.", author: "citizen1" },
{ chirp: "I have always wanted to be in the construction business.", author: "citizen2" },
{ chirp: "Major should include water fountains on every corner for our dogs.", author: "citizen1" },
{ chirp: "I must lead a virtuous life in order to preserve the pureness of my soul.", author: "citizen2" },
{ chirp: "I may have ran over one of my employees this morning.", author: "citizen2" },
{ chirp: "I wonder if everyone in here would know what to do during a fire alert.", author: "citizen1" },
{ chirp: "I am now a Policeman. Like my father. and like my father\'s father.", author: "citizen1" },
{ chirp: "I do not think the Major cares enough for us to even walk on this city.", author: "citizen1" },
{ chirp: "I hope my prayers are being answered.", author: "citizen2" },
{ chirp: "Teaching is the most important job for our cities future. We should be compensated accordingly!", author: "citizen2" },
{ chirp: "I hope my roomie accepts our new dog.", author: "citizen2" },
{ chirp: "My roomie brought a new dog. It cute and all but I am not walking it!", author: "citizen1" },
{ chirp: "I wish I could tend my health easier, my boss says its impacting my job.", author: "citizen2" },
{ chirp: "I cannot believe how dirt the city is! I just saw a rat run with a pizza slice!", author: "citizen1" },
    { chirp: "What even is a loft anyway?", author: "citizen2" },
    { chirp: "I\'m glad I finally moved out. Cramped and cheap but it\'s my place now.", author: "citizen1" },
    { chirp: "Best part of living in a small apartment is how easy it is to clean!", author: "citizen1" },
    { chirp: "Who\'s the neighbour with the drums? Shut up already!", author: "citizen2" },
    { chirp: "The right size for the right buck. New place!", author: "citizen2" },
    { chirp: "Who\'s baking cookies? they smell delicious! May I have some?", author: "citizen2" },
    { chirp: "I kicked my neighbours welcome mat into the elevator pit. Oops.", author: "citizen2" },
    { chirp: "I love kicking my neighbours \"Welcome\" rugs.", author: "citizen1" },
    { chirp: "Need someone to walk your dogs? Professional Dog Walker for hire! DM for info.", author: "citizen2" },
    { chirp: "Anyone know a good Italian place around?", author: "citizen2" },
    { chirp: "Dude, it\'s just a game, do you need to scream for every goal?", author: "citizen2" },
    { chirp: "Stop screaming the goals you\'re spoiling me the game!", author: "citizen2" },
    { chirp: "Someone parked on my entrance today, had to take the bus to work.", author: "citizen2" },
    { chirp: "Settled and ready to go! Watch out world!", author: "citizen2" },
    { chirp: "My place feels too empty. Where can I get some cool art?", author: "citizen1" },
    { chirp: "I paid for my produce but forgot the bags. I can\'t go back to that supermarket ever again.", author: "citizen2" },
    { chirp: "Someone\'s car alarm has been going off for hours! Make it stop!", author: "citizen2" },
    { chirp: "My key is not working on our building\'s door. anyone elses?", author: "citizen1" },
    { chirp: "I hope I don’t get sick, I don’t even know where’s the nearest hospital.", author: "citizen2" },
    { chirp: "I just need more RydeCola, no need to go see the doc.", author: "citizen2" },
    { chirp: "Anyone selling used elementary textbooks for 3rd grade?", author: "citizen1" },
    { chirp: "I can’t find a good place to park with all these bicycles in the way!", author: "citizen1" },
    { chirp: "I’m staying late at work today. The company needs me.", author: "citizen2" },
    { chirp: "First day at my new job. Wish me luck!", author: "citizen1" },
    { chirp: "I wonder why I’m training the new guy to do the same work that I do.", author: "citizen2" },
    { chirp: "Found a coin! Lucky day!", author: "citizen2" },
    { chirp: "I lost a coin today.", author: "citizen1" },
    { chirp: "I’m ordering takeout tonight. Any recommendations?", author: "citizen2" },
    { chirp: "That squirrel looks funny.", author: "citizen1" },
    { chirp: "I hate the reception here, Why am I paying 8G for?", author: "citizen2" },
    { chirp: "I shall not step on any floor crack today.", author: "citizen1" },
    { chirp: "I haven\'t been feeling myself lately. I need a long walk.", author: "citizen2" },
    { chirp: "Some random said good morning to me today. This city is full of weirdos.", author: "citizen2" },
    { chirp: "She hasn’t texted me back but I know she will.", author: "citizen2" },
    { chirp: "He hasn’t texted me back but I know he will.", author: "citizen2" },
    { chirp: "They haven’t texted me back but I know they will.", author: "citizen2" },
    { chirp: "I do not feel ready to be an adult.", author: "citizen1" },
    { chirp: "I wish I could talk to my dog.", author: "citizen2" },
    { chirp: "I wish I could talk to my cat.", author: "citizen2" },
    { chirp: "I’m not sure if I turned off the stove before leaving this morning...", author: "citizen1" },
    { chirp: "I can’t decide what to get for breakfast.", author: "citizen2" },
    { chirp: "I can’t decide what to get for lunch.", author: "citizen2" },
    { chirp: "I can’t decide what to get for dinner.", author: "citizen1" },
    { chirp: "I must not forget to pay my credit card again.", author: "citizen1" },
    { chirp: "I just bought a new jacket. I kinda regret the colour.", author: "citizen1" },
    { chirp: "I love my new jacket. It is SO me.", author: "citizen2" },
    { chirp: "I do not like this song enough to not skip it but I do not dislike it enough to remove it.", author: "citizen2" },
    { chirp: "Road work ahead? Yeah I sure hope it does.", author: "citizen2" },
    { chirp: "Speed limits oppress our need for speed.", author: "citizen1" },
    { chirp: "In the end it is all about family.", author: "citizen1" },
    { chirp: "In the end it doesn\'t even matter.", author: "citizen1" },
    { chirp: "How do you all make whistling look so easy?", author: "citizen2" },
    { chirp: "I hate this place. My feet hurt.", author: "citizen1" },
    { chirp: "What did my father say to me? I had my headphones on and I couldn\'t hear him ?", author: "citizen2" },
    { chirp: "What a dissapointing movie. What was the hype all about?", author: "citizen1" },
    { chirp: "I wish penguins were real.", author: "citizen1" },
    { chirp: "I think I saw a chicken cross the road. I should have stopped to ask!", author: "citizen1" },
    { chirp: "So you’re telling me that a shrimp fried this rice?", author: "citizen1" },
    { chirp: "Do French call “french fries” just “fries”?", author: "citizen2" },
    { chirp: "I am going out to touch grass for a bit.", author: "citizen1" },
    { chirp: "You all need to touch grass like right now.", author: "citizen2" },
    { chirp: "I do not think my thoughts are mine.", author: "citizen1" },
    { chirp: "It would not be forbidden if it weren\'t interesting.", author: "citizen2" },
    { chirp: "My cat keeps knocking over the internet router.", author: "citizen2" },
    { chirp: "Ew, I stepped on a bug!", author: "citizen2" },
    { chirp: "How can I unhear something?", author: "citizen2" },
    { chirp: "I am definitely the funniest person alive.", author: "citizen1" },
    { chirp: "My hair isn\'t working today. I hope I do not run into anyone.", author: "citizen2" },
    { chirp: "Did you know sausages are 80% sugar?", author: "citizen1" },
    { chirp: "Another day, another dollar.", author: "citizen2" },
    { chirp: "My music taste is objectively the best.", author: "citizen2" },
    { chirp: "If there\'s toilet paper at work there\'s toilet paper at home.", author: "citizen2" },
    { chirp: "How do they milk an almond anyway?", author: "citizen1" },
    { chirp: "Crazy? I was crazy once.", author: "citizen1" },
    { chirp: "I wonder if my friends have a group chat without me.", author: "citizen1" },
    { chirp: "Apparently my first word was \"The\".", author: "citizen2" },
    { chirp: "We just need one more road and traffic will be fixed.", author: "citizen2" },
    { chirp: "No thoughts. Head empty.", author: "citizen1" },
    { chirp: "I know where to get the best croissant in the city but I\'m not telling anyone.", author: "citizen1" },
    { chirp: "I\'m an adult now. I need to start liking olives.", author: "citizen1" },
    { chirp: "I still dream about you.", author: "citizen1" },
    { chirp: "Don\'t stop dreaming just because you had a nightmare.", author: "citizen1" },
    { chirp: "The beauty you find in ordinary things is a reflection of the beauty in you.", author: "citizen1" },
    { chirp: "Nothing beats a good nap.", author: "citizen1" },
    { chirp: "I had a dream where I was a little pig living on a farm. Oink Oink Oink.", author: "citizen1" },
    { chirp: "Why longitude shaped like an orange slice?", author: "citizen1" },
    { chirp: "About to make this new movie my whole personality.", author: "citizen2" },
    { chirp: "Who would win? the sun or 3 billion lions?", author: "citizen2" },
    { chirp: "Dinner\'s Ready! Bone apple teeth!", author: "citizen1" },
    { chirp: "I just discovered I\'ve been watering a plastic plant.", author: "citizen1" },
    { chirp: "I must lead a virtuous life in order to preserve the pureness of my soul.", author: "citizen2" },
    { chirp: "I don\'t think my boss is qualified enough to be my boss.", author: "citizen2" },
    { chirp: "Risk everything. The is no point living a life if you don\'t try things.", author: "citizen2" },
    { chirp: "The city keeps changing. So should you.", author: "citizen2" },
    { chirp: "For every cup of rice, add two cups of water.", author: "citizen2" },
    { chirp: "I fear anything that thinks faster than I do.", author: "citizen1" },
];

const deck2 = [
    { chirp: "Scheduled road maintenance happening on Main Street next week. Avoid waving too hard to the workers.", author: "PublicRoadServices" },
{ chirp: "We remember our dear tourist manholes are not free to take back home. Thank you for your understanding and please visit again soon!", author: "PublicRoadServices" },
{ chirp: "We fixed the lamp post users reported made cybernetic sounds.", author: "PublicRoadServices" },
{ chirp: "Dynamic speeds are being tested on some major avenues. Scan the QR code at each stoplight to confirm the max speed of the day!", author: "PublicRoadServices" },
{ chirp: "Fixed an exploit with the parking meters involving a coin and a cord.", author: "PublicRoadServices" },
{ chirp: "Power Services invite you to turn off your TV. We know you feel lonely, background novelas aren't going to fix that.", author: "PowerServices" },
{ chirp: "Anyone caught attaching magnets on their Electricity Consumption Meter will have all their lightbulbs removed from their home as a fee.", author: "PowerServices" },
{ chirp: "Safety tip: Do not plug any cable extensor into another cable extensor.", author: "PowerServices" },
{ chirp: "If your electronic device has a little red light on at all times, it might consume a lot of energy even when it is off!", author: "PowerServices" },
{ chirp: "Powerlines kill less birds a year than airplanes. Stay home with your warmer and your family these festivities.", author: "PowerServices" },
{ chirp: "We accidentally inverted the hot and cold water this morning on all pipes. Thank you for all your reports.", author: "WaterServices" },
{ chirp: "Be sure to keep flowing. Nothing usually sticks for too long.", author: "WaterServices" },
{ chirp: "Our pipes are equipped to handle all the edible glitter included in your iced coffees. Enjoy!", author: "WaterServices" },
{ chirp: "One of our pumps may have picked up some local fauna from the river, do not worry, it's venom is not human lethal. Call us for safe relocation.", author: "WaterServices" },
{ chirp: "We're buying mattresses, drums, refrigerators, stoves, ovens, microwaves, or any other metal scrap you got! Catch the Scrap truck every Tuesday.", author: "RecyclingCenter" },
{ chirp: "Trade in a total of 5 kilos of recycling material for a miniature recycled Garbage Truck.", author: "RecyclingCenter" },
{ chirp: "Throw away that box of cables already. We both know you won't use them. Catch the electrical truck every Monday.", author: "RecyclingCenter" },
{ chirp: "Dispose of your organic waste, this include's your four legged friend's favourite trick! Catch the organic truck every Wednesdays and Sundays.", author: "RecyclingCenter" },
{ chirp: "We eat one credit card a year in microplastics. For all your normal scaled plastics, catch the plastic truck every Thursday.", author: "RecyclingCenter" },
{ chirp: "For your security, all our buses driver's are trained in multiple martial arts.", author: "PublicBusSystem" },
{ chirp: "The maximum capacity sticker is for decoration purposes only. If you can somehow fit in, we'll somehow get you where you need to go.", author: "PublicBusSystem" },
{ chirp: "Thank you for riding with us. We may risk your life, but never your punctuality.", author: "PublicBusSystem" },
{ chirp: "We hear you. Our night route will also feature a hot cocoa table to keep you warm during your trip.", author: "PublicBusSystem" },
{ chirp: "All bus drivers can have up to 2 personal decorations on their unit. The only exception goes to Bill, who just earned employee of the decade. Congratulations.", author: "PublicBusSystem" },
{ chirp: "For your punctuality all 6:00am buses will now feature an express shower section (No warm water on sundays).", author: "PublicBusSystem" },
{ chirp: "Bus Unit 76 will be retired for maintenance until we can overwatch it's funcionality.", author: "PublicBusSystem" },
{ chirp: "Looking to join the Public Transport Services? We're Hiring! DM for information. Note: Please bring your own bus to the interview.", author: "PublicBusSystem" },
{ chirp: "Dogs over 3 years old must pay a ticket. Even if they ride on your lap.", author: "PublicBusSystem" },
{ chirp: "We remind our users the bus driver has the right to determine the music and it's volume. Each seat has it's own set of earplugs for your convenience.", author: "PublicBusSystem" },
{ chirp: "We found a white plastic car seat with a baby on it. Please contact Human Services if it's yours.", author: "PublicBusSystem" },
{ chirp: "We're now open 24/7! metro lines however operate from 6:00am to midnight.", author: "SubwayServices" },
{ chirp: "Service with delays in both directions after Police removed an unauthorized surfist from the rails.", author: "SubwayServices" },
{ chirp: "Remember to chain yourself in when boarding our newly driverless trains in case of another moderate bug. Use your Mobility Card to lock/unlock your seat.", author: "SubwayServices" },
{ chirp: "We take our time. And yours. Thank you for trusting us getting you home.", author: "SubwayServices" },
{ chirp: "5 lucky winners will get free rides or the rest of the month. Look under your seat for the golden ticket now!", author: "SubwayServices" },
{ chirp: "Our newest line will cross right through the newly found ruins under the city.", author: "SubwayServices" },
{ chirp: "We now offer free Wi Fi with each ticket. Scan the QR at the front of the train to start web surfing.", author: "SubwayServices" },
{ chirp: "As for health regulations, all door and windows will remain slightly opened during all trips.", author: "SubwayServices" },
{ chirp: "The ticket machine is currently only accepting $100 bills. No change. Thank you for your understanding.", author: "SubwayServices" },
{ chirp: "Please stop DMing me and reboot your router first ok thxxx.", author: "TelecomServices" },
{ chirp: "All transactions made after midnight will be taxed for an extra 1% until we find out why only 99% of the money is going through.", author: "TelecomServices" },
{ chirp: "Please contact us for a recall if your router is blinking in the following order: Red, Yellow, Teal, Navy blue, Cyan, Orange, Magenta, Yellow, Magenta, Yellow.", author: "TelecomServices" },
{ chirp: "Girl it ain't my fault they ain't texting u back", author: "TelecomServices" },
{ chirp: "Special Offer! Complete the 15 minute survey and you may gain a free call to any celebrity from our infuencer private list.", author: "TelecomServices" },
{ chirp: "Get ready to party tonight! Hold your landline up at exactly 8:00pm for DJ's Interference concert!", author: "TelecomServices" },
{ chirp: "We're now offering 8G coverage on one more street!", author: "TelecomServices" },
{ chirp: "We're providing up to 28.8 kilobot through a 1.5 megabit fiberoptic tone line. Ask for our new Token Ring Ethernet Land configuration installation service.", author: "TelecomServices" },
{ chirp: "We have updated our Privacy Policy on your selfies cameras. You have already accepted it by reading this Chirp. Thank you for your preference.", author: "TelecomServices" },
{ chirp: "Bring your old phones to your @TELECOM recycling center and get 10% off for every 20 phones you bring. Terms and Conditions Apply.", author: "TelecomServices" },
{ chirp: "Our cloud is very safe. Your password might not be. Get our Random Password Generator and choose from up to 5000 secure passwords generated with your Chirp user", author: "TelecomServices" },
{ chirp: "We believe being heard is a human right. That's why our Unlimited Chirper package is now free, just registrer your face in our App.", author: "TelecomServices" },
{ chirp: "Our Dollar package is great for those who just want the Utility Bill.", author: "TelecomServices" },
];

// Function to display chirps
function displayRandomChirps() {
    console.log("Refreshing chirps...");

    // Shuffle both decks
    const shuffledDeck1 = deck1.sort(() => 0.5 - Math.random());
    const shuffledDeck2 = deck2.sort(() => 0.5 - Math.random());

    // Combine chirps in the specified order
    const combinedChirps = [
        shuffledDeck1[0], shuffledDeck1[1],  // First two from Deck 1
        shuffledDeck2[0], shuffledDeck2[1],  // Two from Deck 2
        shuffledDeck1[2], shuffledDeck1[3]   // Last two from Deck 1
    ];

    // Update the containers with the selected chirps
    combinedChirps.forEach((chirp, index) => {
        updateChirpContent(index + 1, chirp); // +1 for 1-based index
    });
}

// Function to update chirp content in HTML
function updateChirpContent(index, { chirp, author }) {
    const chirpContainer = document.getElementById(`chirp${index}`); // Get the correct chirp container
    const { image } = authors[author];

    // Update content
    chirpContainer.querySelector('.author').textContent = `@${author}`;
    chirpContainer.querySelector('.chirp').textContent = chirp;
    const authorImage = chirpContainer.querySelector('.author-image');
    authorImage.src = image;
    authorImage.alt = `${author}'s image`;

    // Log for debugging
    console.log(`Chirp ${index}: "${chirp}" - ${author}`);
}
// Add event listener for the refresh button
document.getElementById("refresh-button").addEventListener("click", () => {
    displayRandomChirps(); // Refresh chirps
});

// Initialize chirps on page load
displayRandomChirps();
