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
### to setup generate compo
copy turbo directory in ui
update package.json sxripts   "generate:component": "turbo gen react-component" 

## create a compo in ui
update package.json
then import 
or 
npm run generate:component


## adding react to turbo projrct
in apps dir 
npm create vite@latest
cd ..
npm i - npm i in parent dir 
add "@repo/ui": "*" in package.json 


## add backend folder 

- tsconfig or simply tsc --init 
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "lib": ["ES2015"],
    "module": "NodeNext", 
    "outDir": "./dist"
  },
  "exclude": ["node_modules" , "dist"],
  "include": ["."]
}

-  install express
- update package.json 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build" : "tsc -b",
    "dev"  : "tsc -b && node dist/index.js"
  },

## npm run dev starts all 4 apps at once 

## common in packages for both fend and bend 
package.json : 
{
  "name": "@akash09/common",
  "version": "1.0.0",
  "main": "index.js",
  "exports": {
    "./urls" : "/urls.ts"
  },
  "dependencies": {
    "@akash09/common" : "*"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
cd ..
npm i

> cyclic depemdicies
{
  "name": "@akash09/common",
  "version": "1.0.0",
  "main": "index.js",
  "exports": {
    "./urls": "./urls.js"   // Ensure it's compiled to JavaScript
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

###  no need to compile to js in common as it gets at end again
if error 
use esbuild for transpiling ts to js in comon module .


