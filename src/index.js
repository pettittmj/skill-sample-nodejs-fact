

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.177de485-a17a-4df4-b716-79889e324045";

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
'The Star Wars franchise began in 1977 with the release of the film Star Wars, A New Hope.',
'The second Star Wars movie to be release was The Empire Strikes Back, which came out in 1980.',
'These original three films of the Star Wars trilogy were renamed to include the Episode four, five, and six.',
'A prequel trilogy; Episodes one, two, and three were released between 1999 and 2005.',
'All seven Star Wars films were nominated for or won Academy Awards, and combined box office revenue of nearly six and a half billion dollars, making Star Wars the fourth highest-grossing film series.',
'Star Wars also holds a Guinness World Records title for the Most successful film merchandising franchise.',
'In 2015, the total value of the Star Wars franchise was estimated at nearly forty two billion dollars.  This includes box office sales, toys and merchandise, video games, and other intellectual property.',
'In 2012, The Walt Disney Company acquired Lucasfilm for $4.06 billion and earned the distribution rights to all subsequent Star Wars films, beginning with the release of The Force Awakens in 2015.',
'20th Century Fox retains the physical distribution rights to the first two Star Wars trilogies, owning permanent rights for the original 1977 film and holding the rights to Episodes one through three and five and six until May 2020.',
'Walt Disney Studios owns digital distribution rights to all the Star Wars films, excluding A New Hope.',
'The actor who played Obi-Wan Kenobi, Alec Guiness, thought of the Star Wars films as fairy-tale rubbish.',
'Alec Guiness, the actor who played Obi-Wan Kenobi has earned over one hundred million dollars in a negotiated deal that earned him 2 percent of box office sales.',
'Harrison Ford was paid ten thousand dollars for his performance in Star Wars Episode four, A New Hope.',
'Peter Cushing, who played Grand Moff Tarkin, found his costume boots so uncomfortable that he wore slippers during many of his scenes, and insisted his feet just never be in the shots.',
'The voice of Yoda is done by Frank Oz, who also voices “Miss Piggy” from The Muppets.',
'Harrison Ford wanted Han Solo to die at the end of the Empire Strikes Back during the carbon freezing process.  His request was denied by George Lucas.',
'The Sith were originally called The Damned. But a British band with the same name debuted in 1977 forcing Lucas to change over to the word Sith in post-production.',
'The Jabba Palace sequence in Return Of The Jedi involved 42 extras, 18 principal cast members, 10 puppeteers, nine mime artists, and 90 crew members.  It took a month to film.',
'Carrie Fisher refused to use boob tape, meaning many sequences had to be reshot because of wardrobe malfunctions with a certain gold bikini.',
'All the dialogue when Han is on the console talking to some of the commanders was all ad libbed. Harrison Ford deliberately didn’t learn the lines, so that it would sound more spontaneous.',
'Emperor Palpatine was originally played by an elderly female stand-in, with chimpanzee eyes superimposed over her face to make her look creepy.',
'The sound of the TIE Fighter engines is actually the sound of an elephant call mixed with the sounds of a car driving on wet pavement.',
'Steven Spielberg made a bet with George Lucas for a percentage of the Star Wars films, which has earned him millions of dollars since.',
'While shooting the scene in the trash compactor, Mark Hamill held his breath for so long that he burst a blood vessel in the side of his face. They had to adjust framing while shooting the rest of the scene to avoid showing the injury.',
'Many of the buildings constructed to be used in shots of Tatooine are still standing in Tunisia. In fact, some of them are still used by locals.',
'Early designs for Episode threes General Grievous imagined him as a child sitting in a floating chair; an idea that Lucas threw out because he didn’t think it would be taken seriously.',
'Luke’s line, I can’t see a thing in this helmet was not scripted. Mark Hamill said this to Harrison Ford when he thought the cameras had stopped rolling. But, the filmmakers decided to leave the line in.',
'Luke Skywalker was originally going to be named Luke Starkiller, and retained the name up until the film began shooting.',
'The starship that became the Blockade Runner seen at the beginning of A New Hope was the original design for the Millennium Falcon.',
'The Jawa language is based on a sped-up version of the Zulu language.',
'The language Greedo speaks is a South American language called Quechua.',
'The bounty hunter Bossk’s clothing is a recycled spacesuit from Doctor Who.',
'Mark Hamill was in a bad car accident before filming started on The Empire Strikes Back, causing severe facial trauma. The scene in which Luke is attacked by a Wampa was added to account for the scarring on his face.',
'Yoda was originally going to played by a monkey carrying a cane and wearing a mask.',
'Yoda actually has a first name! It was never revealed in the movies, because Lucas deliberately decided to leave him with just one name to enhance the air of mystery about him. His full name was going to be Minch Yoda.',
'It took as many as ten puppeteers using both hands to operate Jabba the Hutt.',
'It took three different actors to make Darth Vader. James Earl Jones Voice, Sebastian Shaws face, and David Prowses body.',
'At one point, Return of the Jedi was going to be called Revenge of the Jedi and there were actually trailers and posters produced with the original title.',
'The cow-like creature seen grazing in the fields behind Anakin and Padmé in Attack of the Clones can be seen again as an asteroid later in the film.',
'Although Episodes four and five were big hits, the studio refused to sign for Return of the Jedi until Lucas drew out a merchandising plan that included more toy-friendly characters than Empire did.',
'All twelve members of the Jedi Council are Jedi Masters, except for Ki-Ad-Mundi, who is a Jedi Knight.',
'A total of nineteen different planets are shown throughout the films.',
'Boba Fetts face is actually visible in the original movies.  You may think you never see Boba Fetts face in the original trilogy, but the actor who played Fett, Jeremy Bulloch, did stand in for an Imperial officer at the last minute.',
'Craig Daniel, better known as James Bond 007 was the Stormtrooper that freed Rey in The Force Awakens.',
'Admiral Ackbars backstory is that he was once the slave of Grand Moff Tarkin, as well as his personal pilot.',
'Its a trap, which is arguably the most famous line in Return of the Jedi, was, incredibly, not in the screenplay. The line was scripted as Its a trick! and was later changed post-filming after a test screening.',
'Revenge of the Sith is the only film thus far that does not feature R2D2 in the final shot.',
'The Phantom Menace was the first Star Wars film to be released on DVD.',
'Every clone trooper in Revenge of the Sith is a creation of CGI. No clone costumes or helmets were manufactured for filming.',
'Revenge of the Sith featured 4 hands being cut off in the film. Anakin loses one to Obi Wan, Mace Windu loses one to Anakin and Obi-Wan cuts two of General Grievous hands off.',
'The sound of the hovering battle tanks used by the battle droids in The Phantom Menace was created by running an electric razor around a metal salad bowl and then digitally lowering the pitch.',
'Qui-Gon was actually a padawan of Count Dooku in his younger days.',
'None of the Star Wars films have credits at the beginning of them. This actually became a really big deal and meant Lucas quit various film institutions such as the Directors Guild and Stars Wars films were considered independent movies.',
'C3P0 has appeared in every Star Wars movie including Rogue One, TFA and the Clone Wars.',
'R2D2 served several masters - starting with Padme, Anakin, Bail Organa, Leia Organa, Luke Skywalker and for a time, Jabba the Hutt... In the expanded universe R2 accompanies the descendants of Luke Skywalker on many adventures.',
'The classic The first transport is away! line from Empire Strikes Back was delivered by Mark Hamill. ',
'Lord Vader’s famous theme music is known as The Imperial March and was not introduced until Empire Strikes Back.',
'Vader was actually the only Star Wars film character to lose an arm three times! And both his legs as well. Obi Wan Kenobi got 3 of his limbs in Revenge of the Sith! ',
'Darth Vader has only 12 minutes of screen time in A New Hope.',
'James Earl Jones is famed for providing the voice for Vader however he didnt do the famous breathing effect. This was done by Ben Burt placing a microphone inside the mouth piece of a breathing apparatus and recording it being used.',
'After Padme dies, she is returned to Naboo for burial - her body has been altered to make it appear like she was still pregnant - this is all part of the ruse to kept the existence of Leia and Luke a secret ',
'The furry Ewoks were a late addition to the Star Wars mythology in Jedi. Their part in the story was to be played by the Wookiees, but by the time Lucas and his production partners sat down to write Return of The Jedi, they realized that, because Chewbacca could fly the Millennium Falcon, repair the ship and operate pretty much any weapon or machine in the known universe, theyd made the Wookiees too technologically advanced for the plot.',
'The sets for The Phantom Menace were only as tall as the actors, but they didnt account for 64" Liam Neeson. They had to rebuild all the door frames for Qui-Gon Jinn, which racked up an additional $150,000 in production costs.',
'Burt Reynolds was among the top contenders to play Han Solo, along with Al Pacino, Jack Nicholson and Christopher Walken.  The part ultimately went to Harrison Ford.',
'David Prowse, the actor who portrayed Darth Vader in form, not voice, is banned from attending official Star Wars conventions because George Lucas finds him annoying.'
            ],
            SKILL_NAME: 'Lesser known Star Wars facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a Star Wars fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with young padawan?',
            STOP_MESSAGE: 'May the force be with you!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
