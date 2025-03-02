This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Working in Development

### Option 1: Getting started with local development (with Docker)

The steps below are meant for running a dockerized NextJS for local development. This will expose the app at port 3000.

In production, the app is only accessible via the Nginx container at port 80 (and eventually 443).

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
2. Build image: `docker build -t nextjs-acmecorp . --no-cache`.

### Option 2: Getting started with local development (without Docker)

> [!note]
> This section is for you if you are making customization. Once you do, considering publishing the image containing the changes.

Note that this option requires pre-requisites such as: `node`, `npm` in your local machine.

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Publish image

### Pre-reqs

1. A registry for image hosting - We are hosting it on [R2](https://github.com/cloudflare/serverless-registry). By meeting this requirement, you will be able to provide the value for the following variables that will be used in the remaining publishing steps:
   1. `REGISTRY_URL`
   2. `DOCKER_USERNAME`
   3. `DOCKER_PASSWORD`

### Step 1: Setup the credentials used for image registry

```bash
    export REGISTRY_URL="<YOUR-DOMAIN>" \
    echo <DOCKER_PASSWORD> | docker login --username <DOCKER_USERNAME> --password-stdin $REGISTRY_URL
```


### Step 2: Build image

Ensure that you are in the `acmecorp-app` directory.

```bash
    docker build -t nextjs-acmecorp . --no-cache
```

### Step 3: Tag the image

```bash
    docker tag nextjs-acmecorp:latest $REGISTRY_URL/nextjs-acmecorp:latest
```

### Step 4: Publish to R2 🎉

```bash
    docker push $REGISTRY_URL/nextjs-acmecorp:latest
```

## Validate that the image is successfully published

### Step 1: So that the test is valid, let's remove the image from the same registry

```bash
    docker rmi nextjs-acmecorp:latest $REGISTRY_URL/nextjs-acmecorp:latest
```

### Step 2: Now test pulling the image

```bash
    docker pull $REGISTRY_URL/nextjs-acmecorp:latest
```