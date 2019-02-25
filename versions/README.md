# ver_00_01 - Hello webpack  
Hello world for webpack. the most simple version of webpack

# ver_00_02 - Seperate html template and js code  
Seperate the codes of react_app and index.html template

# ver_00_03 jQuery & Multiple entry of webpack  
(1) Add jQuery library in index.html template and use jQuery function in index.js   
(2) Seperate index.js to index.js and main.js.   
(3) set multipule entry in  webpack.config.js by JavaScript Array  

# ver_00_04 source watching and live-reload on browser  
(1) add delay for live-server with 500ms   
(2) add webpack --watch to rebuild bundle.js automatically   
(3) Term1 [ $ npm run web:watch ] AND Term2 [ $ npm run web:exec ] .  Then you can live-build and rerun on browser whenever change any source code.    
(4) web:exec --> live-server --wait=[TIME_ms]  . TIME_ms need  > bundle.js building time     
