# giphy
Simple Giphy Browser

This simple app has three requirements:

1. The initial screen is an "infinitely scrolling" grid of trending GIFs on Giphy.
2. There's a search bar on top that will allow a user to search for GIFs. These results will replace the trending GIFs.
3. When you click a GIF, it will take you to a full-screen view of that GIF.

## ToDos - Things I'd like to add or complete in the future.

1. Completely scrap the Giphy SDK - It's great out-of-the-box, but it otherwise overly bulky, rigid, and near impossible to update via state changes.
2. Convert to Typescript - Nice to have, but was an afterthought that wasn't worth the effort to convert once I got going.
3. Add autosuggest to search input.
4. Update Modal to allow for clicking through to giphy or close/return to results.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

1. Yarn or Node/NPM
2. Node
3. A Hue Bridge
4. A Hue Multicolor Bulb/Device
5. Install/Setup - Alert Lights API and ensure it is running on localhost:4000
6. Ensure AWS Credentials are set using - Move-AWS-Tools process.

### Installing

Here are the simple, step by step series of examples that tell you how to get a development env running

1. Clone the repository to your local environment.

```
$ git clone https://github.com/dyoungman/giphy.git
```

2. Run Yarn in a terminal within therepository working directory to install all necessary dependencies.

```
C:\...\GitHub\giphy> yarn
```

3. Start Yarn in a terminal within repository working directory to run locally.

```
C:\...\GitHub\giphy> yarn start
```

4. A browser should open to localhost:3000
Use and enjoy.

## Running the tests

Start Yarn test in a terminal within repository working directory.

```
C:\...\GitHub\giphy> yarn test
```

## Deployment

This repo uses GitHub Pages for deploying and serving of the appliocation. More info can be found at:
* [GitHub Pages](https://pages.github.com/)

## Built With
* [@giphy/js-fetch-api]() - 
* [@giphy/react-components]() - 
* [@testing-library/jest-dom]() - 
* [@testing-library/react]() - 
* [@testing-library/user-event]() - 
* [gh-pages]() - 
* [react](https://reactjs.org/) - The web framework used
* [react-dom]() - 
* [react-scripts]() - 
* [semantic-ui-css]() - 
* [semantic-ui-react](https://react.semantic-ui.com/) - UI and Styling

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.move.com/IT-Operations/alert-lights-admin/tags).

## Authors

* **Devin Youngman** - *Initial work* - [email](devin.youngman@move.com)

See also the list of [contributors](https://github.com/dyoungman/giphy/graphs/contributors) who participated in this project.

## Acknowledgments

* Signal - Desktop Take-Home Exercise
* Coffee, caffeine, and other legal stimulants.
