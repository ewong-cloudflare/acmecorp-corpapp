# Run containers on host (VM running Debian)
Some of the commands used in this steps are specific to a certain OS - in this case, a Debian OS. 

Customize the steps accordingly, if you are using a host that runs a OS.

In general, a host environment requires the following:

- Git: To download the relevant repository
- Docker: To run the containers

## Steps

1. Create a VM with the relevant network configuration. 
   1. Note: The smallest, free tier VM is sufficient. 

2. In the VM, install `git`: `sudo apt update && sudo apt install git -yq`
   1. Verify that `git` is available: `git --version`

3. Install Docker:

    ```bash
        sudo apt update && \
        sudo apt install apt-transport-https ca-certificates curl software-properties-common -yq && \ 
        curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg &&
        echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null && \
        sudo apt update && \
        sudo apt install docker-ce docker-ce-cli containerd.io -yq && \
        sudo systemctl start docker && \
        sudo systemctl enable docker
    ```
    Verify that Docker  is available: `docker --version`

4. Download the `acmecorp-backend` repository: `git clone https://github.com/ewong-cloudflare/acmecorp-backend.git`

5. Access the directory and run the containers in the background:

    ```bash
        cd acmecorp-backend && \
        sudo docker compose up -d
    ```

# Run containers locally

1. Build both containers
    1. From within folder `acmecorp-app`, build image: `nextjs-acmecorp`. Command: `docker build -t nextjs-acmecorp . --no-cache`
    1. From within folder `nginx`, build image: `nginx-acmecorp`. Command: `docker build -t nginx-acmecorp . --no-cache`

2. From project root, run the containers as background process `docker compose -f docker-compose.local.yml up -d`
   1. (Optional) Remove the `-d` flag if you prefer foreground process
3. Access app from: `localhost:80`
4. To restart containers: `docker compose -f docker-compose.local.yml restart`
5. To destroy containers: `docker compose -f docker-compose.local.yml down`