# Available Scripts

---

In the project directory, you can run:

## `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

>Note: The web app will run with limited functionality, as there is no integration with AppSync or Cognito.

## `npm start:local`

Runs the app in development mode with **Cognito and AppSync integration**.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

>Note: This requires a *.env.local* file in the frontend source code directory, which contains
>all of the integration endpoints. The integration endpoints can be found under *Environment
>variables in the Amplify management console*.

Format of the **'.env.local'** file:

```console
REACT_APP_APPSYNC_API=
REACT_APP_REGION=
REACT_APP_USER_POOL_CLIENT_ID=
REACT_APP_USER_POOL_ID=
REACT_APP_USER_POOL_DOMAIN=
```

## `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm build`

Builds the app for production to the `build` folder.
It bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
 This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## `npm pipeline`

This will run a series of commands to lint the code using [eslint](https://eslint.org/), check code formatting
using [prettier](https://prettier.io/) and `npm audit` & `npm outdated` to run node package manager audit.

