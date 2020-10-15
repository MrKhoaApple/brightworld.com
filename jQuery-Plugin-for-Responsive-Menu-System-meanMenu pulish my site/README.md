Extended
This is an extention of jQuery MeanMenu.

Changes allows you to expand sub-menu by clicking on the parent instead of the right-side added button.

It also supports fontawesome buttons instead of chars (or any html input actually).



MeanMenu v2.0.8
Looking for a WordPress version?
Our friends over at PluginHero have just released the WordPress version of MeanMenu.

A menu system for converting a standard menu into a mobile/tablet responsive menu, media query independent.

Please note: This is not a menu system replacement. It is simply a lightweight piece of jQuery to convert a standard navigation into a mobile/tablet navigation.

MeanMenu only works for one menu per page.

If you are looking for drop down functionality on the desktop, MeanMenu doesn't do it. Use Superfish as well as MeanMenu. You can see Superfish + MeanMenu on all of our themes, for example Literary.

And yes, it works with jQuery 2.0 - obviously IE 7 & 8 will not work.

Live Demo: http://www.meanthemes.com/demo/meanmenu/demo.html

Just include the jQuery library (http://jquery.com)

Then this file (jquery.meanmenu.js)

in your HTML e.g.

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script src="assets/js/plugins/jquery.meanmenu.js"></script>
Then add the CSS for this after all of your other CSS in the <head> section.

<link rel="stylesheet" href="meanmenu.css" media="all" />
Then in your usual document.ready, this is working under the assumption your navigation is in

structure...
jQuery(document).ready(function () {
	jQuery('header nav').meanmenu();
});
There are the following options (Options are shown with their defaults)...

meanMenuContainer: 'body'

Choose where meanmenu will be placed within the HTML
meanMenuClose: "X"

Single character you want to represent the close menu button
meanMenuCloseSize: "18px"

Set font size of close button
meanMenuOpen: ""

Text/markup you want when menu is closed, styling in CSS provides 3 bars with these spans
meanRevealPosition: "right"

Left right or center positions
meanRevealPositionDistance: "0"

Tweak the position of the menu
meanRevealColour: ""

Override CSS colours for the reveal background
meanScreenWidth: "480"

Set the screen width you want meanmenu to kick in at
meanNavPush: ""

Set a height here in px, em or % if you want to budge your layout now the navigation is missing.
meanShowChildren: true

true to show children in the menu, false to hide them
meanExpandableChildren: true

true to allow expand/collapse children
meanExpand: "+"

single character you want to represent the expand for ULs
meanContract: "-"

single character you want to represent the contract for ULs
meanRemoveAttrs: false

true to remove classes and IDs, false to keep them
onePage: false

set to true for one page sites, the navigation will close back up on itself on click
removeElements: ""

enter comma separated values in here of elements you want hidden from the container of meanmenu e.g. if you had a search box called .search, enter ".search" in here
meanDisplay: "block"

by default this is block, sometimes you may want to switch this to table or table-cell or inline-block etc. so now you can.
parentClickExpands: true

by default this is true, it allow sub-menu exansion by clicking the whole link instead of only the rigth button