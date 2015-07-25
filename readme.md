##gSchool Group Project: Roulette
<br>

I did some psuedo code, and this is how I see the process going:

1. player(s) set chips on table.
2. dealer spins wheel.
3. if one of the things the user bet on is true
4.   give them their bet x odds
5.   else take their money.

I've been focusing on #2, and I'm fairly confident we can hide the rest of wheel.js and just see it as a big function that can return the result of a spin. Lucy and I worked on the front end, and we now have a board with unique ID's for each element. Suhayl's been working on figuring out draggable/droppable so a player could actually drag the chips onto the board. <a https://jqueryui.com/draggable/> You can check out the api documents for more info, but it acts like a clickable except the event listener will fire when the chip is placed on a spot. This also somewhat replaces bet validation (sorry Ethan).

Starting list of to dos:

1. create a chip object we can add via DOM with
    chip image:
    bet amount:
    odds:
    winCondition: ie row #3 or red
2. Much needed improvements in css.
3. DOM create the rest of the board (currently only the numbers are created that way)
4. Make the chip draggable
5. Create eventlisteners for the drop functions
6. Calculate win/lose and payout amount
7. Fix css animation for wheelSpin -- Lance
8. Improve readme :-)






