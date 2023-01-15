const Projects = ({isToggled, setToggled}:any) => {
  return (
    <div className="form-control" onClick={() => setToggled()}>
      <label className="label cursor-pointer">
        <span className="label-text">English/Japanese</span>
        <input  type="checkbox" className="toggle toggle-md" checked={isToggled} />
      </label>
    </div>
  );
};

export default Projects;
