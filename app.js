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
    message.channel.sendMessage('James Theodore Hoofburger said:\n ' + jtSelect);
    //message.channel.sendMessage(jtSelect);
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
    message.channel.sendMessage('Franke Athens said:\n ' + frankeSelect);
    //message.channel.sendMessage(frankeSelect);
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
    message.channel.sendMessage('Nils Lutefisk said:\n ' + nilsSelect);
    //message.channel.sendMessage(nilsSelect);
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
    message.channel.sendMessage('Lili Zanotto said:\n ' + liliSelect);
    //message.channel.sendMessage(liliSelect);
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
    message.channel.sendMessage('Mikhail Bulgakov said:\n ' + mikhailSelect);
    //message.channel.sendMessage(mikhailSelect);
  }
  
    //messages asking for elka's friendster lines
  if (message.content.startsWith(chat + 'elka')) {
    var elkaArray = [
      "James here is the best boyfriend a girl could have. He's sensitive, strong, handsome, and polite. Not like some people I could name. Definitely an upgrade over my old boyfriend.\nI see a great future for us together, Nils!\nOn 5/29/2003",
      "I meant JAMES! Not Nils! Definitely not Nils! I certainly did NOT mean to... it was the spell checker, I swear!\nOn 5/29/2003",
      "Shut up, Nils. No one's talking to you.\nHey, James, I noticed you didn't have any pictures of me in your photos page. Here, I'll mail you some, JAMES.\nOn 5/29/2003",
      "Oh, you're in trouble now, Benjamin. My boyfriend James is NOT going to put up with that kind of insult. Right James?\nOn 6/02/2003",
      "Hey boyfriend, those pictures aren't up yet. What's the matter? Having a problem picking just three? You can put them all up if you want! ;) I won't mind!\nOn 6/13/2003",
      "J.T. knows that a man's first priority is his girlfriend, Chops. He doesn't always have time for childish pursuits like \"chilling\" and \"bro-ing out\" anymore.\nOn 6/21/2003",
      "I see bad things in the future for you, Mr. Sweetwind, if you don't mind your manners. ;)\nOn 6/22/2003",
      "I went out with you. I... Elka Doom... went out with you... Nils the Pig. How did that happen?\nOn 6/02/2003",
      "Okay NEWS FLASH everybody. I'm know that Nils and I were THE hot and heavy couple last year. But we are OFFICIALLY and PERMANANTLY\n\nB R O K E N   the F.  U P ! ! !\n\nYes, I know we seemed perfect for each other. I know you probably thought, \"Boy, they're going to be together forever because I'm sure Nils would do anything to keep that girl happy--he's so lucky to have her.\" But you'd be wrong! Suprise!\nWell that's the bad news. The good news is I'm OVER IT. And I'm happy to be single and looking forward to spending a long time by myself, learning who I am again, and just being okay with myself.\nP.S. Private message to Nils: \"Your loss!\"\nOn 6/03/2003",
      "Who'd have thought lightning would strike the same girl twice? Well it has. I have found something even more special than what I had with this loser.\nMy NEW boyfriend is none other than James Theodore Hoofburger. Now HE is a real man, and he knows how to treat a lady.\nSorry Charlie, I mean, Nils!\nOn 6/04/2003",
      "Just popping in to say how great everything is with James.\nIt's great!\nOn 6/05/2003",
      "Oh, Nils. What happened between us? I don't understand. I saw the future and we were together. My predictions are never wrong! For a hundred years, my family has seen the future without fail! And yet, somehow it didn't work between us. Why?\nOn 6/06/2003",
      "Okay, forget that last testimonial. I was being weak. Totally weak! I don't need Nils! The future is mine to create, and I'm to busy creating one with James to even think about Nils.\nOn 6/07/2003",
      "Oh, I just thought of something. James can ride a horse. Isn't that great? I love horses.\nOn 6/08/2003",
      "Oh, Nils. I miss you so much. Can't we just give it another chance? Please. I'll do anything. I'll change. I can change. Anything you want.\nOn 6/09/2003",
      "Ha! What a difference a day makes! I hope you didn't take that last testimonial too seriously, because I was obviously just hallucinating. Or my heart was misdirecting my feelings for James into some screwed up internal mirage of you, or something like that. Well, never you mind about it. That phase has gone, like a 24 flu.\nOn 6/10/2003",
      "Okay, I just have one question. Did I get too close? Was that it? Nils, did I pressure you in some way? Not that I care, but I'd just like to know.\nOn 6/11/2003",
      "Nils, I had a long talk just now with my mother about this and she had this whole theory about why we both push each other away. I'd love to tell you about it. It's pretty interesting.\nOn 6/12/2003",
      "You know, what you said to me today was so rude, I just want to say thank you. Thank you for reminding me why we broke up: because you're a pig.\nOn 6/13/2003",
      "Oh, Nils. I AM happy with James, but I'm just so worried about you. Are you ever going to find someone? Are you going to end up lonely? Who's going to take care of you?\nOn 6/14/2003",
      "Nils, last time I talked to your mom she asked me about that coffee cake I made for that one time, so I wrote out the recipe and put it under your pillow.\nWhile I was there, I couldn't help but notice that it smells like you changed shampoo. I don't know what you're using now, but are you sure it has enough dandruff protection for you?\nOn 6/15/2003",
      "Talking to Crystal about you and me, I had a revelation about us and our relationship. Can't wait to tell you about it.\nOn 6/16/2003",
      "Okay, Nils. You said that even though we've broken up you wanted to stay friends. Well friendships take work, and I feel like as far as this one goes, I'm the only one putting any work into it. My therapist says I'm a \"pleaser\" so it's in my nature, but I honestly don't know how much I can take. If you don't start putting more into this thing, then it's just not going to work. And I'd be extremely sad if we weren't able to salvage at least a friendship out of this.\nOn 6/17/2003",
      "Okay seriously, I'm about to stop if you don't respond.\nOn 6/18/2003",
      "I'm so mad at you right now. I'm so glad we broke up. I've written your mother another long letter about it and put it under your pillow. Please make sure she gets it.\nOn 6/19/2003",
      "Oh... Nils. Nils...\nOn 6/20/2003",
      "Clem and Crystal are an amazing couple, and I admire them for taking things slow. I hope someday to have as much in common with my boyfriend as these two.\nOn 6/15/2003",
      "Nils, I'm sure Elton doesn't need romantic advice from someone as ignorant on the topic as you! If you're doing this to get back at me, leave poor Elton out of it!\nSorry, Elton. I know you have romantic trouble enough as it is.\nOn 5/27/2003",
      "AND it makes you look real good, cowboy! That's why you're my boyfriend!\nOn 6/20/2003",
      "Chloe, okay. Nothing negative. Just girlfriend to girlfriend. I'm just worried that if you keep that helmet on your head for too long, you're going to prevent your hair from becoming as healthy and full bodied as I know it could be. If you'd like, some evening I could come over to your cabin, you could take off your helmet and I could show you some of the excellent Amway haircare products my mom sent me to show around. They really are quite good.\nOn 6/16/2003",
      "Chloe, ignore him please.\nOn 6/16/2003",
      "Well, that's okay, Phoebe. That dumb old band was taking up too much of J.T's time anyway.\nOn 6/20/2003",
      "All those times you said you were at practice...\nWhere were you?\nYou were just hiding out in the woods chewing tobacco with Sweetwind, weren't you? WEREN'T YOU? Oh, men! Men and their lies! At least I KNEW Nils was a pig.\nOh, Nils. Nils. See what you have sentenced me to?\nOn 6/20/2003",
      "Nice try. You're not going to make me jealous this time. Milka is totally in love with Elton now. God, when are you going to get over me?\nAnd Yoo-Hoo Nils? Really? Now you're just trying to be mean. You KNOW how much I love You-hoo!\nOn 6/16/2003",
      "Crap. I meant YOO-hoo.\nOn 6/17/2003",
      "Crystal, we HAVE to talk. You will not believe what Nils just said to me. I just can't figure out where his intimacy issues are coming from. Why does this always happen to ME? Anyway, lets get together soon.\nOn 6/06/2003",
      "I will say this for Kitty. Her clothes are... unique.\nOn 6/09/2003",
      "God, Nils you make me so sick some times. What the emoticon for barfing?  :O===?\nOn 6/18/2003",
      "Maloof is such a sweet little thing. He's just so little and cute I want to pick him up and be mean to him!\nOn 5/26/2003",
      "I meant hug! I want to pick him up and hug him!\nOn 5/27/2003",
      "I was always nice to Maloof! You remember that, right Maloof? Right??\nOn 6/02/2003",
      "Melvin, you know that song \"Puff the Magic Dragon?\" And how Jackie Paper had to learn how to let go of his favorite plaything because he knew it was time to grow up? Well, you should listen to that song whenever you're missing J.T., and when ever you hear the name \"Jackie\" I want you to imagine the name \"J.T.\" and whenever you hear the name \"Puff\" I want you to imagine you. I think it's time that you my friend, slowly sunk into your cave.\nOn 6/19/2003",
      "Oh, James. James. How could you?\nOh, I was such a fool to leave Nils for this rube!\nOn 6/20/2003"
    
    ];
    var elkaSelect = elkaArray[Math.floor(Math.random()*elkaArray.length)];
    message.channel.sendMessage('Elka Doom said:\n ' + elkaSelect);
    //message.channel.sendMessage(elkaSelect);
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
      "I wish I were special like Dogen! And I had a hat that could kill people!\nOn 6/18/2003",
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
    message.channel.sendMessage('Clem Foote said:\n ' + clemSelect);
    //message.channel.sendMessage(clemSelect);
  }
  
    //messages asking for elton's friendster lines
  if (message.content.startsWith(chat + 'elton')) {
    var eltonArray = [
      "J.T. is the king of the psychic target range. I'm not really that good at it, but for J.T. it's like shooting fish in a barrel. (Which I would never do either because I could hear them scream.)\nOn 6/01/2003",
      "What about canoeing?\nOn 6/10/2003",
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
      "Hey, I just thought of something. This is pretty weird, because, like you are really into plans right? And your name IS a plant. \"Lili\" is a plant. Did you know that? Isn't that weird?!?\nOn 5/22/2003",
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
    message.channel.sendMessage('Elton Fir said:\n ' + eltonSelect);
    //message.channel.sendMessage(eltonSelect);
  }
  
  //messages asking for bobby's friendster lines
  if (message.content.startsWith(chat + 'bobby')) {
    var bobbyArray = [
      "Who cares about shooting? Let's see how good you are with your fists Hoofburger.\nOn 6/15/2003",
      "Benny, dude, I thought I told you, not every time, alright? Wait for the signal.\nOn 6/15/2003",
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
    message.channel.sendMessage('Bobby Zilch said:\n ' + bobbySelect);
    //message.channel.sendMessage(bobbySelect);
  }
  
    //messages asking for dogen's friendster lines
  if (message.content.startsWith(chat + 'dogen')) {
    var dogenArray = [
      "J.T. promised me that the next time the squirrels stole something from me, he would shoot them out of the trees and show me how to make pie out of 'em!\nOn 6/15/2003",
      "Xeeeeena!!! Xeeeeenaaaa!.\nOn 6/08/2003",
      "Lili is nice and she's pretty and she smells nice. Once I got lost on the way back from the bathroom and she came out and found me and brought me back,  and didn't tell anyone. Even though her dad is like the King of the psychonauts, she doesn't act all stuck up or anything.\nOn 6/22/2003",
      "Micky and I have a lot in common in that we hurt people sometimes and we don't know why. We try to be nice but then everybody starts crying and screaming and then they ship you off to camp. And he has a special hat just like me.\nOn 5/15/2003",
      "Elka, just because you can see the future doesn't mean you have to ruin the ending of Milla's puppet show every time. Some of us like surprises.\nOn 6/10/2003",
      "Clem is nice but he likes to run too much and I can't run because of my legs are really small and I lose a lot of races. But no matter what I do, Clem says I won or I'm a winner, even when I know I haven't won. So I think he might be a little... not too smart maybe.\nOn 6/19/2003",
      "Elton wears a hat like I do. Um, hey, if you take yours off do people ever start screaming?\nOn 5/22/2003",
      "Another excellent hat. I used to think I was the only person who had to wear a special hat, but now that I'm here I realize that a lot of people have problems with their brains being bad and hurting.\nOn 6/12/2003",
      "Benny is always trying to take my hat off. I don't like Benny. Why am I on this list? How do I get off? Do I have to pay?\nOn 5/29/2003",
      "Phoebe has the most fun name to say at camp.\nFeeeee-beeeeee!\nFeebee!\nOn 6/17/2003",
      "Quentin's nice. He's a good dee jay. he helps me with the squirrels when they are mean. He does not wear a hat, but he is still special.\nOn 6/16/2003",
      "Milka can make a Kazoo by holding a blade of grass between her thumbs. When I tried to do it I inhaled the grass on accident and they had to pull it out of my nose with a crochet hook. She cuts her hair just like Jennifer Aniston, but I think she was doing it before Jennifer Aniston. Jennifer Aniston had a baby with Ross.\nOn 6/22/2003",
      "I like kitties because you can hold more than one at a time and it's harder for them to get away, and their noses are cold, and even though I got ringworm from one once, i still like them. Kittens.\nOn 6/08/2003",
      "uhh.. hey. wait, what did I click on? What happened to the dancing hamster?\nOn 5/21/2003",
      "Chops has the weirdest hat on that I've ever seen..\nOn 6/17/2003"
    ];
    var dogenSelect = dogenArray[Math.floor(Math.random()*dogenArray.length)];
    message.channel.sendMessage('Dogen Boole said:\n ' + dogenSelect);
    //message.channel.sendMessage(dogenSelect);
  }
  
    //messages asking for chloe's friendster lines
  if (message.content.startsWith(chat + 'chloe')) {
    var chloeArray = [
      "J.T. I'd like you to seriously consider joining my future crew. Your marksmanship skills could come in handy, if were were to encounter any hostile life forms. How are you in zero g situations?\nOn 6/14/2003",
      "Sounds like an abduction situation. Are you sure he didn't plan a chip in your neck when you were on board his ship?\nOn 6/04/2003",
      "Of all the Earthlings I have met, I've wanted to dissect Lili the least. When my spaceship is complete, I would be proud to have Lili as my co-pilot.\nOn 5/25/2003",
      "No, Bobby.\nOn 6/22/2003",
      "Elka, you and I have one thing in common. We both know a lot about the future. One thing I'm not sure of yet, though, maybe you could fill me in: When humans eventually live in space, will we get our oxygen from air pills? Or will we grow space gills on our necks?\nOn 6/08/2003",
      "What I like about you, Clem, is that you and Crystal seem like you're just about to blast off any moment. If I could harness your energy somehow, and turn it into solid fuel, we could really go places.\nOn 6/17/2003",
      "Earth to Elton, Earth to Elton. There's another girl at camp besides you-know-who. Take a look around you once in a while.\nOn 5/20/2003",
      "Bobby. Remember what we talked about.\nOn 6/22/2003",
      "Zool!\nOn 6/12/2003",
      "Not sure. I just wanted to-- ZOOL!!!\nOn 6/12/2003",
      "I hate to say it, Milk, but I'm afraid he's a goner. I guess he just likes the flashy dressers. Either that or cat woman here has him in the grips of her confus-o-tron.\nOn 6/05/2003",
      "Maloof, I love ya but I'm sorry to say you can't be on the crew. I'm afraid you just don't have the constitution for space travel, son.\nOn 5/20/2003",
      "Hmm. Russians do make good navigators... Tell you what, Maloof. You can be on the crew if your friend comes in the package.\nOn 6/19/2003"
    ];
    var chloeSelect = chloeArray[Math.floor(Math.random()*chloeArray.length)];
    message.channel.sendMessage('Chloe Barge said:\n ' + chloeSelect);
    //message.channel.sendMessage(chloeSelect);
  }

  //messages asking for benny's friendster lines
  if (message.content.startsWith(chat + 'benny')) {
    var bennyArray = [
      "Hey, J.T. Bobby just wanted you to know that you think you're so cool but you're not.\nOn 6/02/2003",
      "Oh, and your girlfriend's ugly.\nOn 6/02/2003",
      "Yeah! Let's see how good you are with your fists!\nOn 6/15/2003",
      "But... I... okay.\nOn 6/15/2003",
      "Yeah, in no time at all you'll get used to being dumped Elka. I'm sure of it.\nOn 6/06/2003",
      "Good idea, Bobby! I do need an assistant!\nOn 5/21/2003",
      "3%?? That's twice as much as me!\nOn 6/22/2003",
      "Hey, back off space cadet! That was a good one.\nOn 6/22/2003",
      "Elka, if you tell Vernon what we're going to do to him today, Bobby and I are gonna--well, you KNOW what we're going to do to ya! hahaha!\nOn 6/07/2003",
      "OMG let me tell him!\nOn 6/12/2003",
      "IT'S A KING SNAKE!\nOn 6/14/2003",
      "I'm sorry. I'm so sorry boss. I'm just so excited about it! He's gonna pee his pants!\nOn 6/16/2003",
      "Dude, get this dork some pom poms. Am I right, Bobby?\nOn 5/31/2003",
      "Heyyyyyy Bobby! Good one today! I'll bet ol' Vernon didn't even see it coming. I guess he'll check his tapioca a little more thoroughly from now on!\nOn 6/09/2003",
      "Hey, Bobby! You're still the man!\nOn 6/16/2003",
      "He does! He keeps it in a jar by his bed, along with the tail of a puppy, and the nose of a little bunny! Baaaaaaaaaaaaaaaaammmmmmm!\nOn 6/18/2003",
      "What's that all about? Remember what who talked about? Bobby? When did you talk to her? Why wasn't I there? And what did you talk about? I don't like the sound of this.\nOn 6/22/2003",
      "Dogen  Boole:\n\nDrool.\nFool.\nTool.\n\nHeh.\nBurn.\nOn 6/12/2003",
      "Ah ha ha ha!.\nOn 6/06/2003",
      "What!?!?! Oh, screw this, dude. It's like I don't even know you anymore! Have fun with Major Tom here. You'll be sorry!\nOn 6/20/2003",
      "It's good we have Phoebe at camp because she repairs the egos that Bobby and I destroy, and then sends the kid back out into the field so we can have another go at them.\nOn 6/13/2003",
      "Face it folks, we're in the band.\nOn 6/27/2003",
      "Yeah, and how about this for a cheer?\n_Rah-rah-rah!\nSis-boom-bah!\nHeyyyyyyyyyyy...  you suck!_\n\nHeh heh heh. Right bobby?\nOn 5/29/2003",
      "Hey, Crystal, I just wanted you to know that if you're feeling down, it might be because you're a loser, and you suck. HAHAHAHA!\nOn 6/03/2003",
      "Heh heh. I took his clothes while he was skinny dipping. Man I'm good.\nOn 6/17/2003",
      "Oh, man. Let me have this one. He's little! I can do it.\nOn 5/10/2003",
      "Shyeah, right. This guy's not so tough. Bobby's so going to kick his ass.\nOn 6/09/2003",
      "Why don't you call it \"Telepathetic\" cuz that's what you are!\nOn 6/12/2003",
      "Hey, Phoebe, do those headphones block out the noise? I gotta get me some of them before your next show!\nOn 6/14/2003",
      "See you later, Barf Scarf! (that ones for Quentin.)\nOn 6/16/2003"
    ];
    var bennySelect = bennyArray[Math.floor(Math.random()*bennyArray.length)];
    message.channel.sendMessage('Benny "The Nose" Fideleo said:\n ' + bennySelect);
    //message.channel.sendMessage(bennySelect);
  }
  
    //messages asking for phoebe's friendster lines
  if (message.content.startsWith(chat + 'phoebe')) {
    var phoebeArray = [
      "J.T. it's time we got this band in gear. Come on. We got you on harmonica, Chops on guitar, me on the drums, and Quentin on turntables. But we \*\*have\*\* got to get some practicing in. Oh, and I have to get some drums. The last set I had was too flammable.\nOn 6/12/2003",
      "With every goodbye, we learn, Elka.\nOn 6/05/2003",
      "Mikhail, have you ever thought of finding a less violent way to express yourself? Maybe through a hobby, like mental basket weaving? Or cross stitch?\nOn 5/20/2003",
      "I hope it's just from sugar.\nOn 6/16/2003",
      "Hey don't forget that stuff I was telling you about the other day. I may not be a licensed psychic counselor yet, but I know of which I speak young man.\nOn 5/19/2003",
      "Bobby, what is it about you that drives you to be such a bully? I'll bet even though you have the face of a lion, you've got the heart of a scared little kitten.\nOn 6/18/2003",
      "Dogen is great, but this is one mind I'm not dying to get inside of. I'm not sure if you've got any secrets stored in there Dogen, but I respect you enough to let you have your privacy. And I don't want my head to explode. You see these headphones? They're hard to clean.\nOn 6/10/2003",
      "Chloe, we all feel like aliens from time to time. It doesn't mean we should isolate ourselves in our own little galaxies, or helmets. It doesn't mean we should run away, or \"blast off\" or \"burn things.\" Even if they are just small things that nobody wants, it's important not to burn them, even if you really really want to see what happens to it when it burns. Do you see what I am getting at?\nOn 6/11/2003",
      "Quentin is my oldest friend in the world, and a damn fine DJ to boot. Any woman would be lucky to land this man. Most would not be worthy, scarf or no scarf.\n\nP.S. The band is called the Firestarters. Might want to fix that, Q.\nOn 6/01/2003",
      "Huh, well, Bobby. Maybe the Firestarters and I could have a meeting and discuss this. What instrument do you and Benny play?\nOn 6/26/2003",
      "Oh, come on you guys!\nOn 6/29/2003",
      "Waaaa? He never came to one practice!\nOn 6/20/2003",
      "Hey, you guys. Knock it off. Milka got dropped off her by her mom, just like a lot of us. She just happened to run away, into the woods, and hide out for the first few days. Just to chill.\n\nAnd eating bugs is considered a delicacy in many underdeveloped countries, like France.\nOn 5/19/2003",
      "Hey, Milka. Just checking to see if you're okay after what happened in the cafeteria last night. They won't tell us anything, but it looks like you were going through something pretty severe. Let me know if you need anything burned.\nOn 5/19/2003",
      "I mean, let me know if you need anything. Period.\nOn 5/19/2003",
      "Hey baby, how you doing? You feeling alright?.\nOn 5/28/2003",
      "Well, if Quentin likes Kitty, she's got to be a quality person.\nRight?\nOn 6/01/2003",
      "Maloof, it's alright to cry.\nFor a while.\nOn 5/18/2003",
      "On second thought, you should really cry as much as you want. Let it all out.\nOn 6/07/2003",
      "Okay, dude. Seriously. It's time for practice. This band is never going to go anywhere if we don't get together and practice! And if we don't pick a name.\nOn 6/04/2003",
      "Sounds like inspirational Christian Rock. How about \"The Firestarters?\"\nOn 6/09/2003",
    ];
    var phoebeSelect = phoebeArray[Math.floor(Math.random()*phoebeArray.length)];
    message.channel.sendMessage('Phoebe Love said:\n ' + phoebeSelect);
    //message.channel.sendMessage(phoebeSelect);
  }

  //messages asking for quentin's friendster lines
  if (message.content.startsWith(chat + 'quentin')) {
    var quentinArray = [
      "heh heh. nice of you to say, milka... uh... but how about that j.t. though, eh? i heard he can hog tie a calf in 10 seconds.\nOn 5/19/2003",
      "whoa... uh...\nOn 5/17/2003",
      "hey hey hey! peace love rise above! let's all just chill out here. it's summer time! we're psychic and we're at this super rad camp!\nOn 5/30/2003",
      "hey, lili. i just wanted to say thanks for chilling with me last night. i had a really good time. i didn't even know that meadow existed. it looked super beautiful in the moonlight, didn't it? well, don't worry. i won't tell anyone where it is! stay cool.\nOn 5/27/2003",
      "hey mikhail! just poppin in to say whaddup foo? folks, this guy is tough. i wish this camp had a wrestling team, cuz with this guy on our side, we'd never loose.\nOn 5/18/2003",
      "ayyyyy there, milka. now you know elka doesn't like answering that kind of question. she's all sensitive and stuff because of her parents and their doomed relationship or whatever so let's just say kay sarah sarah, you know? like what 's gonna be is gonna be.\n\nbut if you did want to answer that kind of question, elka, how about me and kitty, eh?  ever going to happen? cuz I just--oh you know i feel dumb now. let's just pretend i never asked. okay my friend? okay. keep on trucking.\n\nand hey i heard about you and j.t.! way to go. he is a super chill and nice guy. you two should be super psyched together. anyway, peace out.\nOn 6/03/2003",
      "man clem has so much energy its really awesome. i totally admire that. sometimes i get tired just standing next to him, but man. i don't know where he gets it.\nOn 6/16/2003",
      "word up my homeslice. that hat is totally ruling. you and I know what it's like to love a woman, broham. I know that if we stick it out, what was meant to be, will be. we are brothers in arms. hopefully soon we will be brothers in the arms of a couple of special ladies if you know what I mean--yeoow!\n\nright on. check your shiznit out later.\nOn 5/19/2003",
      "slice, this is excellent. i am so stoked for you. i am totally so super inspired now. if you can move on there is hope for all of us.\noh and milka... i uh... well maybe i'll just leave you a testimonial on your own page. okay that would be better huh. okay, super dope then.\nOn 5/28/2003",
      "yoooo, dude. Those wrist bands are the dopest.\nOn 6/17/2003",
      "hey ultimate bro. don't let those squirrels get you down man. they only sound like they're laughing at you, I swear. that's what they sound like when they are chewing their cud, I think. wait... do squirrels eat cud? oh, whatevs. look, i'm thinking we should do that arrowhead hunt tomorrow like we talked about. i'm hoping to get a double and you're so good at finding those. let me know. peace.\nOn 6/09/2003",
      "oh man. i am freaking out about how much i like your space helmet! if you let me borrow it sometime, i'll let you wear my scarf. it was sewn by Chilean political prisoners.\nOn 6/10/2003",
      "This girl is HOT.\n(ha ha. she hates it when i make that joke)\n\nfor reals, this here is my oldest and best friend. wise beyond her years. we are so close, this is hard to write because it's like writing a testimonial to my left arm. that's how close we are. but I'll try.\n\nhmmm... let's see. phoebe bends in the middle and wears a watch, and has five fingers. no, wait. damn! that's my arm! i did it again! I just can't tell them apart!\n\ncheck out our band: the levitators!!!\n\nif you want.\nOn 6/06/2003",
      "hey, no way! what an awesome idea. we totally need a front person.\nOn 6/09/2003",
      "milka, hey. on elton's page you said i don't care, but dude, i do! i do care! seriously, that was such great times when you had a crush on me. it was totally super flattering and stuff. i'm sure you and elton are going to be seriously like the dopest couple ever. i cannot even handle how great it's going to be. at your wedding i'm going to cry and make a killer toast.\nOn 06/19/2003",
      "hey there crystal flowers! i was just thinking i'll bet you know more cheers than anyone i know. you're like the queen of spirt. man, I wish i knew that many cheers. damn. if i knew all those cheers i'd be super psyched all the time! if you are ever not super psyched, by the way, you should definitely let me or somebody else know, k?\nOn 5/30/2003",
      "oh man. what a super dope person. kitty is just the dopest. super rad i'm telling you. kitty got me into scarves. man... kitty... awesome!\nOn 5/25/2003",
      "i'll say.  shoot! man. man o man! she's pretty rad. dang... I guess she's just... neat.\nOn 06/02/2003",
      "Agreed!\nOn 06/20/2003",
      "yo maloof, yo. hope you are not too bummed today bro.\nOn 05/17/2003",
      "hey bros. it is so awesome that you guys are chilling together. good stuff.\nOn 6/18/2003",
      "How about \"The Levitators.\"\nOn 06/08/2003",
      "The Whispering Rockers!\"\nOn 06/10/2003"
    ];
    var quentinSelect = quentinArray[Math.floor(Math.random()*quentinArray.length)];
    message.channel.sendMessage('Quentin Hedgemouse said:\n ' + quentinSelect);
    //message.channel.sendMessage(quentinSelect);
  }

  //messages asking for milka's friendster lines
  if (message.content.startsWith(chat + 'milka')) {
    var milkaArray = [
      "J.T. is alright. He's no Quentin, but he's alright.\nOn 5/17/2003",
      "Sometimes I'm watching you Franke. And you don't know it.\n\nBut I know.\n\nI know everything.\nOn 05/28/2003",
      "Not true...\n\n...TIGER!  ;)\nOn 06/20/2003",
      "Lili, if you want your last homework assignment you can find it at the bottom of Lake Oblongata, where I put it. Which is where I'll put you, and those ho's Franke and Kitty, if you every mess with Elton again. Understood?\n\nP.S. I like your skirt.\nOn 05/30/2003",
      "Elka, hey I was wondering if you've had any visions about me and Quentin. Like soul-kissing in a meadow or something like that. Or him giving me a present. Or something.\nOn 06/02/2003",
      "Hey, Clem. I saw you steal a bunch of dran-o from the janitor's hut the other day. What's that all about? What you cleanin? There's no sink in the boy's cabin.\nOn 06/20/2003",
      "Hi, Elton.\nOn 05/18/2003",
      "Hi, Elton.\nOn 05/23/2003",
      "Hi, Elton.\nOn 05/25/2003",
      "Look, Elton. Here's how it is. I had a vision. Remember during dinner the other night when I had that seizure and fell onto the ground and dropped my jello and it got everywhere and I had all those spasms and the coach had to put his riding crop in my mouth so I could bite down on it, but I couldn't bite on it because I was too busy speaking Latin? That was a me having a vision. It was about you.  I realize now that you're the one I'm supposed to be with, not Crispen (like he cares). So anyway, can we talk about this? Meet me after basic braining tomorrow, behind old man Cruller's hut, okay?\nOn 05/28/2003",
      "Elton. I'm glad we finally got a chance to talk. Are you feeling what I'm feeling? It's kind of intense. We might have to kiss soon. I mean, kiss again soon. What are you doing right now?\nOn 06/18/2003",
      "Hi, Dogen. I like your kitty and puppy pictures. Do you have a partner for the scavenger hunt yet?\nOn 06/07/2003",
      "Chloe is cool, and she can climb trees really well.\nOn 06/09/2003",
      "Phoebe is cool. She thinks I have problems, but I don't. Sometimes I make them up for her because it makes her happy.\nOn 6/12/2003",
      "Hi Quentin.\nOn 06/02/2003",
      "Yeah, I was looking at it. It's nice. But it will die soon as all things do, including Quentin's love for you.\nOn 06/12/2003",
      "Anyone know why Vernon is down by the lake, naked? I had to make him invisible just so I could walk by.\nOn 06/16/2003",
      "Quentin, are you okay? You're talking funny. You're usually so smart and eloquent, and your lips do this cute thing when you talk. But I can't tell if they're doing that cute thing right now. Are they doing it?\nOn 05/26/2003",
      "Yeah, we heard you the first time. Sheesh. What's the big deal? Did you hit your head or something?\nOn 06/04/2003",
      "Maloof, why don't you stand up to these creeps?\nOn 05/16/2003",
      "Huh. That dude is big.\nOn 06/17/2003"
    ];
    var milkaSelect = milkaArray[Math.floor(Math.random()*milkaArray.length)];
    message.channel.sendMessage('Milka Phage said:\n ' + milkaSelect);
    //message.channel.sendMessage(milkaSelect);
  }

  //messages asking for crystal's friendster lines
  if (message.content.startsWith(chat + 'crystal')) {
    var crystalArray = [
      "J.T. is the coolest! He is the best shot at camp! Probably the best shot in the world!!!! I'll bet he could PSI-Blast a... a... ant, off a...\nOn 06/17/2003",
      "Yeah! Great idea, Clem! I'll bet he could PSI blast a ant off a speck of dust!\nOn 06/17/2003",
      "From a MILLION miles away! Yayyyyy J.T. the ant killer!\nOn 06/17/2003",
      "Hey, Franke! I like your picture! Lots of spirit! Hey, that gives me an idea! What you say we put together a cheerleading squad this year?\nOn 06/08/2003",
      "Clem, you put the POINT in dissaPOINTed! :D! :D! :D!\nn 06/18/2003",
      "Lili! OMFG!!! I know we haven't really gotten a chance to get know each other much this year, or last year. Or the year before that. But it sure was nice of you to let me get on your friends list anyway! I'll bet we have a lot of things in common, and that we'll be best friends some day! :D!!! See you at the campfire rally! <3 <3 <3 <3 Infinity!\nOn 05/21/2003",
      "Hey that's a good idea! Let's have a wrestling team! I'd bet you'd be really good Clem! :D!\nOn 05/19/2003",
      "ROFL! You nut!\nOn 05/19/2003",
      "Elka sweetie, quick question: if Clem and I... if we \_weren't here\_ next year, would people say nice things about us? Or mean things?\nOn 06/16/2003",
      "Yeah, a freak accident. Would they be like, \"I'm so glad those two are gone?\" or would they cry and cry and wish they were nicer to us?\nOn 06/17/2003",
      "Clem is the best friend a girl could have. We do everything together. Whether it's sports, or running, or cheering, or horseback riding, or telekinetic canoeing, or the obstacle course, or climbing trees, or jumping hand in hand off of the roof of the main lodge to end it all, or snorkeling, or singing at the campfire, everything's better with Clem!!!!!!!!\nOn 05/27/2003",
      "Hi Clem! Just checking in to say you're #1 in my book!!!!!!!!\nOn 05/28/2003",
      "Sounds like a good plan, Mikhail! May the best man win!!!!!!!!\nOn 05/29/2003",
      "I just thought of something else I like about Clem: HE ROCKS!!!!!!!!\nOn 05/31/2003",
      "Pom-poms can't give you a winning attitude, Benny. It has to come from within! :D!!!!!!!!\nOn 05/31/2003",
      "Hey, good one Chops! The head band is super neato! That's something great about Clem I hadn't thought of yet! :D!!!!!!!!\nOn 06/11/2003",
      "Clem! OMG! You HAVE to be my partner for the scavenger hunt! HAVE to! HAVE to! HAVE to! If you don't I swear I'll throw my self into a wood chipper! Please please please!!!!!!!!\nOn 06/13/2003",
      "I would but I'm just excited about Clem! He's the greatest!!!!!!!\nOn 06/14/2003",
      "Ha ha ha ha!!!!!!!!!!!!!\n\nGood one, Franke!!!!!!!!!!!\n\nAre you secretly a stand-up comedian? :O!\n\nJust kidding!!!! :D!\n\nWell I try not to speculate to much about the future, because no one knows what it holds (except that it's going to be GREAT!!!!!!!!) but I think Clem and I do make a great team, and maybe someday who knows?? :D!\n\nBut for now we both agree that we're too young to go steady :D and we'd rather save ourselves for later, maybe when our outrageous sprit for living has died down a little bit :/ and we slip into that phase of one's life where you start giving up on your dreams :( and all the amazing things you thought you were going to do, and you just start to panic that you're going to die alone :O and you feel like grabbing onto the first decent person you can find and tricking them into marriage so that at least you have someone to call 911 for you when your hip breaks and you can't reach the phone.\n\nLong story short: Clem is a great guy!!!!! :D!!!!",
      "Clem is the best! The very, very best!\nOn 06/18/2003",
      "Wow, Milka! You're so lucky that you can go invisible so much and snoop around into other people's business. That's so great for you!!!!!!!\nOn 06/20/2003",
      "Totally! He is totally good at canoeing!\nOn 05/24/2003",
      "OMFG! Total master!!!!!!!11 He's like Lord God King Canoe Man! Elton rules the lake! :D :D!\nOn 05/24/2003",
      "Omg, don't say that Clem. Who cares who's better?\nOn 05/24/2003",
      "Oh, Clem. You're making me so sad. It's just... so... horrible. All of it. What kind of world is this if it makes a guy like you so sad? How can we go on?\nOn 05/24/2003",
      "That's true. Let's here it for Elton, and his dominance of the telekinetic canoes!\nOn 05/24/2003",
      "Yay Elton! :''')!\nOn 05/24/2003",
      "You know, Dogen has special needs, like his hat. He's not as fortunate as you and I. But that's why we're so lucky to have him here OMG!\nOn 06/18/2003",
      ":O!\nOn 06/18/2003",
      ":D!\n\nMe too then! I wish I had a hair scrunchie that could make bad people cough out their hearts!\nOn 06/18/2003",
      "Omg! Mine totally too! My brain hurts all the time too! So bad that sometimes I just want to die! We should form a club!!! :) :) :)!\nOn 06/13/2003",
      "God fucking damnit!\nOn 06/13/2003",
      "Clem, you are thee best IMHO. xoxoxo!\nOn 06/13/2003",
      "Hey, Benny. I like your... uh...\nOn 06/19/2003",
      "Yeah! That's it! Your shirt is THA BOMB! :D!\nOn 06/19/2003",
      "Do you think you could talk to him? Because we really think he's cool, and we like to be friends!!\nOn 06/19/2003",
      "Oh... uh. Okay I guess...\nOn 06/19/2003",
      ">:|!\n\nThat's so mean! How could somebody be so mean, Clem?\n\nUnless he's right. Unless we are lame and we do suck. We only wanted to be best friends... forever.\nOn 06/19/2003",
      "Finally! Yay! :D!\nOn 06/19/2003",
      "Ha ha! Bobby! Of course girls like you! You and Quentin are different, but you're both great!!!\nOn 06/18/2003",
      "OMFG! Milka Phage, I heard you and Elton Fir are dating now! That is so super great! You guys make such a great team!\nOn 05/29/2003",
      "Yeah! Good one, Bobby!\nOn 05/29/2003",
      "Total >:| !!!\n\nYou guys are not nice!!\nOn 05/29/2003",
      "We're all unique deep down, Elka. You! Me! And everybody!!!! :D!!\nOn 06/10/2003",
      "Right! And some of us can roll our tongues into a tube and some of us can't! We're all unique! But it doesn't make one of us better or worse. See?\nOn 06/12/2003",
      "Cheer up Maloof!\nOn 05/22/2003",
      "Clem! Come on! Every member of the team counts!\nOn 05/24/2003",
      "Oh he's big, b-i-g!\n\nAnd he's bad, b-a-d!\n\nand he's boss, b-o-s-s, b-o-s-s, he's BOSS.\nOn 06/20/2003"
    ];
    var crystalSelect = crystalArray[Math.floor(Math.random()*crystalArray.length)];
    message.channel.sendMessage('Crystal Snagrash said:\n ' + crystalSelect);
    //message.channel.sendMessage(crystalSelect);
  }
  
  //Had to be done.
  if (message.content.startsWith(chat + 'gfd')) {
    message.channel.sendMessage("Crystal Snagrash said:");
    message.channel.sendMessage("God fucking damnit!\nOn 06/13/2003");
  }
  
    //messages asking for kitty's friendster lines
  if (message.content.startsWith(chat + 'kitty')) {
    var kittyArray = [
      "Hmmm. I could get into that.\nOn 05/17/2003",
      "Don't sweat Lutefisk, Franke. He's just bitter about losing his girlfriend to J.T.\nOn 06/11/2003",
      "Just ignore it, baby.\nOn 06/11/2003",
      "This is my girl. No body better mess with my girl. She bites!\nOn 05/25/2003",
      "Oh, go take an inviso-hike, Nell.\nOn 05/29/2003",
      "Hate to break your heart girlfriend, but I just saw your boy Elton here making time with Milka Phage out behind Mr. Cruller's hut. It looked like he was trying to read her mind--with his tongue! Yeah, baby, woo!\nOn 05/29/2003",
      "Vernon, you left out the part where you peed your pants.\nOn 05/17/2003",
      "I could ask her for you, Vern. Hey, Franke! When you going to stop being a tease?\nOn 05/29/2003",
      "Holy crap girlfriend. Settle down.\nOn 06/14/2003",
      "Elton, Franke is just kidding.\n\nBut seriously, sweetie--IS our homework done yet? Or was it eaten by that hulking lungfish you're always talking about?\n\nxoxoxx!\nOn 05/17/2003",
      "Is it just me, or is Dogen kind of sexy?\nOn 06/05/2003",
      "Oh yeah, I remember that! Dawn of the Naked Vernon. All I can say is Franke, you are one lucky woman!\nOn 06/08/2003",
      "Phoebe, I want to be in your band.\nOn 06/08/2003",
      "\n\nHi Quentin. Thanks for the flower. ;)\nOn 06/11/2003",
      "Dude, your crush on Quentin is sweet, but give it up. He loves me. Just because I tossed him aside doesn't mean you should be diggin' through my trash, chika.\n\nP.S. I was wondering if you could settle a bet I have with Franke. She said that you had your own secret crazy language, like Jodie Foster had in Nell where she was retarded in the woods. Is that true?\nOn 05/18/2003",
      "Yeah, I heard that too. So what were you saying?\nOn 05/18/2003",
      "\"Gimmie Bugs!\" hee hee hee!\nOn 05/18/2003",
      "Oh, lighten up Counselor Troy, will ya?\nOn 05/18/2003",
      "Gross.\nOn 06/08/2003",
      "Okay, great. It's a plan. You two guys go down to the lake, take off your clothes and jump in the water. We hot ladies will be down there in a minute. We have to freshen up!\nOn 06/12/2003",
      "Maloof. Get over here. Franke and I want to dress you up like a girl again.\nOn 05/14/2003",
      "Franke, shhh.\nOn 06/16/2003",
      "Hey, when are you going to jam again, Chops? Franke and I wanna come over and sing.\nOn 06/02/2003"
    ];
    var kittySelect = kittyArray[Math.floor(Math.random()*kittyArray.length)];
    message.channel.sendMessage('Kitty Bubai said:\n ' + kittySelect);
    //message.channel.sendMessage(kittySelect);
  }

  //messages asking for vernon's friendster lines
  if (message.content.startsWith(chat + 'vernon')) {
    var vernonArray = [
      "Okay, okay. Everybody likes J.T. and so do I! Don't get me wrong! But sometimes, I'm just saying... sometimes maybe the harmonica jam sessions at the campfire go a liiiiittle long, is all I'm saying. Sometimes somebody's got a really good story they want to tell, but they can't because it's all harmonica, harmonica, harmonica, and I think honestly, just a tip--people would like to hear maybe more stories, less harmonica. Not that I don't love it of course. The harmonica. But who doesn't love a good story?\non 06/04/2003",
      "Hey, Franke. Don't worry, I haven't told anyone yet about that stuff we talked about.\nOn 05/27/2003",
      "Hey, if Franke's cheering, I'll play anything!\nOn 06/11/2003",
      "The other day I was just trying to get some milk at lunch, and I said, \"Hey, Micky. Could you pass the milk please?\" And he said, \"What? You challenge me?\" And I said, \"No, no. I just want the milk.\" And he said, \"You want milk? Come and get it!\" And then I swear he roared like a bear. It was so embarrasing. Can you believe that? And people say I'm annoying! At least I know to keep my mouth shut.\n\nSo I just moved to the far side of the lodge, and I ended up putting grape juice on my cereal instead. And you know what? Is was not bad!\nOn 05/17/2003",
      "Yeah, Kitty, so watch your-- hey, really? Really Franke? Are we officially boyfriend girlfriend now? Oh, man! Let's make T-shirts!\nOn 05/17/2003",
      "Oh, right. Yeah, of course. I can do that. I can do that. But, oh, I already have the t-shirts made, so they're ready to go, whenever. I hope I spelled \"forever\" right.\nOn 05/17/2003",
      "Hey, Elka. Just so you know, your precognition skills are not infallible. For instance, remember when we rode the bus into camp together? I told you that story about how I had those two goldfish that kind of looked alike and how no one but me could tell them apart (remember?) and then we got off the bus and you predicted that I was going to annoy everyone at camp? Well, you were wrong! Everything's going great. In fact, I kind of have a girlfriend almost. You know that girl Franke? Hey, do you have any forsighings or whatever about me and her? Like, when we're going to be able to actually tell people about us? And when we will start holding hands and stuff?\nOn 05/28/2003",
      "Oh, right. You can read this too, huh. Well um. Let's just.. uh.. hm... I think the computer here in the lodge is going on the fritz... seems to be... krrrr... breaking up...bzzz! hj#kjkow*owl gotta TX(uehj go!\nOn 05/30/2003",
      "Clem is cool. Talks a lot, but he's basically cool.\nOn 06/12/2003",
      "Elton! That was awesome the other day when you beat Bobby at the telekinetic canoe races! How do you go so fast? Speaking of fast, did you know my dad was a race car driver? He was, kind of. He worked on the pit crew, actually, of one of the top ten race teams in the minor race circuit in the northern part of our state. Actually he worked more on the business side. He was really more on the side of the sponsor of the pit crew. Our sponsor was Tripe Insurance. Actually, my dad ran the shop, the insurance shop, who sponsored the pit crew of the racing team. But he was one of the most successful insurance actuaries in the state. Probably because he could see the future and everything.\n\nOkay gotta go. More stories later. I got a million of 'em! Keep it real!\nOn 05/16/2003",
      "Dogen's a good listener. Even though he does wonder off sometimes while you're talking. He usually wanders back before I'm done.\nOn 06/04/2003",
      "Oh, man. Chloe, you're the ONE person I can tell this story to who won't think I'm crazy. You weren't hear at camp last year so you don't know. Anyway, I was sleeping, and then all of a sudden there was this bright light shining in my eyes. I couldn't see who was holding it--it was these two bizarre creatures. One was little and had a really huge, alien ears, and the other creature was tall and had a bulbous, sort of mutant-shaped head. Anyway, they spoke to me. They said, \"VERNON TRIPE STAND UP!\" And I noticed that the tall one was holding a BB gun. I didn't know how they got that but I figured I'd better do what they said. So, I stood up and they said, \"WALK OUTSIDE,\" and I did, and then they said, \"CLIMB UP THAT FLAG POLE!\" And I did and they said, \"THROW DOWN YOUR CLOTHES STAY UP THERE UNTIL THE MOTHERSHIP COMES TO PICK YOU UP.\" I was so excited that I threw down my clothes right away (it makes sense that you have to travel naked-- That's how the Terminator does it) but the mother ship never came. And in the morning when the kids came out they laughed, but I was the one laughing (on the inside!) because I came closer to going on a space ship than any of them ever will.\n\nSo, pretty cool eh? Hope that doesn't make you too jealous.\nOn 06/06/2003",
      "See? Nobody understands.\nOn 06/06/2003",
      "Phoebe is a good listener. As long as you phrase your story in the form of a psychological problem for her to solve. Luckily I have her believing that I have a LOT of psychological problems, so I get a lot of her time.\nOn 06/07/2003",
      "Hey, Phoebe. You haven't written me a testimonial yet. I've written you two!!\nOn 06/16/2003",
      "Quentin and I hang out all the time. We're like best buds. We have a lot in common. I'll bet if I wore a scarf, you wouldn't even be able to tell us apart.\nOn 06/13/2003",
      "Hey, Milka! I have a really good story to tell you. I was going to tell you yesterday but I couldn't find you anywhere. It was weird--I heard your voice in the TV lounge, but then when I went in there you weren't anywhere to be seen! And then later at your cabin, the same thing happened! Weird, huh? It's like I'm imagining hearing your voice all over camp. Maybe I'm going crazy. Oh, that reminds me about this time my aunt went crazy and thought she was a turtle. She moved really slowly for three days, and we thought it was funny until a loud noise startled her and she pulled her head down into her neck hole so far that we had to take her to the hospital and man if that ain't a good story in itself! But it's kind of long so I'll wait until next time I see you in person.\nOn 05/17/2003",
      "Got Milka?\n\nHAHAHA. Get it? Kind of a play on words. Just though of it. Thought I'd share with the group. :)\nOn 05/19/2003",
      "Hey, Crystal, I heard you've been a little bummed lately. If you need a good story to cheer you up, I'm your man!\nOn 06/05/2003",
      "Count me in.\nOn 06/10/2003",
      "Wooo! I'm there.\nOn 06/13/2003",
      "Hey, Kitty. I can't get a hold of Franke. I figured you might know where she is because you guys are like, inseparable. Could you ask her if she has a partner yet for the scavenger hunt?\nOn 05/30/2003",
      "Hey, Maloof! Did you ever hear the one about the boy who cried so hard his eyes shriveled up and turned into raisins? Seriously. He's going through eyeball-reinflation therapy right now. He can see, but crows think his eyes really are raisins, so he has to wear protective goggles to keep them from pecking his eyes out. True story. Like the kind of story that has a moral, if you're paying attention, you know?\n\nLike about how you should stop crying, maybe?\nOn 05/13/2003",
      "Uh, hey Maloof. If you want, you can have some of these rice crispy treats my mom sent me.\nOn 06/12/2003",
      "Hey, who doesn't like Chops? Nobody. Everybody loves chops. He's just that kind of guy--like me!\nOn 05/25/2003"
    ];
    var vernonSelect = vernonArray[Math.floor(Math.random()*vernonArray.length)];
    message.channel.sendMessage('Vernon Tripe said:\n ' + vernonSelect);
    //message.channel.sendMessage(vernonSelect);
  }

  //messages asking for crystal's friendster lines
  if (message.content.startsWith(chat + 'maloof')) {
    var maloofArray = [
      "J.T. I love your work. I have some contract assignments I'd like to talk to you about. How's the whole \"have gun, will travel\" thing working out for you? Have you ever thought about taking it up a notch? Professional representation is the first step in that direction. Let's talk.\nOn 06/18/2003",
      "Lili is the only person in camp who hasn't pushed me down so far this year. Except for that one time on accident, but she said she was sorry and even though it looked like she was laughing I believed her when she said she had something in her eye.\nOn 05/22/2003",
      "People think Mikhail is really mean but he's nice. He doesn't hit or push or talk loud but he is really strong and he said that if people keep being mean to me and saying mean things that he can use telekimnesis to break every bone in their body and throw them into the lake and that person's mom and dad and the police and the fire department can look and look and look and they will never find that person because that person's bones will be ground up so much that fish will think it's fish food and eat it. Mikhail is really good at tetherball.\nOn 05/05/2003",
      "Greetings, Mr. Zilch. I'm not sure if you were aware, but I am now Misha's exclusive agent. If you have some contract work you need then we can talk about rates. In the future, I'd prefer it if you routed all communication through me.\nOn 06/22/2003",
      "Elka, together we could really do some good at this camp. You could predict where and when Bobby Ziltch is going to strike next, and then Mikhail and I show up and offer protection. A powerful service package, you have to admit. Why don't you think about it and get back to me?\nOn 06/19/2003",
      "Some day, all jocks will pay.\nOn 06/09/2003",
      "Elton is usually nice, but once I told him I thought Lili was pretty and he got really mad at me. Elton, I will forgive you if you let me have 3 dream fluffs. And for 2 more dream fluffs, I won't tell Lili what you said.\nOn 05/27/2003",
      "Bobby. Come around some time and we can see if there's a place for you in my new organization. This is a dangerous time to be a lone gun, you know?\nOn 06/15/2003",
      "Dogen, you make me proud to be short..\nOn 06/06/2003",
      "Chloe, I know what it's like to be small. If you're interested at all in hearing about some protective services, I represent a client who I think would be PERFECT for you. I'll have my assistant come by your cabin to setup an appointment. Oh, that reminds me. I'm taking applications for an assistant position.\nOn 06/17/2003",
      "My friends, Benny did a good job running this place for the past couple seasons. But I'm afraid he represents a bygone regime. Anyone seeking out protection from Mr. Fideleo should really reconsider. Let's talk.\nOn 06/22/2003",
      "Quentin gets a special deal. He never picked on me before I had Mikhail on retainer, so he gets free protection.\n\nFor 1 month.\nOn 06/222003",
      "Hi Milka. If you teach me invisibility, I'll get Mikhail to beat up the psychadet of your choosing. Unless you chose someone who is currently a protected client.\nOn 06/18/2003",
      "Ms. Snagrash, I do offer protective services, but I don't think I am equipped to protect someone from themselves. Let me speak to my associates and see what kind of custom package I can come up with for you..\nOn 06/20/2003",
      "Kitty, I'd advise you to stay away from Mikhail. I know you are trying to confuse him, and manipulate him to your own purposes. But trust me, his allegiance is to me. Don't make me prove it.\nOn 06/09/2003",
      "I hear a lot about these psychic fists of yours, Mr. Sweetwind. I hope to see them someday, although hopefully not used against one of my clients. What would be best for both of us, and our families, would be if we could have some sort of a partnership going forward, not a messy and unproductive competition. Let's talk.\nOn 05/30/2003"
    ];
    var maloofSelect = maloofArray[Math.floor(Math.random()*maloofArray.length)];
    message.channel.sendMessage('Maloof Canola said:\n ' + maloofSelect);
    //message.channel.sendMessage(maloofSelect);
  }

  //messages asking for chops's friendster lines
  if (message.content.startsWith(chat + 'melvin') || message.content.startsWith(chat + 'chops')) {
    var chopsArray = [
      "This is my main hombre. Like the famous desperadoes of old films, this bandit does not, in fact, need any stinking badges. Watch out, ladies, this one is on fire. He is a sure shot in every sense of the word. He is a cool customer. Seriously, I don't know if I would have ever made it at this camp if it weren't for my main man J.T. I would love to ride a mile in his hat, but I cannot, due to a very serious medical condition whereby my hair is too intense and voluminous.\nOn 05/16/2003",
      "Sometimes I think J.T. and I are like, the same person. Like Siamese twins, separated at birth. Re-conjoinified, not in body, but in our mutual chillness. \nOn 06/03/2003",
      "J.T. what up? You missed practice. Phoebe got so mad she burned up another pair of sticks.\nOn 06/16/2003",
      "Hey, J.T. where are you? I see more of Milka these days than you, and she's invisible most of the time. Time to check in with home base. Meet me at the secret spot.\nOn 06/19/2003",
      "J.T. are you there? Come in, J.T. come in! Has she kidnapped you bro? Are you under some sort of evil voodoo/Barbie doll curse?\nOn 06/21/2003",
      "J.T. red alert! RED ALERT! Speak to me!\nOn 06/22/2003",
      "If you don't play it on ice with a stick, it ain't a sport.\nOn 06/15/2003",
      "Lili, where ya been? You never hang out anymore. Do you have a boyfriend? Eh? You cheatin on me? Heh.\nOn 05/24/2003",
      "Hey, Elka. Do you know where my man J.T. is? I can't find him anywhere.\nOn 06/18/2003",
      "Look Doom, I know you guys are dating and all, but let the guy come up for air sometime!\nOn 06/20/2003",
      "DOOOOOOOOOOOOOOM!\n\nLET MY PEOPLE GO!\nOn 06/21/2003",
      "Hey, Clem. Where did you get that headband? I like it.\nOn 06/11/2003",
      "Elton, Elton!\n\nKeeps the ladies Meltin'!.\nOn 05/26/2003",
      "Go Elton! It's your birthday!\nOn 05/28/2003",
      "The hat does not kill people, eh? The Boolean brain is what kills people. The hat is the thin foil line that separates us from... the headless us.\nOn 06/20/2003",
      "Chloe likes me because I come down to this place from a cold, mostly empty world where the beings talk funny.\n\nIt's called Canada! HAHAHA! See? We can make fun of ourselves. We're not all sensitive about it.\nOn 06/15/2003",
      "Uh, no offense my friend, but how do you expect to sing? You're mouth is kinda busy with the harmonica.\n\nOr it used to be. These days it's more busy with Elka Doom.\nOn 06/11/2003",
      "Yeah, that's why I missed it--I was out looking for J.T.\nOn 06/24/2003",
      "Me too.\nOn 06/28/2003",
      "People say Milka's a freak, but I like to think it's more that she's \"Freakay.\"\n\nI have no proof of this. It's just a theory. But I like to think it.\nOn 05/16/2003",
      "Hey, Milka, are you okay? That was some crazy shaking you did at dinner the other night. You didn't let Nils slip you any of that Yoo-Hoo, did you? That s will f you straight up.\nOn 05/19/2003",
      "Not cool, Benjaman.\nOn 06/04/2003",
      "I can wiggle my ears. You can't see it, but just trust me.\nOn 06/16/2003",
      "Maloof, you the man. Or at least you will be, once you stop acting like a baby.\nOn 05/25/2003",
      "What the big guy says is definitely cool with me.\nOn 05/30/2003"
    ];
    var chopsSelect = chopsArray[Math.floor(Math.random()*chopsArray.length)];
    message.channel.sendMessage('Melvin Sweetwind said:\n ' + chopsSelect);
    //message.channel.sendMessage(chopsSelect);
  }

  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.sendMessage('bar');
  }
});

client.login(process.env.BOT_TOKEN);
