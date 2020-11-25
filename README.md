# Memefinder: Put the funny in!
Click to copy memes with Memefinder! Search for images with the search bar powered by the Bing Image Search API. Search terms are automatically logged into Redux store onSubmit. <br/>

The site reactively scales by platform:<br/>
**Mobile** <br/>
![mobile function gif](memefinderMobile.gif) <br/>
**Desktop** <br/>
![desktop function gif](memefinder.gif) <br/>

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
(Version numbers were at time of deployment in 2018) <br/>
For runtime environment: <br/>  
*  nodejs: v8.10.0
*  npm v5.6.0

Dependencies:  
* "lodash": "^4.17.11",
* "material-ui": "^0.20.2",
* "react": "^16.6.3",
* "react-bootstrap": "^0.32.4",
* "react-dom": "^16.6.3",
* "react-helmet": "^5.2.0",
* "react-redux": "^5.1.1",
* "react-scripts": "2.1.1",
* "redux": "^4.0.1",
* "redux-logger": "^3.0.6",
* "redux-thunk": "^2.3.0"

### Installing
1. Create a new folder. Open the console in this folder then run create-react-app ([Guide](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)). This installs the necessary scripts and dependencies to run a local React development environment
2. Clone this repo at https://github.com/YFLooi/movieRecommender.git
3. Copy and paste all files in this repo into the root of the folder containing the files made by create-react-app. Make sure to overwrite all the original files made by create-react-app
4. Install all dependencies using 'npm install'. This should also install the dependencies added by create-react-app 
5. Create your Bing Image Search API key at Create your Bing Image Search API key [here](https://azure.microsoft.com/en-us/try/cognitive-services/?api=search-api-v7)
6. In public/script.js , paste your API key at 'var key' under function getSubscriptionKey()
7. Start this app by opening a console in the root folder, then running 'npm start'


## Deployment
Firebase and Heroku support easy deployment of React app made using create-react-app <br/>
Firebase: [Guide](https://medium.com/@romeroricky/react-app-hosted-on-firebase-65dab862cc59) <br/>
Heroku: [Guide](https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08) <br/> 

## Authors
Looi Yih Foo (https://github.com/YFLooi/)
