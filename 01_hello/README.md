


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

 

