import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

import NavigationBar from "~/components/NavigationBar";


export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <NavigationBar />
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
