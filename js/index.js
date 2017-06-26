 var chat = new Chat({
  greeting: 
    ['Hey there, I\'m Taylor Kirk',
     'I design and make cool shit',
     'I like to 🤓  nerd out on all things science, tech or art',
     'Do you want to learn more about me or see some work?',
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'learn more about you 📚',
              'path': 'learnMore'
            },
            {
              'text': "see some cool shit 💥🔥💥",
              'path': 'coolShit'
            }
          ]
       }
    ],
   
  learnMore: 
    ['Play two truths and a lie or check out some of my skills 🤹 ?',
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'lay some truth on me',
              'path': 'truthOrLie'
            },
            {
              'text': 'show me some skills 🤹',
              'path': 'skills'
            }
          ]
       }
    ],
   
  truthOrLie: 
    [ 'Alright, 🤞  good luck. Which one is the lie?',
     '1️⃣  I\'m self taught on 7 instruments',
     '2️⃣  My projection design was featured in a major studio film',
     '3️⃣  I have a French Bulldog',
      {
        type: 'choose',
        answers:
          [
            {
              'text': '1️⃣',
              'path': 'truthOne'
            },
            {  'text': '2️⃣',
              'path': 'truthTwo'    
            },
            {  'text': '3️⃣',
              'path': 'truthThree'    
            }
          ]
       }
    ],
   truthOne: 
    ['Nope. I\'ve been teaching myself music 🎶 since I was 10. ',
     'The lie was number 3️⃣ .',
     'I actually have 2 frenchies 🐶',
     '<a data-fancybox="gallery" href="https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-15/e35/17931817_1933738843523525_3740784788169031680_n.jpg"><img src="https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-15/e35/17931817_1933738843523525_3740784788169031680_n.jpg" height="200px" style="border-radius:10px; margin-top:5px;"></a>',
     'If you want to check out their adventures follow <a href="https://www.instagram.com/otisandetta/" target="_blank">@OtisandEtta</a>',
     'Still want to learn about some of my skills? Or are you ready to see some cool shit?',
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'check out your skills 🤹',
              'path': 'skills'
            },
            {
              'text': 'see some of your work 💥🔥💥',
              'path': 'coolShit'
            }
          ]
       }
    ],
   truthTwo: 
    ['This is actually true. The movie was called <a href="http://www.imdb.com/title/tt3799372/" target="_blank">Six Years</a> ',
     'The lie was number 3️⃣ .',
     'I actually have 2 frenchies 🐶',
     '<a data-fancybox="gallery" href="https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-15/e35/17931817_1933738843523525_3740784788169031680_n.jpg"><img src="https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-15/e35/17931817_1933738843523525_3740784788169031680_n.jpg" height="200px" style="border-radius:10px; margin-top:5px;"></a>',
     'If you want to check out their adventures follow <a href="https://www.instagram.com/otisandetta/" target="_blank">@OtisandEtta</a>',
     'Still want to learn about some of my skills? Or are you ready to see some cool shit?',
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'check out your skills 🤹',
              'path': 'skills'
            },
            {
              'text': 'see some of your work 💥🔥💥',
              'path': 'coolShit'
            }
          ]
       }
    ],
   truthThree: 
    ['Looks like you know me pretty well already.',
     'I actually have 2 frenchies 🐶',
     '<a data-fancybox="gallery" href="https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-15/e35/17931817_1933738843523525_3740784788169031680_n.jpg"><img src="https://instagram.fmkc1-1.fna.fbcdn.net/t51.2885-15/e35/17931817_1933738843523525_3740784788169031680_n.jpg" height="200px" style="border-radius:10px; margin-top:5px;"></a>',
     'If you want to check out their adventures follow <a href="https://www.instagram.com/otisandetta/" target="_blank">@OtisandEtta</a>',
     'Still want to learn about some of my skills 🤹 ? Or are you ready to see some cool shit 💥🔥💥?',
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'check out your skills 🤹',
              'path': 'skills'
            },
            {
              'text': 'see some of your work 💥🔥💥',
              'path': 'coolShit'
            }
          ]
       }
    ],
   skills: 
    ['So I use Sketch, Illustrator, Photoshop, After Effects, Premiere Pro, Adobe XD, Invision, and Framer',
     '<a data-fancybox="gallery" href="https://raw.githubusercontent.com/sensai5000/sensaidesign.chat/master/Screen%20Shot%202017-06-20%20at%203.10.23%20PM.png"><img src="https://raw.githubusercontent.com/sensai5000/sensaidesign.chat/master/Screen%20Shot%202017-06-20%20at%203.10.23%20PM.png" height="200" style="object-fit:cover; border-radius:10px; margin-top:5px;"></a>',
     'I can code in HTML, CSS, JS, JQuery, VueJS, ThreeJS, Processing, and Max MSP',
     '<a data-fancybox="gallery" href="https://github.com/sensai5000/sensaidesign.chat/blob/master/Screen%20Shot%202017-06-20%20at%203.21.28%20PM.png?raw=true"><img src="https://github.com/sensai5000/sensaidesign.chat/blob/master/Screen%20Shot%202017-06-20%20at%203.21.28%20PM.png?raw=true" height="200" style="object-fit:cover; border-radius:10px; margin-top:5px;"></a>',
     'Now how about you go take a look at some of my projects? ',
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'show me your projects 📱 &ensp;🖥',
              'path': 'coolShit'
            },
            {
              'text': 'nah im ready to get in touch &ensp;☎️ &ensp;📠 &ensp;✉️',
              'path': 'contact'
            }
          ]
       }
    ],
   coolShit: 
    ['This is a mobile project called CoEFFICIENT&#174; for both iOS and Android.',
     'This is a companion app to a Web based application used by large scale retail enterprises.',
     'I was the lead interaction and visual designer.',
     '<a data-fancybox="gallery" href="https://github.com/sensai5000/sensaidesign.chat/blob/master/coef_mobile_1.png?raw=true"><img src="https://github.com/sensai5000/sensaidesign.chat/blob/master/coef_mobile_1.png?raw=true" height="300" style="object-fit:cover; border-radius:10px; margin-top:5px;"></a>',
     '<a data-fancybox="gallery" href="https://github.com/sensai5000/sensaidesign.chat/blob/master/coef_mobile_2.png?raw=true"><img src="https://github.com/sensai5000/sensaidesign.chat/blob/master/coef_mobile_2.png?raw=true" height="300" style="object-fit:cover; border-radius:10px; margin-top:5px;"></a>',
     'Would you like to see another project or skip all the nonsense and get in touch with me?',
     
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'hit me with another project 💥',
              'path': 'coolShitTwo'
            },
            {
              'text': 'gimme those digits ☎️',
              'path': 'contact'
            }
          ]
       }
    ],
   coolShitTwo: 
    ['This is a web based app called Blackbox Stocks&#174;.',
     'The app is a fully-automated stock analysis tool for professional and non-professional traders',
     'I was brought in to redefine the UI and UX of the product, as well as help in the creation of some social features.',
     '<a data-fancybox="gallery" href="https://github.com/sensai5000/sensaidesign.chat/blob/master/Full_Layout_May2.png?raw=true"><img src="https://github.com/sensai5000/sensaidesign.chat/blob/master/Full_Layout_May2.png?raw=true" height="300" style="object-fit:cover; border-radius:10px; margin-top:5px;"></a>',
     'Are you ready to hit me up yet or do you want to go poke around on my full site?',
      {
        type: 'choose',
        answers: 
          [
            {
              'text': 'I need that contact info ☎️',
              'path': 'contact'
            },
            {
              'text': '<a class="noDecoration" href="http://www.sensaidesign.com/" target="_blank" style="text-decoration:none;">Lets go on a trip 🚀</a>',
              'path': 'contact'
            }
          ]
       }
    ],
   contact: 
    ['Dope. Get at me on email at <a style="color:inherit;" href="mailto:taylor@sensaidesign.com">taylor@sensaidesign.com</a>',
     'or you can connect with me on <a href="https://www.linkedin.com/in/sensaidesign/" target="_blank">LinkedIn</a>',
     'of just give me a follow on <a href="https://twitter.com/SENSAI5000" target="_blank">Twitter</a> or <a href="https://www.instagram.com/sensai5000/" target="_blank">Instagram</a> @SENSAI5000',
     'Hope you have a good day.',
     'I look forward to chatting again soon. ✌️',
      /*{
        type: 'choose',
        answers: 
          [
            {
              'text': 'software',
              'path': 'skillsSoftware'
            },
            {
              'text': 'code',
              'path': 'skillsCode'
            }
          ]
       }*/
    ],
   }, 
   {
     targetNode: '.my_chat'
   }
);
