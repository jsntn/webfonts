## Dockerized Webfonts Generator

#### What is this?
This is a webfonts generator that helps to do the TrueType Font(`.ttf`) Subset, then convert the `.ttf` to below format:
- OpenType Font(`.otf`)
- Embedded Open Type(`.eot`)
- Web Open Font Format(`.woff`)
- Scalable Vector Graphics (`.svg`)

Docker Build Command:
```
docker build -f <Name of the Dockerfile(Default is 'PATH/Dockerfile')> --rm -t <Name and optionally a tag in the 'name:tag' format> .
```

Run the Docker Image as a Container:

```
docker run --name <Name of the container> -v /var/www:/home -d <Name of the image>
```

Get started with Docker Compose:

```
webfontsGenerator:
  image: <Name of the image>
  volumes:
    - /var/www:/home
  working_dir: /home
  stdin_open: true
  tty: true
```
