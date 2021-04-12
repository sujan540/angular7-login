# angular-login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Docker build
`ng build --prod`
`docker build -t angular-login-image .`
`docker image ls`
`docker run --name angular-login-app-container -d -p 8001:80 angular-login-image`

`FROM nginx:1.17.1-alpine`
`COPY nginx.conf /etc/nginx/nginx.conf`
`COPY /dist/aston-villa-app /usr/share/nginx/html`
This simple Dockerfile will tell Docker to do three things:
first to get a nginx Docker image from Docker Hub tagged with 1.17.1-alpine (it’s like a version number),
then copy-paste the default nginx configuration,
and finally copy-paste the compiled application (we done it in previous step) to the container.
