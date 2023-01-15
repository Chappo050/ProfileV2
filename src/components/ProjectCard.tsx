import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
const ProjectCard = ({ title, text, tags, image, website, github }: any) => {
  return (
    <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-between">
          {tags.map((text: any, key: any) => {
            return (
              <div key={key} className="badge badge-secondary">
                {text}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-10 pt-5">
          <a href={website} target="_blank" className="btn btn-ghost">
            <TfiWorld size={30}/>
          </a>
          <a href={github} target="_blank" className="btn btn-ghost">
            <BsGithub  size={30}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
