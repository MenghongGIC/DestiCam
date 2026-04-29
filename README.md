# SolidStart

Everything you need to build and deploy Solid project, powered by [solid-start](https://start.solidjs.com);

Demo: https://desticam.up.railway.app

## Installation

- Download NodeJS (Required version >= 24):
https://nodejs.org/en/download
- Install [bun](https://bun.com/) runtime: 
```bash
# Windows
powershell -c "irm bun.sh/install.ps1 | iex"

# MacOS/Linux
curl -fsSL https://bun.sh/install | bash
```


## Clone Github Repo
```bash
git clone https://github.com/MenghongGIC/DestiCam
cd DestiCam
```


## Create your own Git Branch
***[Important]** Before you start coding.

Make sure to create a new branch and not edit directly to main branch.

This to prevent merge conflict.

```bash
# Show list of available branch
git branch

# Create branch example
git branch "sophea"

# Switch to your own branch
git checkout "sophea"

# Push code changes to your branch (We will merge later via web)
# Using `--all` is not recommended. Please just add only files/folder that u changes.
git add "{file/folder path or use `--all` to add all changes}" # Example: git add --all
git commit -m "{Type anything that you changes. Make it Short}"
git push origin "sophea"
```

## How to pull update changes from main branch or other branch?
***[Important]** Before pulling update from other branch. 

Make sure to push codes to your branch or copy your unstages codes to somewhere else because this might replace your existing codes.
```bash
git pull origin "{branch name}" #Example: git pull origin main

# Make sure to do this command after everytime you pull from other branch
bun install
```


## Install dependencies

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
bun start
```

