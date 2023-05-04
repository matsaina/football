## App.js 
states initialized 
data is called from api
data is filtered for search by handleSearch function

all ROUTES are declared on the component jsx

## NavBar
contains the search input and handleSearch as a function prop for searching games

## SideBar
Contains the NAVLINKS for navidation to the different routes


## Tablecard.js
-Table card containing <tr></tr> for CLEAN CODE in mapping data on the other components

## AllTable.js
-Shows all today games 
-Data is populated by .map() function through the child component Table card


## LiveTable.js, FinishedMatches.js, NotStarted.js
-Live data is FILTERED  and livegames, finishedgames and notstarted games are populated respectively 


## MatchDetails.js
-contains individual matches details

contains the COMMENT SECTION
-user can GET comment 
-user can POST comment 
-user can UPDATE comment 
-user can DELETE comment

learning objectives
- Routing with <ROUTES /> and <NAVLINK> accomplished
- CRUD operations GET,POST,DELETE,UPDATE accomplished
- (.filter()) and (.map()) accomplished
- (.useParams) and useMatch accomplished



