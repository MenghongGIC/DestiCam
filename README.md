# SolidStart

Everything you need to build and deploy Solid project, powered by [solid-start](https://start.solidjs.com);

## Installing

Install [bun](https://bun.com/) runtime: 
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```
Install dependencies

```bash
bun install

# or
bun i
```

## Developing

```bash
bun dev

# or start the server and open the app in a new browser tab
bun dev -- --open
```

## Building

```bash
bun run build

# Preview Testing (Do not run this in production)
bun preview
```


## Deploy Production

```bash
bun .output/server/index.mjs
```
