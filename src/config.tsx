import React from "react";
import Markdown from "react-markdown";


const github_username = "Yuvadi29";
// const discord_usertag = ''
// const discord_userid = ''
const email = "letstalkaditya@gmail.com";

const projects = [
    "Yuvadi29/Youtube-Clone",
    "Yuvadi29/Netflix-Clone",
    "Yuvadi29/FilmPire-AI-Powered-Movie-App",
    "Yuvadi29/StartUpProject",
    "Yuvadi29/AmazonClone",
    // "rohansx/xmail",
    // "rohansx/paradox",
    // "rohansx/npx-rohan",
];

const links = [
    {
        name: "GitHub",
        icon: "fab fa-fw fa-github",
        link: "https://github.com/Yuvadi29",
        description: "My profile on GitHub",
    },
    {
        name: "Linkedin",
        icon: "fab fa-fw fa-linkedin",
        link: "www.linkedin.com/in/adityat1702",
        description: "My profile on Linkedin",
    },

    {
        name: "Youtube Channel",
        icon: "fa fa-youtube-play",
        link: "https://www.youtube.com/@Coding_adda",
        description: "Youtube Channel",
    },
    {
        name: "Blog Page",
        icon: "fa fa-pencil",
        link: "https://codingadda.hashnode.dev/",
        description: "My Channel's Blog Page",
    },
    // {
    //   name: "Discord",
    //   // link: `https://discord.com/users/${discord_userid}`,
    //   icon: "fab fa-fw fa-discord",
    //   // description: `${discord_usertag} | Add me as friend!`,
    // },

    {
        name: "E-mail",
        icon: "fas fa-fw fa-at",
        link: `mailto:${email}`,
        description: "Lets get in touch!",
    },
];

const info = (
    <>

        <span className="highlighted">
            🚀 Full-Stack Developer | MERN Enthusiast | Content Creator 🌐
        </span>

        <p>
            A passionate and results-driven Full-Stack Developer with a knack for crafting robust and scalable web applications. My journey in the coding realm has led me to master the
            &nbsp;<span className="highlighted">
                MERN (MongoDB, Express.js, React, Node.js)
            </span>
            stack,
            where I weave together front-end finesse with back-end brilliance.
        </p>

        <p>

            🚀 What Sets Me Apart:
            I thrive on turning complex ideas into clean, efficient, and user-friendly solutions. Whether it's building scalable APIs, designing intuitive user interfaces, or optimizing performance, I bring a holistic approach to every project.
        </p>

        🛠️ Tech Toolbox: <br />
        <Markdown >

            ![C](https://skillicons.dev/icons?i=c)
            ![HTML5](https://skillicons.dev/icons?i=html)
            ![CSS3](https://skillicons.dev/icons?i=css)
            ![JavaScript](https://skillicons.dev/icons?i=js)
            ![Python](https://skillicons.dev/icons?i=python)
            ![Java](https://skillicons.dev/icons?i=java)

            ![Bootstrap](https://skillicons.dev/icons?i=bootstrap)
            ![NodeJS](https://skillicons.dev/icons?i=nodejs)
            ![ExpressJs](https://skillicons.dev/icons?i=express)
            ![React](https://skillicons.dev/icons?i=react)
            ![Vite](https://skillicons.dev/icons?i=vite)
            ![Next JS](https://skillicons.dev/icons?i=nextjs)
            ![Flask](https://skillicons.dev/icons?i=flask)
            ![Material UI](https://skillicons.dev/icons?i=materialui)
            ![Tailwind](https://skillicons.dev/icons?i=tailwind)


            ![Visual Studio Code](https://skillicons.dev/icons?i=vscode)


            ![Git](https://skillicons.dev/icons?i=git)
            ![GitHub](https://skillicons.dev/icons?i=github)

            ![Netlify](https://skillicons.dev/icons?i=netlify)
            ![Heroku](https://skillicons.dev/icons?i=heroku)
            ![Vercel](https://skillicons.dev/icons?i=vercel)

            ![MongoDB](https://skillicons.dev/icons?i=mongodb)
            ![MySQL](https://skillicons.dev/icons?i=mysql)
            ![Firebase](https://skillicons.dev/icons?i=firebase)

            ![Postman](https://skillicons.dev/icons?i=postman)
            ![GraphQl](https://skillicons.dev/icons?i=graphql)
            ![Bash](https://skillicons.dev/icons?i=bash)
            ![AWS](https://skillicons.dev/icons?i=aws)
            ![Adobe Premiere Pro](https://skillicons.dev/icons?i=pr)
            ![Adobe After Effects](https://skillicons.dev/icons?i=ae)

            ![Linux](https://skillicons.dev/icons?i=linux)
        </Markdown>
    </>
);

const resume = {
    // link: "https://rohan.sh/resume",
    link: "https://bit.ly/4c5CI4Z",
    description: "My Resume ",
};

export {
    github_username,
    //   discord_usertag,
    //   discord_userid,
    email,
    projects,
    links,
    resume,
    info,
};