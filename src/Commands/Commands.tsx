import React, { useEffect, useState } from 'react'
import styles from './Commands.module.scss';
import axios from 'axios';
import { Command, Commands } from '../typings/index.d';
import ListElements from '../ListElem/ListElements';
import { info, links } from '../config';

// interface AppData {
//     title: string;
//     url: string;
//     explanation: string;
// }

const HistoryCommand = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        axios
            .get(`https://history.muffinlabs.com/date/${month}/${day}`)
            .then((response) => {
                setEvents(response.data.data.Events);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching historical events:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading..</div>

    return (
        <ul>
            {events.map((event: {
                year: string;
                text: string;
            }, index: number) => (
                <li key={index}>
                    <strong>{event.year}</strong>
                    {event.text}
                </li>
            ))}
        </ul>
    )
}

const FutureCommand = () => {
    const [futureImageUrl, setFutureImageUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your image URL or API endpoint
        const imageUrl =
            "https://res.cloudinary.com/da6jt8q7s/image/upload/v1708936852/future_lkv1fd.jpg";
        setFutureImageUrl(imageUrl);
        setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;
    return (
        <div className={styles.imageContainer}>
            <img
                src={futureImageUrl}
                alt="Glimpse of the Future"
                className={styles.catImage + " " + styles.catImageContainerImage}
            />
        </div>
    );
};

// const MemeCommand = () => {
//     const [memeUrl, setMemeUrl] = useState("");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios
//             .get("https://www.reddit.com/r/dankmemes/top/.json?limit=50")
//             .then((response) => {
//                 const posts = response.data.data.children;
//                 const filteredPosts = posts.filter(
//                     (post: any) => post.data.post_hint === "image"
//                 );
//                 const randomPost =
//                     filteredPosts[Math.floor(Math.random() * filteredPosts.length)];
//                 setMemeUrl(randomPost.data.url);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching meme:", error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     return (
//         <div className={styles.memeImageContainer}>
//             <img src={memeUrl} alt="Random Meme" className={styles.memeImage} />
//         </div>
//     );
// };

const rawCommands: Command[] = [
    {
        name: "ls",
        icon: "fas fa-fw fa-question-circle",
        description: "List down all available commands except 'ls' and 'info'",
        execute(app) {
            const { commands } = app.state;
            return (
                <>
                    Available commands:
                    {[...commands.values()]
                        .filter((cmd) => cmd.name !== "ls" && cmd.name !== "info")
                        .map(({ icon, name, description }, key) => (
                            <ListElements
                                key={key}
                                icon={icon}
                                name={name}
                                description={description}
                                help
                            />
                        ))}
                </>
            );
        },
    },

    {
        name: "info",
        icon: "fas fa-fw fa-info-circle",
        description: "Show information about me",
        execute(app) {
            const { userDataLoaded, userData } = app.state;
            if (!userDataLoaded) return <>sh: user data could not be fetched</>;
            const { avatar_url, login, name, bio } = userData;
            return (
                <div className={styles.infoWrapper}>
                    <div className={styles.infoInner}>
                        <img
                            src={avatar_url}
                            className={styles.avatar}
                            alt="GitHub avatar"
                        />
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <strong>{name}</strong> <span className="muted">@{login}</span>
                            </div>
                            <em className={styles.bio}>"...{bio}"</em>
                            <div className={styles.info}>{info}</div>
                        </div>
                    </div>

                </div>
            );
        },
    },
    {
        name: "whoami",
        icon: "fas fa-fw fa-info-circle",
        description: "Show information about me",
        execute(app) {
            const { userDataLoaded, userData } = app.state;
            if (!userDataLoaded) return <>sh: user data could not be fetched</>;
            const { avatar_url, login, name, bio } = userData;
            return (
                <div className={styles.infoWrapper}>
                    <div className={styles.infoInner}>
                        <img
                            src={avatar_url}
                            className={styles.avatar}
                            alt="GitHub avatar"
                        />
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <strong>{name}</strong> <span className="muted">@{login}</span>
                            </div>
                            <em className={styles.bio}>"...{bio}"</em>
                            <div className={styles.info}>{info}</div>
                        </div>
                    </div>


                </div>
            );
        },
    },
    {
        name: "projects",
        icon: "fas fa-fw fa-tools",
        description: "Display a list of my major projects",
        execute(app) {
            const { projectDataLoaded, projectData } = app.state;
            if (!projectDataLoaded)
                return <>Aditya@Dev: project data could not be fetched</>;
            return (
                <>
                    {projectData.map(
                        ({ name, html_url, description }: any, key: number) => (
                            <ListElements
                                key={key}
                                icon={"fab fa-fw fa-github-alt"}
                                name={name}
                                link={html_url}
                                description={description}
                            />
                        )
                    )}
                </>
            );
        },
    },
    {
        name: "links",
        icon: "fas fa-fw fa-link",
        description: "Get all my important links and socials",
        execute() {
            return (
                <>
                    {links.map(({ icon, name, link, description }, key) => (
                        <ListElements
                            key={key}
                            icon={icon}
                            name={name}
                            link={link}
                            description={description}
                        />
                    ))}
                </>
            );
        },
    },
    {
        name: "resume",
        icon: "fas fa-fw fa-file",
        description: "Get a link to my resume",
        execute() {
            return (
                <ListElements
                    icon="fas fa-fw fa-file"
                    name="Resume"
                    link="https://bit.ly/rohanxcv"
                    description="Click to see my resume!"
                />
            );
        },
    },

    // {
    //     name: "space",
    //     icon: "fas fa-fw fa-space-shuttle",
    //     description:
    //         "Display an astronomy picture of the day and facts about space from NASA",
    //     execute(app) {
    //         return <SpaceCommand />;
    //     },
    // },

    {
        name: "history",
        icon: "fas fa-fw fa-history",
        description:
            "It shows significant historical events that happened on this day!",
        execute(app) {
            return <HistoryCommand />;
        },
    },

    // {
    //     name: "meme",
    //     icon: "fas fa-fw fa-laugh", // Use an appropriate icon
    //     description: "Don't type or you might get offended!",
    //     execute(app) {
    //         return <MemeCommand />;
    //     },
    // },

    // {
    //     name: "cat",
    //     icon: "fas fa-fw fa-cat",
    //     description: "Click to see something interesting!",
    //     execute(app) {
    //         return <CatCommand />;
    //     },
    // },

    {
        name: "future",
        icon: "fas fa-fw fa-image", // Use an appropriate icon
        description: "See a glimpse of the future!",
        execute(app) {
            return <FutureCommand />;
        },
    },

    {
        name: "clear",
        icon: "fas fa-fw fa-eraser",
        description: "Clear terminal screen",
        execute(app) {
            app.setState({
                ...app.state,
                record: [],
            });
        },
    },
];

const commands: Commands = new Map(rawCommands.map((cmd) => [cmd.name, cmd]));

export default commands;