# Nginx

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

Ensure that you are in the `nginx` directory.

```bash
    docker build -t nginx-acmecorp . --no-cache
```

### Step 3: Tag the image

```bash
    docker tag nginx-acmecorp:latest $REGISTRY_URL/nginx-acmecorp:latest
```

### Step 4: Publish to R2 🎉

```bash
    docker push $REGISTRY_URL/nginx-acmecorp:latest
```

## Validate that the image is successfully published

### Step 1: So that the test is valid, let's remove the image from the same registry

```bash
    docker rmi nginx-acmecorp:latest $REGISTRY_URL/nginx-acmecorp:latest
```

### Step 2: Now test pulling the image

```bash
    docker pull $REGISTRY_URL/nginx-acmecorp:latest
```