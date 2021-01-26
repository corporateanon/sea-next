# Demo application

## Live instances:

 1. Deployed to Vercel: https://sea.typescript.work
 2. Deployed to Docker Swarm cluster: https://sea.boto.space

## Uses:

-   Apollo
-   Next.js
-   Github OAuth

## First of all: Create a Github OAuth application

1. Go here: https://github.com/settings/developers.
2. Set **Authorization callback URL** to `http://localhost:3000/api/auth/gh/callback`

## How to run locally

1.  Clone the repository.
2.  Create `.env.local` file with the following contents (assuming you have created the GitHub OAuth app):

```
GH_CLIENT_ID=your GitHub client ID
GH_CLIENT_SECRET=your GitHub client secret
```

3.  Install the dependencies

```
yarn
```

4.  Run:

```
yarn dev
```

## How to build docker image locally

Build an image:

```
yarn docker:build
```

Run the container (but first create a GitHub OAuth app and put its client ID and secret to `.local.env` file as described above):

```
yarn docker:run
```
