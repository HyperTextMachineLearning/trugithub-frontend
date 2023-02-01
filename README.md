# Trugit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Prerequisites

NodeJS and Angular CLI must be installed

## 1. Important before running

After cloning
- In `/src/app/services/fetch-repos.service.ts` file, please change the `restAPIURL` property or variable to the fastapi running server's url from the backend of this project (`trugit-backend`) i.e. set it as `http://localhost:8000` .

- Please run this project in a machine **WITH** internet access, since `CDN`s are used for some resources.
- You _NEED_ the backend to be running in order to thoroughly test the frontend.

## 2. Install Dependencies

After cloning, navigate to cloned directory and run:

```sh
npm install
```

## 3. Development server | Running the project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 4. Not working / Trivial issues

- Navigating using browser's `Back` & `Forward` page does not work.
- For some reason, `Fetch` API requests do not work on Chrome version 109 on windows, rest almost on all browsers, platforms everything works.
- If a user has no `name` then few values on profile are a bit confusing, say, if a user doesn't have a name as well as twitter, then it is rendered as `" isn't on Twitter"`
- If a user exists but has no repositories, then no way is added to indicate this; possibly an if/else check can be added......
