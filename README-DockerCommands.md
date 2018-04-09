# Dockerized HROS_Payroll

## Build the docker image
docker build -t nginx-hrospayroll .

## Create and run a container
docker run -d --rm -p 8002:80  --name nginx-hrospayroll-app nginx-hrospayroll

## To inspect the contents of the running container
docker exec -it nginx-hrospayroll-app sh

# View the logs
docker logs nginx-hrospayroll-app

## To kill the running container
docker kill nginx-hrospayroll-app

## To remove the image created by the Dockerfile
docker rmi nginx-hrospayroll-app

To tag and commit
```
docker tag nginx-hrospayroll chrispauley/nginx-hrospayroll
 - create the repo at docker hub
docker push chrispauley/nginx-hrospayroll

- login to aws
docker pull chrispauley/nginx-hrospayroll

docker run -d --rm -p 8006:80  --name nginx-hrospayroll-app chrispauley/nginx-hrospayroll

http://ec2-54-210-221-125.compute-1.amazonaws.com:8006/index.html
```
