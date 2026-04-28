import { Component } from "solid-js";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button; 