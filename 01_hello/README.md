# webpack concept
## What is bundle.js  
![What is bundle.js](https://github.com/milochen0418/github-readme-material/blob/master/webpack-react-step-by-step/hello_01/hello_01/picture_01.png)  
## How to make a bundle.js  
![how to make bundle.js](https://github.com/milochen0418/github-readme-material/blob/master/webpack-react-step-by-step/hello_01/hello_01/picture_02.png)  

# webpack-hello project
webpack-hello is In the hello_01 project folder.   
The code here show how to make a webpack hello project from zero.  
In this project , you can trace all of its commit code. so that you can    
learn how to build a webpack hello project from zero.  

# Easy Usage
## First time to use   
After clone thr poejct  
$ npm run reboot  
Then you can open your browser to see how to is running  
##  keep going to development
Everytime when you change the code  you can do   
$ npm run web:reboot   
And open browser to see your new result for currently source code    
(Self manaual refresh on your browser   )

# Development note
## init project
$ npm init 

## install webpack package
$ npm install --save-dev webpack

## add webpack configuration 
$ vim webpack.config.js

## add index.html to use bundle.js
$ vim index.html

## add index.js
$ vim index.js

## To build your bundle.js
$ ./node_modules/.bin/webpack  
Do you want to install 'webpack-cli' (yes/no): yes  

## change path of bundle.js in index.html
$ vim index.html  
bundle.js  --> dist/bundle.js  

## update .gitignore
$ vim .gitignore  
$ cat .gitignore  
node_modules  
package-lock.json  
dist  

## Install http-server
$ npm install --save-dev http-server  
  
## Execute web
$ http-server  
Open browser to look. and the code is running well     

 
## A new package.json for managmenet your project
### package.json  
$ vim package.json   
$ cat package.json    
...   
  "scripts": {   
    "test": "echo \"Error: no test specified\" && exit 1",   
    "node:clean": "rm -rf ./ndoe_modules && rm -f ./package-lock.json",   
    "node:install": "npm install",   
    "node:reboot": "npm run node:clean && npm run node:install ",   
    "web:clean": "rm -rf ./dist",   
    "web:build": "webpack",   
    "web:exec": "http-server",   
    "web:reboot": "npm run web:clean && npm run web:build && npm run web:exec",   
    "reboot": "npm run node:reboot && npm run web:reboot",   
    "help": "cat ./package.json | jq '.scripts'"    
  },   
...   
### management for what node javascript package
$ npm run node:clean  
$ npm run node:install   
$ npm run node:reboot  

### management when web developing 
$ npm run web:clean    
$ npm run web:build     
$ npm run web:exec    
$ npm run web:reboot   

### Reboot All 
$ npm run reboot  
Reset all information of node package and web built result and reset and rebuild again. then exec web in the final.

### query more commands  
$ npm run help  




# How to process  multiple-entry
Refer the following of same github
./more_examples/multiple-entry-points/


# How to dynamice change website when you change index.html and js in react_app
$ npm run web:watch   
$ npm run web:exec  
Open browser to open page (please refresh if you rerun web:exec)    
Then you can try to cnaghe the code ./reac_app or index.html.    
And you will see browser content is change.     
The command can see help file of $ live-server --help     
We use $ live-server --wait=200 is because wait webpack to build bundle.js and we assume its build time is 200ms  
If your build time is very long , then just change the wait time more long  
