// Modules
import { createSignal } from "solid-js";
import { Meta, Title } from "@solidjs/meta";

// Styles
import "./Counter.css";



export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (<>
    <Title>
      Cool Couter Title
    </Title>


    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  </>);
}
