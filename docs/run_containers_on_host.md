# Run containers on host

## Pre-reqs

A host environment requires the following:

* [Git](https://github.com/git-guides/install-git): To download the relevant repository
* [Docker](https://www.docker.com/get-started/): To run the containers

## (Option 1) Run containers on VM (Debian OS)

> [!note]
> Option 1 is typically used for **demo** purposes.

Some of the commands used in this steps are specific to a certain OS - in this case, a Debian OS. 

Customize the steps accordingly, if you are using a host that runs a different OS.

### Steps

1. Create a VM with the relevant network configuration.
   1. Note: The published image is currently compatible with: `linux/arm64/v8`. On GCP, this is the [C4A series](https://cloud.google.com/compute/docs/instances/arm-on-compute).

2. In the VM, install `git`: 

   ```bash
    sudo apt update && sudo apt install git -yq
   ```
   
   Verify that `git` is available: `git --version`

3. Install Docker:

    ```bash
        # Add Docker's official GPG key:
        sudo apt-get update
        sudo apt-get install ca-certificates curl
        sudo install -m 0755 -d /etc/apt/keyrings
        sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
        sudo chmod a+r /etc/apt/keyrings/docker.asc
    ```

    ```bash
        # Add the repository to Apt sources:
        echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
        $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
        sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo apt-get update
    ```

    ```bash
        # Install latest Docker packages and start the service:
        sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -yq && \
        sudo service docker start
    ```

    Verify that Docker is available: `docker --version`

4. Clone the `acmecorp-corpapp` repository:
   
    ```bash
        git clone https://github.com/ewong-cloudflare/acmecorp-corpapp
    ```

5. Authenticate into Docker using the credentials used for R2 image registry

    ```bash
        export REGISTRY_URL="<YOUR-DOMAIN>" \
        echo <DOCKER_PASSWORD> | sudo docker login --username <DOCKER_USERNAME> --password-stdin $REGISTRY_URL
    ```

6. Access the directory and run the containers in the background:

    ```bash
        cd acmecorp-corpapp && sudo docker compose up -d
    ```

    `acmecorp-corpapp` web app is now accesssible at: `http://<ip-address>:80` 🎉

## (Option 2) Run containers on local machine

> [!note]
> Option 2 is typically used for **development and debugging** purposes.

### Steps

1. Clone the `acmecorp-corpapp` repository to your local machine:
   
    ```bash
        git clone https://github.com/ewong-cloudflare/acmecorp-corpapp
    ```

2. Ensure that Docker is **installed and running**

3. Authenticate into Docker using the credentials used for R2 image registry

    ```bash
        export REGISTRY_URL="<YOUR-DOMAIN>" \
        echo <DOCKER_PASSWORD> | docker login --username <DOCKER_USERNAME> --password-stdin $REGISTRY_URL
    ```

4. Access the directory and run the containers in the background:

    ```bash
        cd acmecorp-corpapp && docker compose up -d
    ```

    Alternatively, run as foreground process

    ```bash
        docker compose up
    ```

    `acmecorp-corpapp` web app is now accesssible at: `http://localhost:80` 🎉

5. (Optional Step): Restart containers

    ```bash
        docker compose restart
    ```

6. (Optional Step): Destroy containers

    ```bash
        docker compose down
    ```