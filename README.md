# Demo application

## Uses:

-   Apollo
-   Next.js
-   Github OAuth

## How to run locally

1.  Clone the repository.
2.  Create a Github OAuth application here: https://github.com/settings/developers
3.  Set **Authorization callback URL** to `http://localhost:3000/api/auth/gh/callback`
4.  Create `.env.local` file with the following contents:

```
GH_CLIENT_ID=your GitHub client ID
GH_CLIENT_SECRET=your GitHub client secret
```

5.  Install the dependencies

```
yarn
```

6.  Run:

```
yarn dev
```

## How to build docker image locally

Build a container:

```
yarn docker:build
```

Run the container:

```
yarn docker:run
```
