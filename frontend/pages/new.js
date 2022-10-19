import React, { useEffect, useState } from "react";

import NavBar from "../components/NavBar";

import Head from "next/head";

import axios from "axios";

import styles from "../styles/newTask.module.css";

function newTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      <Head>
        <title>Create Task</title>
      </Head>
      <NavBar></NavBar>

      <div className={styles.main}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://127.0.0.1:8000/api/tasks/", {
              name: title,
              description: description,
              done: done,
            });


            setTitle("")
            setDescription("")
            setDone(false)
          }}
        >
          <label htmlFor="title" className={styles.title_label}>
            Title:{" "}
          </label>
          <input
            className={styles.title}
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label className={styles.label} htmlFor="description">
            Description:{" "}
          </label>
          <textarea
            className={styles.description}
            name="description"
            id="description"
            cols="30"
            value={description}
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <div>
            <input
              className={styles.done}
              type="checkbox"
              name="done"
              id="done"
              value={done}
              onChange={(e) => {
                setDone(e.target.checked);
                console.log(e.target.checked);
              }}
            />

            <label className={styles.label_done} htmlFor="done">
              Done
            </label>
          </div>
          <div className={styles.buttons}>
            <input type="submit" value="Send" className={styles.button} />
            <input type="reset" value="Reset" className={styles.button} />
          </div>
        </form>
      </div>
    </>
  );
}

export default newTask;
