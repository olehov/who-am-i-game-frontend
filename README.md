# WHO AM I GAME FRONTEND

## Quick setup

Prerequisites

Install [node](https://nodejs.org/uk/download/)

Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install)

1. Install dependencies

   ```bash
   yarn
   ```

2. Start dev server

   ```bash
   yarn start
   ```

   Runs the app in the development mode.
   Open http://localhost:3000 to view it in your browser.

   The page will reload when you make changes.
   You may also see any lint errors in the console.

3. Make production build

   ```bash
   yarn build
   ```

   Builds the app for production to the build folder.
   It correctly bundles React in production mode and optimizes the build for the best performance.

   The build is minified and the filenames include the hashes.
   Your app is ready to be deployed!

   See the section about deployment for more information.

4. Proxying API Requests in Development

   `"proxy": "http://localhost:4000"`

## Deploy to Heroku

Install [heroku](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

1. Create the Heroku app

   Replace $APP_NAME with the name for your unique frontend app.

   ```bash
   heroku create $APP_NAME --buildpack mars/create-react-app
   ```

2. Point the React UI app to a specific backend heroku API:

   ```bash
   heroku config:set API_URL="https://who-am-i-game-api.herokuapp.com/api"
   ```

3. Deploy

   ```bash
   git push heroku develop:main
   ```

4. Visit the app's public URL in your browser

   ```bash
   heroku open
   ```

## Code style

Just use Prettier and adhere to ESLint recommendations. It should cover 90% of cases. If in doubt, just ask others.

## Git conventions

Branch names should be prefixed with `tech/`, `feature/` or `bugfix/` followed by ticket number from Jira,
dash and a few descriptive words.  
Example: `feature/JCWAIG-19-implement-waiting-screen`

Commit messages must follow the following format:

```text
[Ticket number] [message]

[Optional body]
```

Example: `JSWAIG-19 Implement waiting screen`.  
Long example:

```text
JSWAIG-19 Implement waiting screen

* Add base layout
* Add timer
```

The message should be capped at 75 characters and must be in indefinite tense. It should read as _'\[If accepted, this commit will\] add order creation'_.

If provided, the body might include a detailed header, long description and a list of changes with bullet points, all of which are optional (you can use `*` in Markdown).  
Please, DO NOT use `fixes`, `applied fixes` and other meaningless messages. If you apply fixes in a batch, use
`git commit --amend` to prevent creating meaningless commits.

PR titles should follow the same format as commit messages. Just so that you know, if you submit a PR with one commit only, GitHub assigns the title of the commit to the PR and saves you quite a bit of typing.
