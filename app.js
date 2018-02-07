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
  
  //messages asking for bobby's friendster lines
  if (message.content.startsWith(chat + 'bobby')) {
    var bobbyArray = [
      "Who cares about shooting? Let's see how good you are with your fists Hoofburger.\nOn 6/15/2003",
      "Benny, dude, I thought I told you, not every time, alright? Wait for the signal.\nOn 6/15/2003"
      "Ouch. Kicked when she's down. Ruthless... I'm proud of you my young Paduan learner.\nOn 6/07/2003",
      "Hey, dude. Much like Dr. Love here, I too, am concerned with your unfocused rage and violent energies. You need to channel that force into something more positive. Like say, being in my gang. Benny is efficient for hurting people's feelings and being annoying, but I really need in my corner is pure, dumb muscle.\nOn 5/21/2003",
      "And look at Benny here. He's small and some day one of these kids is going to TK his head off and there I'll there I'll be without an flunkie! So what do you say? Pay is 3% of all lunch money received, and all the smackdown you want to dish out.\nOn 6/22/2003",
      "I pay by the pound. And speaking of pounds, maybe you better shut up unless you want some right now.\nOn 6/22/2003",
      "Oh, I'll route something through you--my fist! hahaha!\nOn 6/22/2003",
      "Shut up, Benny.\nOn 6/22/2003",
      "Oh, good, because there's one in your foot locker right now, Boole. Ha ha ha! And I'm not going to tell you what it is!\nOn 6/11/2003",
      "No, you stupid idiot. It's a surprise.\nOn 6/13/2003",
      "Benny, seriously. You just earned yourself a four-limb indian burn.\nOn 6/15/2003",
      "What a chicken. I could take that kid easy. First step is staple that damn hat directly onto his skull. Second step--ass whooping. Third step, chicks.\nOn 6/15/2003",
      "New rule Bulgakov. Anybody so much as LOOKS at Chloe, they're psychic road kill. Got it?\nOn 6/19/2003",
      "Sorry. I've been asked to rephrase that. Let's all remember to show each other respect and not say mean things to each other.\nOn 6/20/2003",
      "Everybody should have a Benny. He takes his beatings like a man, and if you drop your change down the outhouse, he'll run down in there to get it for you, without too much resistance.\nOn 5/30/2003",
      "Oh, hey guys. Bobby Zilch here. Sorry about that friends' list thing. You know, I keep trying to add you guys, but my computer keeps saying, \"REJECTED: These jocks are lame and they suck. Cannot accept. Beep, beep beep!\" I don't know what it is. It must be some sort of computer error.\nOn 6/19/2003",
      "HA HA HA HA! Gottcha, Snagrash!\nOn 6/19/2003",
      "Benny, what's this I hear about you playing a dirty trick on Chloe? I told you, everybody's fair game but her. So lay off. Don't ask why unless you want me to give you the five good reasons I have on my right hand, which I will curl up into a fist with which to hit upon your ass. Understand rubber band? I'm the boss, applesauce.\nOn 6/19/2003",
      "Okay, I don't know what all those PBS words mean, but I'm going to assume you got my point, RE: my bossness. We clear, mr. Brains-a-Lot?\nOn 6/22/2003",
      "That is the circle of life, Simba.\nOn 6/14/2003",
      "So girls like him. Big deal. I got plenty of girls after me, and I don't have to pretend to like them to get 'em either.\nOn 6/17/2003",
      "God I hate you two so much, I can feel it in my liver. Seriously, it's producing extra bile every time I hear your voice. You're killing me.\nOn 6/19/2003",
      "P.S. That reminds me--Hedgemouth: Bobby and I want to be in the band.\nOn 6/25/2003",
      "I'm going to be taps, at your funeral, if you don't let us in your band. heh.\nOn 6/27/2003",
      "Or even better: team Take-a-Poo-on-You!\nOn 5/29/2003",
      "Give it up, lame-os. I'm not putting you on my friends list. You suck.\nOn 5/29/2003",
      "Tough titty said the kitty when the milk went dry.\nOn 5/29/2003",
      "Hey new kid. Welcome to camp. You're dead meat.\nOn 5/09/2003",
      "Nah. I'm outta here. Benny, he's all yours.\nOn 6/10/2003",
      "Heh heh heh.\nSweetwind.\nHeh heh.\nOn 6/01/2003",
      "Excellent. Now say something about their talent, quick, while that one is still stinging.\nOn 6/13/2003",
      "Not bad, not bad. Now wrap up with a cheap shot about about their appearance.\nOn 6/15/2003",
      "hm... solid. Weak ending, but all in all, a good effort.\nOn 6/16/2003"
    ];
    var bobbySelect = bobbyArray[Math.floor(Math.random()*bobbyArray.length)];
    message.channel.sendMessage('Bobby Zilch said:');
    message.channel.sendMessage(bobbySelect);
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
