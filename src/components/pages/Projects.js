import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "./LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')


  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(()=>{
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRemoveLoading(true)
          setProjects(data);
        })
        .catch((err) => console.log(err));
    }, 3000)
  }, []);

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjects(projects.filter((project) => project.id !== id))
          setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projects</h1>
        <LinkButton to="/newproject" text="criar Projeto"></LinkButton>
      </div>
      {message && <Message type="sucess" msg={message} />}
      {projectMessage && <Message type="sucess" msg={message} />}
      <Container>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
             id={project.id}
             name={project.name}
             budget={project.budget}
             category={project?.category?.name}
             handleRemove={removeProject}
             />
          ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos</p>
          )
          }
      </Container>
    </div>
  );
}
export default Projects;
