import { ProjectClass } from './projectClass';

export function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function creatNewProject(
  id,
  image,
  name,
  description,
  technologies,
  liveLink,
  gitHub,
  projectsArray
) {
  const capstone = new ProjectClass(
    id,
    image,
    name,
    description,
    technologies,
    liveLink,
    gitHub
  );
  projectsArray.push(capstone);
}
