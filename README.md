# giphy
Simple Giphy Browser

This simple app has three requirements:

1. The initial screen is an "infinitely scrolling" grid of trending GIFs on Giphy.
2. There's a search bar on top that will allow a user to search for GIFs. These results will replace the trending GIFs.
3. When you click a GIF, it will take you to a full-screen view of that GIF.

## ToDos - Things I'd like to add or complete in the future.

1. Implement Redux - Planned to refactor to use Redux, but lost time due to Giphy SDK. Redux branch created and in the works.
2. Completely scrap the Giphy SDK - It's fine for just out-of-the-box, but it is otherwise overly bulky, rigid, and near impossible to update via state changes.
3. Fill out test coverage. Only had time to implement basic test.
4. Update with Typescript - Nice to have, but was an afterthought that just ran out of time for.
5. Add autosuggest to search input. Another nice to have, but was a personal stretch goal.
6. Update Modal to allow for clicking through to giphy's detail page and/or close/return to results. Another stretch goal.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

1. Yarn or Node/NPM
2. Giphy API Key - https://developers.giphy.com/docs/api#quick-start-guide

### Installing

Here are the simple, step by step series of examples that tell you how to get a development env running.
The examples use Yarn, but NPM can be used as well.

1. Clone the repository to your local environment.

```
$ git clone https://github.com/dyoungman/giphy.git
```

2. Create a .env file at root of the application and add the following key.

```
REACT_APP_GIPHY_APIKEY=YOURAPIKEY
```

3. Run Yarn in a terminal within the repository working directory to install all necessary dependencies.

```
C:\...\GitHub\giphy> yarn
```

4. Start Yarn in a terminal within repository working directory to run locally.

```
C:\...\GitHub\giphy> yarn start
```

5. A browser should open to localhost:3000
Use and enjoy.

## Running the tests

Start Yarn test in a terminal within repository working directory.

```
C:\...\GitHub\giphy> yarn test
```

## Deployment

This repo uses GitHub Pages for deploying and serving of the appliocation. More info can be found at:
* [GitHub Pages](https://pages.github.com/)

Assuming github pages is installed (via setup steps above) and configured for a repo you control/own:
Note: Ensure the package.json has the correct repo name in the scripts section if you decide to use another branch name.

```
"deploy": "gh-pages -d build",
```

1. Update CHANGELOG with latest additions, changes, or removals.

```
./CHANGELOG.md
```

2. Update application version by running yarn version in a terminal within the repository working directory.

```
C:\...\GitHub\giphy> yarn version
```

3. Run build against working or master branch.

```
C:\...\GitHub\giphy> yarn build
```

4. Run deploy
Note: Github pages can take a bit to update after the deploy is completed. Check the displayed version number to confirm updates.

```
C:\...\GitHub\giphy> yarn deploy
```

## Built With
* [@giphy/js-fetch-api](https://www.npmjs.com/package/@giphy/js-fetch-api) - Park of the Giphy SDK
* [@giphy/react-components](https://www.npmjs.com/package/@giphy/react-components) - Park of the Giphy SDK
* [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) - Installed with create-react-app
* [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) - Installed with create-react-app
* [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) - Installed with create-react-app
* [gh-pages](https://www.npmjs.com/package/gh-pages) - Used for deploying to GitHub Pages
* [react](https://reactjs.org/) - The web framework used
* [react-dom](https://reactjs.org/docs/react-dom.html) - Uh, the Dom
* [react-scripts](https://www.npmjs.com/package/react-scripts) - You know, pretty much all the bell and whistles of React.
* [semantic-ui-css](https://react.semantic-ui.com/usage/) - CSS for Semantic UI
* [semantic-ui-react](https://react.semantic-ui.com/usage/) - UI and Components

## Versioning

This site uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dyoungman/giphy/tags).

## Authors

* **Devin Youngman** - *Initial work* - [email](devin.youngman@gmail.com)

See also the list of [contributors](https://github.com/dyoungman/giphy/graphs/contributors) who participated in this project.

## Acknowledgments

* Signal - Desktop Take-Home Exercise
* Giphy - For use of their SDK and granting of the API Key
