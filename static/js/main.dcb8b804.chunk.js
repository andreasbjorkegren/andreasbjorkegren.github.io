(this["webpackJsonpzen-pad"]=this["webpackJsonpzen-pad"]||[]).push([[0],{47:function(e,a,t){e.exports=t.p+"static/media/angular.1a632d2b.png"},48:function(e,a,t){e.exports=t.p+"static/media/cSharp.afa245f5.svg"},49:function(e,a,t){e.exports=t.p+"static/media/dot-net.da339832.png"},50:function(e,a,t){e.exports=t.p+"static/media/sql-server.004741d0.png"},51:function(e,a,t){e.exports=t.p+"static/media/react.9d3af6fe.png"},52:function(e,a,t){e.exports=t.p+"static/media/google.9d720cf0.png"},55:function(e,a,t){e.exports=t(76)},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),o=t.n(r),s=t(17);t(60);var i=t(84);function c(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),m=c[0],u=c[1],d=Object(n.useState)("padInput"),h=Object(s.a)(d,2),p=h[0],g=h[1],E=function(e,a){var t=Object(n.useState)(e),l=Object(s.a)(t,2),r=l[0],o=l[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){o(e)}),a);return function(){clearTimeout(t)}}),[e]),r}(t,5e3);function f(){r(""),g("padInput")}return Object(n.useEffect)((function(){E&&(m||(console.log("debounced and resetting",E),u(!0),g("padInput hidden"),setTimeout(f,5e3),u(!1)))}),[E]),l.a.createElement(i.a,null,l.a.createElement(i.a.Body,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"zen-h"},"ZenPad"),l.a.createElement("p",{className:"zen-p"},"Write down your thoughts that you need to get out of your head and watch them fade away."),l.a.createElement("div",{className:"padWrapper"},l.a.createElement("textarea",{value:t,type:"text",rows:"15",autoFocus:!0,className:p,onChange:function(e){return r(e.target.value)}})))))}t(61);var m=t(35),u=t(6),d=t(83),h=t(85),p=t(82);t(62);function g(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(u.g)();return Object(n.useEffect)((function(){console.log(o.pathname),r(o.pathname)}),[]),l.a.createElement("div",null,l.a.createElement(d.a,{variant:"dark",expand:"lg"},l.a.createElement(d.a.Brand,null,"Andreas Bj\xf6rkegren"),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(h.a,{className:"mr-auto",activeKey:t,onSelect:function(e){return r(e)}},l.a.createElement(h.a.Link,{href:"#/home"},"Home"),l.a.createElement(h.a.Link,{href:"#/about"},"About"),l.a.createElement(h.a.Link,{href:"#/resume"},"Resum\xe9"),l.a.createElement(p.a,{title:"Portfolio",id:"basic-nav-dropdown"},l.a.createElement(p.a.Item,{href:"#/portfolio/zen-demo"},"ZenPad online demo"),l.a.createElement(p.a.Item,{href:"https://simmer.io/@greenbjork/aerohero",target:"blank"},"Aero Hero"),l.a.createElement(p.a.Item,{href:"https://soundcloud.com/user-396048806",target:"blank"},"SoundCloud"),l.a.createElement(p.a.Divider,null),l.a.createElement(p.a.Item,{disabled:"disabled"},"More to come.."))),l.a.createElement(h.a,{defaultActiveKey:"mailto:andreas.bjorkegren.public@gmail.com"},l.a.createElement(h.a.Link,{href:"mailto:andreas.bjorkegren.public@gmail.com"},"Contact me")))))}t(71);function E(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(i.a,null,l.a.createElement(i.a.Body,null,l.a.createElement("h3",{className:"home-h3"},"Welcome to my blog"),l.a.createElement("p",null,"The purpose of this blog is to showcase my free time projects and provide my resum\xe9 for those interested. There might occasionally be posts about my thoughts and/or experiences in my day to day life as a developer. "))))))}t(72);var f=t(81),y=(t(73),t(47)),b=t.n(y),v=t(48),w=t.n(v),I=t(49),k=t.n(I),N=t(50),S=t.n(N),j=t(51),T=t.n(j),A=t(52),O=t.n(A);function x(){return l.a.createElement("div",null,l.a.createElement("h3",{className:"resume-h3"},"Skills"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement(f.a,{as:"li"},l.a.createElement("img",{width:64,height:64,className:"mr-3",src:b.a,alt:"Angular logo"}),l.a.createElement(f.a.Body,null,l.a.createElement("h5",null,"Angular 8+"),l.a.createElement("p",null,"I have worked with angular to produce web applications for administrating Espresso House pos inventory management. I was also a part of creating the back office for Espresso House global loyalty program."))),l.a.createElement(f.a,{as:"li"},l.a.createElement("img",{width:64,height:64,className:"mr-3",src:k.a,alt:".Net core logo"}),l.a.createElement(f.a.Body,null,l.a.createElement("h5",null,".NET Core"),l.a.createElement("p",null,"We used .NET Core 2.0 to build the backend for Espresso House's global loyalty program. It includes everything from client side API:s to database management. Our next task is to upgrade existing solutions to most recent .NET Core. "))),l.a.createElement(f.a,{as:"li"},l.a.createElement("img",{width:64,height:64,className:"mr-3",src:w.a,alt:"C# logo"}),l.a.createElement(f.a.Body,null,l.a.createElement("h5",null,"C#"),l.a.createElement("p",null,"Using C# I have created console applications that run scheduled batch jobs supporting Espresso House global loyalty program."))),l.a.createElement(f.a,{as:"li"},l.a.createElement("img",{width:64,height:64,className:"mr-3",src:S.a,alt:"MS SQL Server logo"}),l.a.createElement(f.a.Body,null,l.a.createElement("h5",null,"MS SQL Server"),l.a.createElement("p",null,"I have been using MS SQL Server for creating databases and tables that I then have used in API:s and console applications. I have also worked with building and deploying integration packages."))),l.a.createElement(f.a,{as:"li"},l.a.createElement("img",{width:64,height:64,className:"mr-3",src:T.a,alt:"React logo"}),l.a.createElement(f.a.Body,null,l.a.createElement("h5",null,"React 16.0+"),l.a.createElement("p",null,"During my spare time I have looked into React and created a POC for a survey solution intended for a driving school. Also this site was created with React."))),l.a.createElement(f.a,{as:"li"},l.a.createElement("img",{width:64,height:64,className:"mr-3",src:O.a,alt:"google cert logo"}),l.a.createElement(f.a.Body,null,l.a.createElement("h5",null,"Mobile web specialist"),l.a.createElement("p",null,"In february 2020 I received my google certification. You can read about the certification ",l.a.createElement("a",{href:"https://developers.google.com/certification/mobile-web-specialist",target:"blank"},"here!"))))))}function B(){return l.a.createElement("div",null,l.a.createElement("h3",{className:"resume-h3"},"Experience"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h4",null,"2018-10 - Present"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h5",null,"Software developer - Espresso House, Stockholm")),l.a.createElement("li",null,l.a.createElement("p",null,"At the end of september 2018 our in-house development had ramped up. I found myself more and more being drawn to development after building small applications for the organization. Luckily there was a need for more resources in the development team and I was offered the role as software developer. We are a small team consisting of 2 people with up to 3 external consultants. Together we manage our backlog in Jira and also keep a close dialogue with the organization. We use splunk to monitor all of our systems and can catch errors on the fly. My everyday tasks include software development, version control (git), CI/CD, deployment and monitoring.  "))))),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h4",null,"2016-06 - 2018-10"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h5",null,"System specialist - Espresso House, Stockholm")),l.a.createElement("li",null,l.a.createElement("p",null,"After my studies I was offered the role as System specialist which simply put meant doing a bit of everything. My main task was to aid our organization when it came to acquiring and integrating new software. I was a project resource representing the IT-department. Our biggest success was implementing a new POS-system in 5 different countries and also change our WFM-system. The biggest challenge was integrating all the different systems with each other and then finally exporting all system data to our BI-system."))))),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h4",null,"2014-08 - 2016-06"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h5",null,"Customer support - Espresso House, Stockholm")),l.a.createElement("li",null,l.a.createElement("p",null,"The release of Espresso House's mobile payment solutions was an incredible hit in late 2014. This resulted in a lot of users and support cases. I was responsible for answering all of our guests and helping them with technical issues regarding our app. "))))),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h4",null,"2014-02 - 2014-08"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h5",null,"Barista - Espresso House, Stockholm")),l.a.createElement("li",null,l.a.createElement("p",null,"I started at Espresso House as an extra job during my university studies. You learn everything from cleaning a caf\xe9 to handle a POS system and of course making amazing coffee. Though the main focus was always providing service to our guests."))))))}function z(){return l.a.createElement("div",null,l.a.createElement("h3",{className:"resume-h3"},"Education"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h4",null,"2016-06 Bachelor of science Stockholm University"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("h5",null,"Computer science - ERP-systems and service design")),l.a.createElement("li",null,l.a.createElement("p",null))))))}function C(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-md-12"},l.a.createElement(i.a,null,l.a.createElement(i.a.Body,null,l.a.createElement(B,null)))),l.a.createElement("div",{className:"col-lg-6 col-md-12"},l.a.createElement(i.a,null,l.a.createElement(i.a.Body,null,l.a.createElement(x,null))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement(i.a,null,l.a.createElement(i.a.Body,null,l.a.createElement(z,null))))))}t(74);function M(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(i.a,null,l.a.createElement(i.a.Body,null,l.a.createElement("h3",{className:"about-h3"},"This is Andreas Bj\xf6rkgren"),l.a.createElement("h5",null,"My philosophy"),l.a.createElement("p",null,"To summarize this 26-ish year old in one word: ",l.a.createElement("b",null,"Failure"),"."),l.a.createElement("p",null," During my whole life I've failed countless of times and it's been amazing. If someone is better than you, it's not that you are worse than them or that you are less valuable. It's all about the amount of time invested and the amount of failures you learn from. And since the only person you should compare yourself to, is yourself, it makes even more sense. For example, today you are amazing at walking. When you were a newborn, you couldn't even hold your own head up. Since you were a newborn you've put in countless of hours of falling to the ground and trying to stand up and walk. Look at you today, you don't even have to think about what leg to put in front of the other, you're amazing at doing it! I think that mindset is crucial for self-improvement, we should all strive to be amazing at stuff and never forget that failing brings us one step closer to amazing."),l.a.createElement("h5",null,"My everyday life today"),l.a.createElement("p",null,"I live a very average day to day life. I have my work during the day and then time for my family (girlfriend + our ",l.a.createElement("a",{"data-toggle":"tooltip",title:"he's the cutest rabbit in the world"},"rabbit"),") and hobbies during the evenings. I'm currently learning game development in Unity which is awesome. There's som much material and help to get online. So you can be a complete novice and actually create a game from scratch!! I also really enjoy learning new ways to develop software. Everything from the latest .Net Core to React library. I don't have a deep understanding of everything new, but I love to at least have a basic understanding of the latest mainstream software development changes or as we say in Swedish \"H\xe4nga med i sv\xe4ngarna\"."),l.a.createElement("h5",null,"More about me"),l.a.createElement("p",null,"I'm a jolly good fella born, raised and based in Stockholm, Sweden. Ever since I was a kid I've had two major interests, Music and computers/computer games."),l.a.createElement("h6",null,"Computers"),l.a.createElement("p",null,"After playing Warcraft 3 together with my friends after school, I was hooked on gaming. My interest for computers came after I put together my first computer all by myself. I didn't have much knowledge about computers back then and I was terrified when it actually came time to build it. After I've put together everything and pressed the power button \"DRUMROLL\"... the computer didn't post. It felt like my whole world crumbled. I knew it, I wasn't good enough, I couldn't possibly have the skills to build my own computer. After some more self loathing I finally decided to troubleshoot the damn thing. And a few YouTube videos later and some DRAM swapping, my first self built computer was up and running. It somehow became a metaphoric milestone in my life. This task that seemed impossible for 15-year old me, was suddenly possible. From that moment on I knew that if I just persevere and allow myself to fail I can accomplish anything I set out to do."),l.a.createElement("h6",null,"Music"),l.a.createElement("p",null,"I picked up the piano fairly quick and learned to play my favorite movie and game scores and after a while I realized that it's quite the challenge to bring a piano with you to share your music. Thus was my guitar hobby picked up. After countless of hours in front of YouTube I could learn my favorite songs and share them with the people around me (wether they liked it or not). During my later years I've also picked up music production in Ableton, and I ",l.a.createElement("b",null,"LOVE IT"),". I think it's amazing that you can create this huge music pieces straight from your mind and some practical skills in a DAW."))))))}var H=function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(g,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col"},l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/portfolio/zen-demo"},l.a.createElement(c,null)),l.a.createElement(u.b,{path:"/home"},l.a.createElement(E,null)),l.a.createElement(u.b,{path:"/about"},l.a.createElement(M,null)),l.a.createElement(u.a,{exact:!0,from:"/",to:"home"}),l.a.createElement(u.b,{path:"/resume"},l.a.createElement(C,null)))))))};t(75);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.dcb8b804.chunk.js.map