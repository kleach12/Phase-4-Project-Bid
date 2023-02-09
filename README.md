<h1>Bid<h1>

  
<h2>Description</h2>
A full stack web application built on a React frontend and Rails backend. This is an ecommerce website that allows for users to either participate in purchasing or selling items.


<h2>Installation</h2>
- Step 1: run bundle install to install all rails gems
- Step 2: cd into the client and run npm install --force for all dependencies 
  - --force is necessary because react-typed was last updated to run on react 16.3.0
- Step 3: cd .. out of client folder and run foreman start -f Procfile.dev
- Step 4: If there are no store or user you can run rails db:seed to use seed data or you can create your own stores and users
- Step 5: Have fun!

Notes on installation
- If you accidentally start a server before bundle installing and running npm you might have to kill the current port
  - run lsof -wni tcp:3000 to find the current PID
  - then run  kill -9 PID
  - run foreman start -f Procfile.dev and you should be good to go!
 
<h2>Visuals</h2>
<img src = "https://media4.giphy.com/media/a9Ij6TmYi6e5nuqMtH/giphy.gif"/>
<img src ="https://media0.giphy.com/media/iQStNWvznbDjWKIWsU/giphy.gif"/>
<img src ="https://media3.giphy.com/media/obix7DOmoakRJXS7bJ/giphy.gif"/>
<img src ="https://media0.giphy.com/media/GazMw11mA5b6nDR8oN/giphy.gif"/>

<h2>Authors and acknowledgment</h2>
Kale Leach


<h2>Project status</h2>
This project has been completed but is still being maintained by myself as I am constantly updating it with new things I learn.

<h2>Colors</h2>
   These are some of the colors that were used for the web application
     000000 black
     808080 gray web
     FFFFFF white
     613dc1 plump purple
     4e148c Blue violet color




  
