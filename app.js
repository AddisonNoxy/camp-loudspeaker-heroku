const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');

client.on("ready",() => {
  console.log('I\'m Online\nI\'m Online');
});

var prefix = "camp!"
var chat = "fr!"
client.on('message', message => {
  if (!message.content.startsWith(prefix) && !message.content.startsWith(chat)) return;
  console.log('Message received!');
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong');
  } else
    
    //messages asking for j.t.'s campster lines
  if (message.content.startsWith(chat + 'jt')) {
    var jtArray = [
      "Are you guys forgetting the psychic rodeo? That's a sport!\nOn 5/13/2003",
      "Lili is a straight-shooter, and I'd trust her with my horse..\nOn 5/24/2003",
      "Well, gosh, Elka. Phoebe here is usually pretty smart about these things. Are you sure you don't need more time? I certainly like spending time with y'all, but I'd understand if you needed some time alone in the saddle.\nOn 6/5/2003",
      "Clem's a can-do fella. I like that. Just not so much around me, but from a distance.\nOn 6/2/2003",
      "I reckon Elton here's been lassoed by a certain pair of black pigtails, and hog-tied by that ol' varmint the French call L'Amour (and I'm not talking Louis L'Amour neither!).\nOn 5/26/2003",
      "Giddyup, li'l doggie! Yeeeeeee haw!!!\nOn 5/28/2003",
      "Hey, um... bobby? I'm just here because Elka, well I reckon she's my girlfriend now. And anyway she had a message for you. She's none too happy that you stole her 'About Me' section and she'd love if you'd just go ahead and take that right down. Thanks for lettin' me bend your ear, there, pardner.\nOn 6/10/2003",
      "Tarnation. And I thought my hat was important. All it protects me from is sunburn!\nOn 6/20/2003",
      "Sometimes, when I'm out on the prairie at night, and it's just me an my li'l doggy lopin' along, looking at the stars, I think of Chloe, and I says to myself, I wonder if she's up there right now? I wonder if she's made it yet? And I think if not, then maybe next year, cuz that li'l gal's got plenty of gumption. I recon she'll be up in the cool, cool yonder soon enough, why shucks.\nOn 6/14/2003",
      "Scuze me, buckkaroo, but I thought I was that there 'front person.'\nOn 6/10/2003",
      "Awful sorry about missing that there practice, Quentin. Won't happen again, you got my word.\nOn 6/23/2003",
      "That tears it. I'm out.\nOn 6/28/2003",
      "Shhhhhh! Miss Phoebe, I beg you to keep your mouth shut, if'n you don't mind.\nOn 6/20/2003",
      "You know, I couldn't hope for a better sweetheart' for my pardner Elton than this ol' gal here. She's quiet as the plains, pretty as a new saddle, and sharp as a prairie porcupine! Ain't that the plain truth? Shucks, now.\nOn 5/30/2003",
      "Howdy there li'l missy! Just thought I'd check in, see if you're riding high in the saddle again.\nOn 6/06/2003",
      "If this little one don't keep up with the herd, I'm afraid the buzzards gonna get 'im.\nOn 5/23/2003",
      "Hey, sure thing pardner!\nOn 5/29/2003",
      "Me and ol' Chops here? Shoot. We go way back. Ever since we were just knee high to a couple of tumbleweeds, he's been the Butch Cassidy to my Sundance, or vice-a-versa. We've been riding together so long, it's like we was brothers, even despite our differences. For instance, Chops is Canadian and I am not. Also, he plays the guitar while I prefer the harmonica. And still, there ain't nobody I'd rather ride shotgun for than this here cowboy. I tip my 10 gallon to you, sir.\nOn 5/23/2003",
      "Well, traditionally the one playing the harmonica is the leader of the band, so how about J.T. Hoofburger's Wild West posse?\nOn 6/20/2003",
      "I don't know what this talk is all about chops. Elka here is a nice girl, but she's duller than ditchwater and I'm getting a little tired of her takin' up all my time. The posse is still just you and me. Always has been, always will be, and no fast-talkin' filly is gonna change that.\nOn 6/20/2003"
    ];
    var jtSelect = jtArray[Math.floor(Math.random()*jtArray.length)];
    message.channel.sendMessage('James Theodore Hoofburger said:');
    message.channel.sendMessage(jtSelect);
  }
  
    //messages asking for franke's friendster lines
  if (message.content.startsWith(chat + 'franke')) {
    var frankeArray = [
      "Hey, cowboy! I love your hat. What do I have to do to wear it for a day, eh pardner?\nOn 6/11/2003",
      ">:O!\nOn 6/11/2003",
      "Hey, those shoes were a PRESCRIPTION from a DOCTOR, jerk!\nOn 6/13/2003",
      "Dood, give it up, bro. She doesn't even know you're alive. You do NOT make her go, \"Huh!\" If anything, you make her go, \"ZZZzzz.\" You have got to move on. Somewhere out there is a really strange girl who is perfect for you and your freakiness. But seriously, you're embarrassing yourself here. It's sad. It's hard to watch.\nOn 5/26/2003",
      "Oh, it's private, but it's between you and yourself, not you and \"Ms. Zanotto.\" (hee hee). But hey, whateva. I was just trying to save you some time Romeo. Keep typing. The whole girls' cabin is having a blast reading this!\nOn 5/26/2003",
      "Ah ha ha ha! Oh, man. I want to stop watching, but I can't!\nOn 5/27/2003",
      "Beyyotch, that's my boyfriend your talking about. ;)\nOn 5/17/2003",
      "Uh, hang on there, Vern. I uh.. i meant \"future boyfriend\" like when we're older? And I'm a woman, and can give myself to you fully?  Like maybe... after you finish doing my boathouse cleaning chores for me?\nOn 5/17/2003",
      "Oh, Vernon knows I'm not fast. Right Vernon? He doesn't want that kind of girl, does he?\nOn 5/30/2003",
      "Man, why don't you just get married and get a barbie doll dream house together already?\nOn 6/14/2003",
      "Yo Swamp Monster. My homework done yet?\nOn 6/17/2003",
      "No, I'm seeing it too. He's got a hot little nose..\nOn 6/05/2003",
      "Dude, that was-- oh never mind.\nOn 6/07/2003",
      "Rrrrrrallllr!  (How do you spell that thing where you pretend to be a growling panther but all sexy style?) Rrrroowl?\n\nrrrRRrrrRRRRrrrow?\nOn 6/12/2003",
      "Elton, baby. He's got nothing on you. You're special. Do you see me asking Quentin to do my homework? No. Only you. :)\n\nP.S. Hey, where the hell IS my homework?\nOn 6/10/2003",
      "Yeah, I heard that they found you in the woods living in a tree, eating bugs, and when they brought you here you were speaking all in crazy Nell talk.\nOn 5/18/2003",
      "Were you saying, \"Hey, where are my delicious bugs?\" AHAHAHAHA.\nOn 5/18/2003",
      "Hey, Kitty. I think we should get the girls together for a little midnight skinny dip to cheer up Crystal! What do you say?\nOn 6/09/2003",
      "This girl is the foxiest psychic I know. And the coolest dresser, and she knows everything there is to know about makeup. Girlfriend, you are the Queen of Camp Whispering Rock!!\nOn 5/22/2003",
      "Just checking in with you, Baby Bubai! Stay gorgeous! <3<3!\nOn 5/27/2003",
      "Uh maybe he just likes her for the same reason we all like Kitty? Because she's rad? And you're jealous?\nOn 6/07/2003",
      "Hm, no people who can roll their tongue into a tube are definitely better.\nOn 6/14/2003",
      "In summary, Kitty's the best. Agreed?\nOn 6/19/2003",
      "Heh heh. Yeah, come on. You know you like it.\nOn 5/15/2003",
      "Hey, Maloof you'll still come over right? Except I don't think we have a dress big enough for your friend. He'll have to wear a mu mu.\nOn 6/14/2003",
      "Yeah! I've been practicing my Girl From Ipanema thing....\nOn 6/03/2003"
    ];
    var frankeSelect = frankeArray[Math.floor(Math.random()*frankeArray.length)];
    message.channel.sendMessage('Franke Athens said:');
    message.channel.sendMessage(frankeSelect);
  }
  
    //messages asking for nils's friendster lines
  if (message.content.startsWith(chat + 'nils')) {
    var nilsArray = [
      "J.T. I don't know what you're thinking man. But good luck, that's all I got to say.\nOn 5/29/2003",
      "Well, first we'd have to shrink your head down a couple of sizes.\nOn 6/11/2003",
      "Yeah, in the same way Franke's bitter about loosing those pediatric shoes she used to have to wear.\nOn 6/11/2003",
      "Quentin, stop messing with what could be an awesome chick fight. I have a feeling someone's going to lose a halter top in this one and I'm not going to let you mess it up.\nOn 6/01/2003",
      "Let me just say this about my ex-girlfriend Elka:\nStay away!\nNot because I'll get jealous--but for your own good. This chick is looney toons. Okay, don't say I didn't warn you.\nOn 5/26/2003",
      "Hey, guys, guys! What's the big deal about Elka and me? She has a nice body, we dated, she's nuts, it ended... what's to get over? It's all good. She's J.T's prob now.\nSo, anyway, Phoebe, what you doing later?\nOn 6/06/2003",
      "I like to play poker with Clem because he always screams \"yippie\" when he gets delt a good hand.\nYou see? And then I fold. That's how it works.\nOn 6/03/2003",
      "Elton, I have a message for you, friend: Ladies are not worth the trouble. I'm telling you. You need to relax a bit, hang with the bros some more. Bros before ho's, man!\nOn 5/27/2003",
      "Hey, go \"Fir\" it! Ha ha ha! Get it?\nBut don't say I didn't warn you...\nOn 5/28/2003",
      "(gag)\nSo, Doeg. I'll bet since you put those kitty pictures up you get a lot more messages from chicks, right? You don't have to give me any details. I just want to know if it works. Dog to dog.\nOn 6/20/2003",
      "Barge, do NOT let Elka mess with your head. It's one of her hobbies.\nOn 6/16/2003",
      "Oh, that's the other thing she's really good at. Ignoring. Neglecting.\nUntil you start dating someone else that is, then she stops ignoring you pretty quick.\nOn 6/16/2003",
      "Why hello, Ms. Love. Say, how did you get that name? Care to show me? I'll show you how we start fires where I'm from.\nOn 6/19/2003",
      "Quentin, man. Leave some of the hotties for us uncharismatic guys, will ya?\nOn 6/15/2003",
      "Hi, Milka. Hey, I know you like Quentin, or Elton, or whatever but I was wondering if you'd like to go on a walk down by the lake some time. My mom sent me some chocolate yoo-hoo that I could bring. Could be sweet. Let me know!\nOn 6/15/2003",
      "Just like you Elka. Thinking of yourself when someone else is in need.\nHey, Crystal, speaking of your needs, if you need a shoulder to cry on, why don't you try mine?\nOn 6/07/2003",
      "I'm there.\nOn 6/11/2003",
      "Kitty, I don't get your fashions, but I think underneath them all is a really fine lady. Care to show me?\nOn 6/17/2003",
      "Maloof cries a lot, but he cries pretty quietly. Usually if it's late he does it under his pillow so we can still sleep, and that's pretty cool.\nOn 6/12/2003",
      "Hey Maloof, man. I was wrong when I said you couldn't have the top bunk because you were such a bed wetter. You can totally have it. I can just sleep in my rain coat or something. Not a problem.\nOn 6/08/2003",
      "Chops, dude, when we gonna go out on the prowl my man? Hit the town, unleash ourselves on the ladies? Maybe check out what's going on at the girls' cabin? You can be my wingman.\nOn 5/29/2003",

    ];
    var nilsSelect = nilsArray[Math.floor(Math.random()*nilsArray.length)];
    message.channel.sendMessage('Nils Lutefisk said:');
    message.channel.sendMessage(nilsSelect);
  }
  
    //messages asking for lili's friendster lines
  if (message.content.startsWith(chat + 'lili')) {
    var liliArray = [
      "Franke is a li'l firecracker. There I made a testimonial. Can I go now?\nOn 5/26/2003",
      "Dogen is the nicest guy at camp. I wish I had a hat like dogen.\nOn 6/03/2003",
      "Dogen Boole:\n\nCool\nJewel.\nYule.\nRule.\n\nI win!\nOn 6/12/2003",
      "Is that good or bad, Chloe?\nOn 6/12/2003",
      "Chloe, why can't they all be like you?\nOn 6/04/2003",
      "Hey, Quentin! You finally picked a name for the band, eh? When's the first show?\nOn 5/30/2003",
      "Hey, Milka? We are totally cool. Elton is all yours babe. \nOn 6/14/2003",
      "Hey, Crystal. I just wanted you to know that if you need anything, like to talk to anyone, just let me know.\nOn 5/29/2003",
      "Kitty is cool, and she-- oh man, Kitty. Do I really have to do this? It's so dumb. Can I cancel it now? If I just don't sign on for a while will it go away?\nOn 5/24/2003",
      "When Chops plays the guitar, I almost, ALMOST like people.\nOn 5/27/2003"
    ];
    var liliSelect = liliArray[Math.floor(Math.random()*liliArray.length)];
    message.channel.sendMessage('Lili Zanotto said:');
    message.channel.sendMessage(liliSelect);
  }
  
    //messages asking for mikhail's friendster lines
  if (message.content.startsWith(chat + 'mikhail') || message.content.startsWith(chat + 'misha')) {
    var mikhailArray = [
      "Hoofburger, I would not wrestle if he were allowed to use psychic blasting. Not fair, and not good for wrestling. Without psychic blasting I think no problem. I take him out like that. Then again, as he is crowd favorite, maybe I pretend to hurt my ankle and throw match so as not to damage long range career goals.\nOn 5/30/2003",
      "Athens woman looks easy to beat. But maybe... too easy. Must be a trick. Something hidden in that hair? Could be. Animal instincts tell me she has some secret. Maybe I watch her fight someone else before I form strategy.\nOn 6/07/2003",
      "Lili has a strong mind. I like her, but I could probably take her in a fight. But most likely she would forfeit by not showing, from what I hear.\nOn 6/16/2003",
      "Doom is perfect wrestling name. But she would not be hard to beat. True, she can see the future, so she will know where every blow coming from. She could block everything. But thing is, what can she do about it? Look at those little arms! Block all she wants, Mikhail coming through! Ka-boom!\nOn 6/09/2003",
      "Another tall one. Hmmm. I'd go for the toes, hit him low, possibly use the ropes to get him airborne, and then unleash the telekeliminator. Anything to shut him up. As long as he doesn't tap in his girlfriend it should go okay.\nOn 5/29/2003",
      "Elton is smallish to medium small. Looks easy to beat. But crazy look in his eye-- may be trouble. I would try to use the element of surprise, maybe TK his hat over his eyes and then roundhouse kick to the shins.\nOn 6/16/2003",
      "This one is tall, so looks threatening. But really, he is mostly hair. So not so bad. Then again, he looks like a biter. I would try and get him from a distance, maybe burning, to take down hair first. I would need some goggle, in case he spits. Tricky one. Good match. Looking forward to it!.\nOn 6/07/2003",
      "With Boole... I forfeit. Hat could come off too easily. Uncomfortable with risk level, and head explosion concept.\nOn 6/15/2003",
      "The helmet prevents effective blows to the head, but I've never relied on those so that shouldn't be a problem. I would normally focus on the legs, because they look so puny and weak, but they are also short--strike zone very small because of this. So I think best thing to do just pick her up, throw out of ring.\nOn 6/18/2003",
      "If I wanted to win match with Benny... many options. Most fun would be to tie ears in front of face.\nOn 5/28/2003",
      "Firestarters are always so difficult. Hard to hold them down for three seconds before you are badly burned. But up against telekinesis, no match. I pick her up, dip her in a bucket of water--Phoebe now tough as wet kitten.\nOn 6/20/2003",
      "Here is Hedgemouse's fatal mistake: the scarf. It will be his undoing just like famous ballerina Isadora Duncan. So many things I could do with it. A wrestler's mind reels. I think maybe wrap it around him enough times so I could do yo-yo tricks with him. That would drive the crowd crazy. Ya, that's the ticket.\nOn 6/21/2003",
      "Milka? Tricky, as an opponent.\nSmall and weak-looking. But slippery. Disappearing and then reappearing behind. Can be annoying. My plan-- carry chalk dust into ring, throw around until I see invisible girl, then I can get my mental claw on her, and the match is mine. Saw in Chevy Chase movie.\nOn 6/19/2003",
      "This Snagrash is a sweet girl. A sad girl. In a match I would grab her by her pony tail and swing her around over head, then launch her into the crowd. Then beat my chest and growl. Doesn't work for every opponent, but girl seems small.\nOn 6/15/2003",
      "Bubai thinks I won't hit a girl. She is right, but that is only because I'm a wrestler, and we do not hit. What she needs is a big hug. Like a big bear hug, then a few spins over the head, and then a nice piledriver, and then three seconds and its over, with no hitting.\nOn 5/29/2003",
      "Silence. Nobody picks on Maloof. Everyone is done with that, and there will be no more.\nOn 5/28/2003",
      "Okay, now this should be fun. He looks small, but he has the psychic fists. Not good at picking things up like mine, but good for the punching and the hitting. Like big bear claws. He's like a little cub with the paws of a grizzly. Probably best to pull chair from audience, and hit him on back of head while he's turned away to wave at crowd.\nOn 6/18/2003"
    ];
    var mikhailSelect = mikhailArray[Math.floor(Math.random()*mikhailArray.length)];
    message.channel.sendMessage('Mikhail Bulgakov said:');
    message.channel.sendMessage(mikhailSelect);
  }

  //messages asking for clem's campster lines
  if (message.content.startsWith(chat + 'clem')) {
    var clemArray = [
      'Speck of dust?\nOn 6/17/2003',
      'From a mile away!\nOn 6/17/2003',
      'Ants suck! J.T. Rocks!\nOn 6/17/2003',
      "Yeah, it will be awesome!!!!!!!! If we get enough cheers together, maybe someone will start a sports team for us to cheer on.\nOn 6/9/2003",
      "Ah Crystal, I guess it's just not going to work. Doesn't seem like anyone here's interested in real sports--it's all mind, mind, mind!\nBut that's okay. How would you ever appreciate the sweet taste of victory if we didn't also know the constant, comforting tonic of failure?\nOn 6/17/2003",
      "That goes ditto for me!!! Double Ditto!!! OMFG!\nOn 5/21/2003",
      "Not half as good as you, Crystal! Let's go talk to Coach Oleander right now! I'll bet he'll flip over the idea! :D! Maybe even literally! :D! :D!\nOn 5/19/2003",
      "Yeah, like if we were... like killed in some freak accident or something.\nOn 6/17/2003",
      "Omg! Elton is so good at canoeing!\nOn 5/24/2003",
      "Total omg! Elton is like the MASTER of the telekinetic canoe!\nOn 5/24/2003",
      "He's so much better than me!\nOn 5/24/2003",
      "No, I'm terrible at canoeing. My dad says I'm a total idiot when it comes to canoeing. And most other things. He said he'd rather ride a seal into a pool of sharks than ride in a canoe into a lake with me. Sometimes I wonder if he's right--if I am to stupid for this world.\nOn 5/24/2003",
      "Totally. But I guess Elton's pretty stoked.\nOn 5/24/2003",
      "And his picture perfect childhood full of love and support! Yeah, Elton!\nOn 5/24/2003",
      "I wish I were special like Dogen! And I had a hat that could kill people!\on 6/18/2003",
      "But I'd only use it for good!\nOn 6/18/2003",
      "Crystal, I think he means hurting other people.\nOn 6/13/2003",
      "Hey hey hey there! That's no way to talk! We can still have a club! Just you and me! My brain hurts too! I want to die too! Sometimes. But then again sometimes I feel GGGGGGGRRRRREEEEEAAAT!!!\nOn 6/13/2003",
      "Your shirt!\nOn 6/19/2003",
      "Yeah, where did you get it? Mervyn's? Man they have the best shirts there. I gotta get my mom to take me to Mervyn's some time.\nWooo! Go Benny!\nOh, so anyhew... you're friends with Bobby, right? You know, he is the only person at camp who's not on our friends list. We're friends with EVERYONE else in camp. Super good friends in fact!\nOn 6/19/2003",
      "Don't listen to him Crystal. He's just making fun of us!\nOn 6/19/2003",
      "Crystal, there is no true way to be best friends forever in this finite universe. There is no 'forever' here. Only the world that lies beyond this one is vast enough to contain a best-friendship as infinite as ours. Maybe it is time we went there.\nOn 6/19/2003",
      "You put the YOU in Unique! You and Quentin are both winners who are decidedly different, positively popular, and outrageously outrageous!!!!\nOn 6/18/2003",
      "Yeah! Total team! With his canoeing skills and your super invisibility, together you could be like... like... Team Peek-a-boo Canoe!\nOn 5/29/2003",
      "Ha! That's great too! Bobby, where do you get your ideas?\nOn 5/29/2003",
      ">:| !!!\nOn 5/29/2003",
      "This girl is the best! What's not to like? Crystal is so cool, I don't even know why she hangs out with a piece of dirt like me. Here's some love for ya girl: <3<3<3<3!!!\nOn 5/14/2003",
      "Hey, Crystal! I just wanted you to know that I called a professional geologist and he agrees: you rock!\nGet it?\nOn 5/26/2003",
      "Hey spontaneous group activities are great!\nOn 6/14/2003",
      "OMG we have so much fun at camp! This is the best year ever! I could die now and be totally happy! I'm just saying it wouldn't be a complete tragedy if we died this year, because then we would have ended on a high note!\nOn 6/19/2003",
      "Yeah, Kitty's just more unique on the outside, where we can see it. Some of us are more unique on the inside. In our hearts!\nSome of our hearts are big, and some are small, and some of them are dark, and still, and stopped beating long ago, and yet somehow we manage to slog through this shadow puppet theater day in and day out, waiting for the merciful velvet curtain of death.\nOn 6/11/2003",
      "Three cheers for Maloof.\nHip hip hurray!\nHip hip hurray!\nHip hip-- oh forget it. He is kind of a baby.\nOn 5/23/2003",
      "Where was I? Oh yeah...\nHip hip, hurray!\nOn 6/20/2003",

    ];
    var clemSelect = clemArray[Math.floor(Math.random()*clemArray.length)];
    message.channel.sendMessage('Clem Foote said:');
    message.channel.sendMessage(clemSelect);
  }
  
  //messages asking for elton's friendster lines
  if (message.content.startsWith(chat + 'elton')) {
    var eltonArray = [
      "J.T. is the king of the psychic target range. I'm not really that good at it, but for J.T. it's like shooting fish in a barrel. (Which I would never do either because I could hear them scream.)\nOn 6/01/2003",
      "What about canoeing?\nOn 6/10/2003".
      "Yeah, but what about canoeing?\nOn 6/12/2003",
      "Doesn't anyone care about canoeing?\nOn 6/14/2003",
      "You know it's really hard, canoeing... and there's a kind of stick...\nOn 6/16/2003",
      "But canoeing is the only thing I'm really good at.\nOn 6/19/2003",
      "Hi, Lili. Just wanted to pop in and say I liked your profile. Ha, yeah. People are so dumb.\nOn 5/9/2003",
      "Hey, Lili. I noticed your profile doesn't have a picture. Here's one I took on accident. My camera must have gone of when I wasn't looking. Or something. Sorry you're head's cut off. Anyway maybe I could take a better one later? :)?\nOn 5/11/2003",
      "Hi Lili. I saw that you're picture's not up yet. You know, I could put that picture up for you, if you wanted me to. It's no problem. If you gave me the password to your account... or maybe I could guess it. Let's see, your dog back home is named Mephisto... could that be it? :) Or maybe its Martindale, your mom's maiden name?\nOn 5/13/2003",
      "Hey, you put the picture up! Great. Looks good!\nOn 5/19/2003",
      "Hey, Lili. Just wondering if you were going to the campfire tonight? It's probably going to be stupid. Coach Oleander is so ra-ra. But I heard you have to pick partners for the scavenger hunt and, so... well let me know.\nOn 5/20/2003",
      "Hey, Lili. Did you get my message about the campfire?\nOn 5/20/2003",
      "Hey, Lili. I know you like plants, and and I saw the other day that there was a whole site about psychic plants so I thought you might want to check it out:\n\nhttp://www.psychic-plants-network.com\nOn 5/22/2003",
      "Oh god, I should have read that article before I sent it to you. I didn't know it was all about sex stuff like that. GOD I'm so embarrassed. Please... uh... just... sorry.\nOn 5/22/2003",
      "Hey, are you mad? About the whole sexy plants thing? Really, I'm not a plant perv! I haven't heard back from you so I just thought I'd check. The campfire was pretty stupid, you're lucky you didn't go.\nOn 5/22/2003",
      "Hey, I just thought of something. This is pretty weird, because, like you are really into plans right? And your name IS a plant. "Lili" is a plant. Did you know that? Isn't that weird?!?\nOn 5/22/2003",
      "Hi Lili. Agent Nein missed you in class today. He called your name and when you didn't answer, I made up a story about how you had diarrhea and couldn't come to class, but then everybody started laughing and god, kids can be so immature, don't you think? Ahhhhh! >:| !!!\nAnyway, I got your homework for you. I could drop it by your cabin later, or I could just do it for you. Why don't I just do it for you, and then you can come pick it up? Let me know. I'll stay in all night, just in case you come by.\nOn 5/23/2003",
      "Well, I didn't see you last night, so I just dropped the homework off for you. Don't worry, it's not a problem.\nOn 5/24/2003",
      "Hey, I came by the girl's cabin today, and Franke wouldn't let me in because she said you were changing. And then when I came back later she said you were still changing, but it was like four hours later. So I don't know what Franke is up to but I thought you should know about it. Maybe she's trying to start rumors about you, like you're a slow dresser or something. I don't know. Want me to look into it?\nOn 5/25/2003",
      "Hey, I just realized another weird thing. If you and I got married (not like now, but like later, and anyway I don't mean for real. This is just hypothetical) if you and I got married, your name would be Lili Fir. And BOTH of those words are plants! (Seriously! A Fir is a tree. Like a \"Douglas Fir\" for example, is a very famous and popular species of tree!)  And you like plants. Don't you think that's strange? That both our names are plants? Kinda makes you go, \"Huh!\" doesn't it?\nOn 5/26/2003",
      "Sorry about that, Lili. I think *certain people* are misunderstanding my intentions here and maybe those *certain people* should just M.Y.O.B. and not eavesdrop on other peoples PRIVATE CONVERSATIONS. This is between myself and Ms. Zanotto.\nOn 5/26/2003",
      "Okay, Lili. It has become obvious to me that you and I can't have a private conversation here without comments from the peanut gallery (Gee, I wonder who I'm talking about, Franke?). So I was thinking maybe you'd want to carry on with our conversation in person? Meet me by the GPC at around 8:00 okay? I have something I want to tell you and it's kind of important.\nOn 5/26/2003",
      "Okay that must have been my fault. I'm sorry. I probably should have said, \"Meet me TONIGHT at 8:00.\" If I had been more specific maybe you would have showed up. I'm so stupid. But that's okay. I kind of felt like hanging out by myself anyway. And it was nice to sit there in the dark for a few hours, looking up at the stars. And hey, guess what? I found a constellation that looks like you! Maybe I could show it to you some other night? Anyway, sorry you couldn't make it. I know you're busy with your levitation practice.\nOn 5/27/2003",
      "Lili, I just wanted you to know that I'm not going to be sending any more messages for a while. If you care to know why, I could tell you in person. Otherwise, I just wanted to say to you (not anyone else) that I'm okay; I'm just not posting. I didn't want you to worry. I'm sorry I have to do this, but the maturity level in this forum makes it an unfortunate necessity. I'm just sorry that a few people have to make childish comments and ruin it for everybody else. Anyway, let me know if you want to meet up soon.\nOn 5/28/2003",
      "God, Lili. I didn't want you to find out this way. Yes... it's true. Milka and I have fallen in love. I don't know how it happened. Does anyone ever really know? The heart wants what it wants. I'm sorry if I hurt you, Lili. The time we spent together will always be precious to me.\nP.S. I have your last homework assignment if you want to meet me some time I can give it to you.\nOn 5/29/2003",
      "I was there. It was scary. At least Lili was not hurt.\nOn 5/17/2003",
      "Hey, Elka, I was wondering if you knew the name of the woman I'm going to marry? Does it begin with the letter L? I'm just curious.\nOn 5/27/2003",
      "Wow. You guys are kinda high energy.\nOn 5/30/2003",
      "Like this one, Lili? On my head? It used to be my dad's. He drowned.\nOn 6/03/2003",
      "Hi, Chloe. Are you sure the voices aren't fishes? Sometimes that happens, and they're fishes, trying to talk to you.\On 6/05/2003",
      "Quentin is pretty rad I guess. Girls thinks so. And girls are always right.\nOn 6/09/2003",
      "Milka, you have shown me that you're never to old to change. You saved a wretch like me. I once was lost but now I'm found. Was blind, but now I'm kissing. You are like the siren who called this old sailor to shore. The ship of my heart is dashed upon the jagged rocks of your love, in the best way. Oh, that reminds me. I found your retainer in my neckerchief.\nOn 6/20/2003",
      "Hey, so um. Everything okay there Crystal?\nOn 5/27/2003",
      "Kitty, I'm sorry but I can't do you homework anymore, cuz I'm pretty busy now doing someone else's homework. Sorry.\nOn 5/28/2003",
      "Maloof, I am so glad you are here. Now maybe I won't be the most picked on kid at camp anymore.\nOn 5/11/2003",
      "Whoa, Maloof. Where can *I* get a big Russian dude to protect me?\nOn 6/12/2003",
      "Hey, Lili. I'll bet you didn't know I play music too! I play the accordion. I mostly know sailor songs, but I just got the sheet music for that new one by that band \"50 Cent\" so maybe when I learn that I could come over and show you?\nOn 5/28/2003"
    ];
    var eltonSelect = eltonArray[Math.floor(Math.random()*eltonArray.length)];
    message.channel.sendMessage('Elton Fir said:');
    message.channel.sendMessage(eltonSelect);
  }

  if (message.content.startsWith(chat + 'bobby')) {
    var bobbyArray = [
      "Who cares about shooting? Let's see how good you are with your fists Hoofburger.\nOn 6/15/2003",
      "Benny, dude, I thought I told you, not every time, alright? Wait for the signal.\nOn 6/15/2003"
    ];
    var bobbySelect = bobbyArray[Math.floor(Math.random()*bobbyArray.length)];
    message.channel.sendMessage('Bobby Zilch said:');
    message.channel.sendMessage(bobbySelect);
  }

  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.sendMessage('bar');
  }
});

client.login(process.env.BOT_TOKEN);
