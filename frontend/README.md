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
    -Partial:https://api.color.pizza/v1/212121,060606,ff0012,550055,123456

Refference Code:
    -onClick background change (https://bobbyhadz.com/blog/react-change-background-color-on-click)
    -Loading animation (https://codesandbox.io/embed/0p1zmpk4yl)

Stretch:
-color blindness simulator