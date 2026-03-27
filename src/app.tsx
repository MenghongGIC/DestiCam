import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createContext, createSignal, onMount, onCleanup } from "solid-js";
import type { Accessor } from "solid-js";
import "./app.css";

export const GlobalContext = createContext<{ 
  innerHeight: Accessor<number>; 
  innerWidth: Accessor<number>
}>({
  innerHeight: () => 0,
  innerWidth: () => 0
});

export default function App() {
  const [innerHeight, setInnerHeight] = createSignal(0);
  const [innerWidth, setInnerWidth] = createSignal(0);

  onMount(() => {
    const handler = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };
    handler();

    window.addEventListener("resize", handler);
    onCleanup(() => window.removeEventListener("resize", handler));
  });

  return (
    <GlobalContext.Provider value={{ innerHeight, innerWidth }}>
      <Router
        root={props => (
          <MetaProvider>
            <Title>DestiCam</Title>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </GlobalContext.Provider>
  );
}
