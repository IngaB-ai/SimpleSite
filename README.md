# SimpleSite NFLCrime


### Top Crimes(main) page:
- make components for Top crime, Top players, Top teams
- make services for them 
- get crimes from the endpoint in json formate
- list crimes in decreasing order in a table formate
- use basic css ui (I used Boostrap for this example)
- has an option to click on a crime and gsee the top players in the separate page more detail 

<img width="960" alt="Top Crimes" src="https://user-images.githubusercontent.com/58734028/70610434-df984780-1c03-11ea-8824-7cef2a7043a5.png">


### Top Players of crimes page:
- get details of selected crime from an endpoint
- displays them in a tab

<img width="960" alt="Top Crimes" src="https://user-images.githubusercontent.com/58734028/70610534-06567e00-1c04-11ea-84b6-76aa8a45f6df.png">

### Future features:
- proceed with the same maner with other top rankings. Now when there is template should 1/10 of a time
- rearange code and make it pre-production ready
- find a reason why charts.js is not working properly. Thorougly checked  and changed the DI. It is not an issue.
- tweak component tree to more eye pleasing 
- write tests


### Technicalities
- It should be e built using Angular (NOT angular.js)
- The endpoint for retrieving the list of shirts is at NflArrest.com/api/v1/crime
- You may use any additional libraries
- Unit tests

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.


### Installation
- Clone the repo `https://github.com/IngaB-ai/SimpleSite.git`.
- Run `npm install`.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


