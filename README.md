# Program Challenge using react

I'm tasked with using react to display Shingle lines and all their available colors. I have to get the information from the the link here.  

Tutorial I found to help me out with React  
https://www.youtube.com/watch?v=A71aqufiNtQ&t=0s&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=5

Data used
https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659


## Notes
I chose Jquery over the more modern methods of handling get requests, because I'm familiar with it. I formatted the Data in Appjs so it would be easier to work with. The organization of my react component is as follows


> App
>> Shingle Lines
>>> Line 
>>>> swatches

I'm not sure if something like this warrants having different files for the components or if you can just render everything in App.js.


I just opened this up in a different computer and it still works. The page boots slowly
* Git clone this repo
* `npm install`
* `npm start`


