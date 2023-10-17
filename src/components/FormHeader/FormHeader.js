import "./FormHeader.css";

export default function FormHeader({title, description}) {
  return (
    <div className="form-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
