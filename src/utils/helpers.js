import ReactGA from 'react-ga';
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

// Handle Link Clicks
export const handleLinkClick = (e, category, action, label) => {
  // This event handler function accepts additional parameters for category, action, and label.
  e.preventDefault(); // Prevent the default behavior of opening the link immediately

  ReactGA.event({
    category,
    action,
    label,
  });

  // Open the link in a new tab or window manually
  window.open(e.currentTarget.href, '_blank');
};
