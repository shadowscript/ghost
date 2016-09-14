# ghost
Basic Node.js webserver and api server
  
 > * Before using the project make sure you have node and npm installed


###### Serving basic html site
Copy ghost.js in the fileserver folder to the root of your project

Make sure you edit the paths if your site wont be in the public folder

  ```fs.readFile("./path/to/site", "UTF-8", function(err, html) ```

Run ```node ghost``` and you should be up and running on ```port 4000```.


###### Serving json data
Copy ghost.js in the api folder to the root of your project

Make sure you edit the paths if your site wont be in the data folder

   ```var data = require("./path/to/json data")```

Run ```node ghost``` and you should be serving json on ```port 4000```.


