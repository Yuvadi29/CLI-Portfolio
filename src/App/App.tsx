import React, { Component, createRef, RefObject } from "react";
import styles from "./App.module.scss";
import commands from "../Commands/Commands";
import { projects, github_username } from "../config";
import { AppState } from "../typings/index.d";
import InputManager from "../InputManager/InputManager";
import Loader from "../Loader/loader";

class App extends Component<{}, AppState> {
  mainRef: RefObject<any>;
  handleExecute: (arg: string) => void;

  constructor(props: any) {
    super(props);
    this.state = {
      record: [],
      commands: commands,
      projectDataLoaded: false,
      userDataLoaded: false,
    };

    this.mainRef = createRef();

    this.handleExecute = (arg) => {
      const { commands } = this.state;
      const commandName = arg.trim();
      let output;
      if (!commandName) output = <></>;
      else if (!commands.has(commandName))
        output = <>Aditya@Dev: command not found: {commandName}</>;
      else output = commands.get(commandName)?.execute(this);
      if (output)
        this.setState({
          ...this.state,
          record: [
            ...this.state.record,
            {
              command: commandName,
              output: output,
            },
          ],
        });
    };
  }

  async componentDidMount() {
    try {
      // Fetch project data from github
      const promises = projects.map((project) =>
        fetch(`https://api.github.com/repos/${project}`).then((res) => res.json())
      );
      const projectData = [];
      for (const promise of promises) projectData.push(await promise);
      const userData = await fetch(
        `https://api.github.com/users/${github_username}`
      ).then((res) => res.json());
      this.setState({
        ...this.state,
        projectDataLoaded: true,
        projectData: projectData,
        userDataLoaded: true,
        userData: userData,
      });
    } catch (error) {
      console.log("Error Fetching Data: ", error);
    }
  }

  componentDidUpdate(_: any, prevState: AppState) {
    // auto scroll
    if (
      prevState.record.length !== this.state.record.length &&
      this.mainRef?.current
    )
      this.mainRef.current.scrollTo({
        top: this.mainRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
  }

  render() {
    const { record } = this.state;
    return (
      <div className={styles.wrapper}>
        <Loader />
        <div className={`${styles.window} main-content`}>
          <div className={styles.titleBar}>
            <div className={styles.dotHolder}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.titleHeader}>
              <i className="fa-fw fas fa-code"></i> Aditya@Dev:~
            </div>
          </div>
          <div ref={this.mainRef} className={styles.mainContent}>
            {record.map(({ command, output }, index) => (
              <div key={index}>
                <span className={styles.promptPrefix}>
                  <span>{github_username}</span>@<span>sh:</span>
                  ~${" "}
                  <span
                    className={
                      commands.has(command)
                        ? styles.validCommand
                        : styles.invalidCommand
                    }
                  >
                    {command}
                  </span>
                </span>
                <div>{output}</div>
              </div>
            ))}
            <InputManager handleExecute={this.handleExecute} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;