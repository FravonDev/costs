import styles from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container"

function Project() {
  const { id } = useParams();
  console.log(id);

  const [showProjectForm, setShowProjectForm] = useState(false);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  const [project, setProject] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, [id]);

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <h1>Projeto: {project.name}</h1>
          <Container customClass="column">
          <div className={styles.details_container}>
            <button className={styles.btn} onClick={toggleProjectForm}>
              {!showProjectForm ? "Editar projeto" : "Fechar"}
            </button>
            {!showProjectForm ? (
              <div>
                <p>
                  <span>Project form</span> {project.category.name}
                </p>
              </div>
            ) : (
              <div>
                <p>
                  <span>Detalhes do projeto</span> R${project.budget}
                </p>
                <p>
                  <span>Total utilizado</span> R${project.cost}
                </p>
              </div>
            )}
          </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Project;