## monorepos
- As the name suggests, a single repository (on github lets say) that holds all your frontend, backend, devops code.
A monorepo is a single repository containing multiple distinct projects, with well-defined relationships.

## Build system vs Build system orchestrator vs Monorepo framework


1. Build System
A build system automates the process of transforming source code written by developers into binary code that can be executed by a computer. For JavaScript and TypeScript projects, this process can include transpilation (converting TS to JS), bundling (combining multiple files into fewer files), minification (reducing file size), and more. A build system might also handle running tests, linting, and deploying applications.
eg : npm run build builds whole project into 1 file.

2. Build System Orchestrator
TurboRepo acts more like a build system orchestrator rather than a direct build system itself. It doesn't directly perform tasks like transpilation, bundling, minification, or running tests. Instead, TurboRepo allows you to define tasks in your monorepo that call other tools (which are the actual build systems) to perform these actions. 
These tools can include anything from tsc, vite etc
- does monorepo and as well as manages build sequentially.

3. Monorepo Framework
A monorepo framework provides tools and conventions for managing projects that contain multiple packages or applications within a single repository (monorepo). This includes dependency management between packages, workspace configuration.


## turbo
npx create-turbo@latest
- with tailwind 
npx create-turbo@latest -e with-tailwind
 

## create a compo in ui
update package.json
then import 