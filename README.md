# React Router Templates

Starter templates for React Router projects, with the tooling I usually reach for already wired up.
Each template lives in its own directory and works as a `create-react-router` template.


## Usage

Scaffold a new project by pointing `create-react-router` at this repo and the template directory you want:

```sh
npx create-react-router@latest my-app --template christophgockel/react-router-templates/basic
```

Swap `basic` for any other template directory.
The command copies the files into `my-app`. Then run `npm install` inside it.


## Templates

### Basic

Server-rendered React Router app on a custom Express server.
This is the bare minimum to get a project running with the tooling already in place.


## Tooling

Each template builds on the same core toolchain:

- TypeScript
- Biome for formatting and linting
- Vitest and Testing Library
- A React Router route linter
- Tailwind
- A custom Express server
- Docker


## Origin

The templates are based on React Router's `node-custom-server` template, scaffolded with:

```sh
npx create-react-router@latest ./basic --no-git-init --no-install --template remix-run/react-router-templates/node-custom-server
```

Then extended to match the tooling and file structure I prefer and recommend.

