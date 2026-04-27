/// <reference types="@solidjs/start/env" />

declare module "solid-js/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }

        interface ElementChildrenAttribute {
            children: any;
        }
    }
}