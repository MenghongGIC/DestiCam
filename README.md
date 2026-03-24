# SolidStart

Everything you need to build and deploy Solid project, powered by [solid-start](https://start.solidjs.com);

## Clone Github Repo
Make sure you clone to directory/folder that dont have space
- `D:\Codes\learning\DestiCam` ✔️
- `D:\Codes\learning with space\DestiCam` ❌
```bash
git clone https://github.com/MenghongGIC/DestiCam
```


## Installation

Download NodeJS (Required version >= 24):
https://nodejs.org/en/download

Install [bun](https://bun.com/) runtime: 
```bash
# Windows
powershell -c "irm bun.sh/install.ps1 | iex"

# MacOS/Linux
curl -fsSL https://bun.sh/install | bash
```
Install dependencies

```bash
cd DestiCam
bun install

# or
cd DestiCam
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
bun start
```
