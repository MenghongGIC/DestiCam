import { Component } from "solid-js";

interface CardProps {
  image: string;
  title: string;
  description?: string;
}

const Card: Component<CardProps> = (props) => {
  return (
    <div class="card">
      <img src={props.image} alt={props.title} />
      <div class="card-body">
        <h3>{props.title}</h3>
        {props.description && <p>{props.description}</p>}
      </div>
    </div>
  );
};

export default Card;