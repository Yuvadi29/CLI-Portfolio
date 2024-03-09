import React from "react";
const github_username = "Yuvadi29";
// const discord_usertag = ''
// const discord_userid = ''
const email = "letstalkaditya@gmail.com";

const projects = [
    "rohansx/doctalyzer",
    "rohansx/companion-ai",
    "rohansx/vercel-clone",
    "rohansx/informatician",
    "rohansx/WAVD",
    "rohansx/xmail",
    "rohansx/paradox",
    "rohansx/npx-rohan",
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
        <p>Yo! I'm a full stack developer.</p>
        <p>
            I've got intermediate experience with{" "}
            <span className="highlighted">JavaScript</span> and{" "}
            <span className="highlighted">Node.js</span>.
        </p>
        <p>
            I've been doing <span className="highlighted">full stack devlopment</span>{" "}
            for a couple of years now. Currently, I'm learning latest techstack such
            as <span className="highlighted">Next.js</span> and{" "}
            <span className="highlighted">PostgreSQL</span>
        </p>
        <p>
            Aside from that, I have basic knowledge of{" "}
            {/* <span className="highlighted">python</span>,{" "} */}
            <span className="highlighted">java</span>,{" "}
            <span className="highlighted">git</span> and{" "}
            <span className="highlighted">shell scripting.</span>
        </p>
    </>
);

const resume = {
    // link: "https://rohan.sh/resume",
    link: "https://bit.ly/rohansxcv",
    description: "My resume",
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