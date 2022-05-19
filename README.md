/swatchOut/Swatch it/Hues your own Adventure Color Picking Website

My app is called Swatch It.  It allows users to view colors names, hex, rgb, and hsl codes for use in design projects.  The website will allow the user to search colors by name and hex code, and then pull up the individual color to obtain rbg and hsl information, as well as view the color.  As stretch goals, I hope to make the search bar dynamic, add a feature to allow the user to view the color agains both dark, light, and contrasting backgrounds, view similar colors to the currently selected, and create a loading animation.

Features: 

-List of colors
-color details page
-search

Components:

-Search: 
    Searches for color by hex or by color name
-Nav
-Footer
-Pages:
    Main (/), 
    Color List (/ColorList), 
    Color Show (/Color/:id)  
        
MVP User Stories

As a user, I can view a list of colors and search them by name or hex code in order to find colors to use in design projects

As a user, I am able to select colors to view them and get additional information in order to use the colors in design projects

As a user, I will be able to get the information I need to code colors into design products from this website

API: 
    -Complete: https://api.color.pizza/v1/
    -Partial (for testing):https://api.color.pizza/v1/212121,060606,ff0012,550055,123456

Reference Code:
    -Loading animation (https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation1)
    -brighten/darken (https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors)
    -slider Bar (https://ahdev2020.medium.com/how-to-create-range-slider-in-react-9392a123f8fb)

Stretch:
-color blindness simulator
-similar color options
-contrasting color options
-loading animations
-sort by basic colors (reds, greens, etc.) (https://tomekdev.com/posts/sorting-colors-in-js)