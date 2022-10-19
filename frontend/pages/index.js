import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";

import styles from '../styles/Home.module.css'

import Task from "../components/Task";

import axios from "axios";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    return async () => {
      const req = await axios.get("http://127.0.0.1:8000/api/tasks");
      setTasks(req["data"]["tasks"]);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <NavBar></NavBar>
      <main className={styles.main}>
        <ul className={styles.main_ul}>
          {tasks.map((e) => {
            console.log(e);
            return (
              <li key={e.id} className={styles.main_ul_li}>
                <Task
                  id={e.id}
                  name={e.name}
                  description={e.description}
                  done={e.done}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
