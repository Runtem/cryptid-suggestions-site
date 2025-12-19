# Cryptid Suggestions Site
The ~~first~~ ~~second~~ ~~third~~ ~~fourth~~ ~~fifth~~ sixth attempt to make a suggestions site for Cryptid. Uses React + TypeScript + Vite.

## How to run locally

### Install these first
* Node.js (latest version)
* npm (comes with Node.js) or yarn if you're a weirdo
* Git

### Install the repo
```bash
git clone https://github.com/Runtem/cryptid-suggestions-site.git
cd cryptid-suggestions-site
```

### Install the dependencies
In the main directory, install all of the dependencies via
```bash
npm install
```
or
```bash
yarn install
```

### Run the server
This server will make the Firestore Database work. Make sure you get the serviceAccountKey.json from your Firebase project and put it in the main directory (and name it accordingly)
Then, inside of /server, run
```bash
node server.js
```

### Run the frontend
Go into /site, and then run
```bash
npm run dev
```
If you wanna do a production build, run these commands:
```bash
npm run build
npm run preview
```