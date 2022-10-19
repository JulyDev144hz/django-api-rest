import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/Task.module.css";

function Task(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [done, setDone] = useState();
  const [id, setId] = useState();

  const [show, setShow] = useState(true);

  useEffect(() => {
    return () => {
      setName(props.name);
      setDescription(props.description);
      setDone(props.done);
      setId(props.id);
    };
  }, []);

  if (!show) {
    return <></>;
  }

  return (
    <article className={styles.taskbox}>
      <span className={styles.task_name}>{name}</span>
      <p className={styles.task_description}>{description}</p>
      <div className={styles.task_buttons}>
        <button
          className={styles.task_button}
          onClick={(e) => {
            setDone(!done);
            axios.put("http://127.0.0.1:8000/api/tasks/1", { done: !done });
          }}
        >
          <Image
            className={styles.task_done_img}
            src={done ? "/checked.png" : "/unchecked.png"}
            width="32"
            height={32}
            alt={done ? "Finished" : "Pendient"}
          />
        </button>
        <button className={styles.task_button}>
          <Image
            className={styles.task_delete_img}
            src="/delete.png"
            alt="delete"
            height={32}
            width={32}
            onClick={(e) => {
              setShow(false);
              axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`)
            }}
          />
        </button>
      </div>
    </article>
  );
}

export default Task;
