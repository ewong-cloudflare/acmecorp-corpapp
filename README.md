# acmecorp-backend

This project contains the following:

```bash
.
├── README.md
├── acmecorp-app (folder to build image: nextjs-acmecorp)
├── docker-compose.yml
└── nginx (folder to build image: nginx-acmecorp 
```

- `nextjs-acmecorp` - Image for NextJS fullstack app container
- `nginx-acmecorp` - Image for Nginx proxy

# Run container locally

1. Build both containers
    1. From within folder `acmecorp-app`, build image: `nextjs-acmecorp`. Command: `docker build -t nextjs-acmecorp . --no-cache`
    1. From within folder `nginx`, build image: `nginx-acmecorp`. Command: `docker build -t nginx-acmecorp . --no-cache`

2. From project root, run `docker compose -f docker-compose.local.yml up`
3. Access app from: `localhost:80`
4. To restart containers: `docker compose -f docker-compose.local.yml restart`
5. To destroy containers: `docker compose -f docker-compose.local.yml down`