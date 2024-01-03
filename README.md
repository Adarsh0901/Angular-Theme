# Angular-Theme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server
First of all create a json-file with below structure and save it using .json format.
```
{
    "themeName":"<theme-name>",
    "values": {
        "--navbar-background-color":"<color-code>",
        "--navbar-text-color":"<color-code>",
        "--card-background-color":"<color-code>",
        "--card-text-color":"<color-code>",
        "--card-button-background-color": "<color-code>"
    }
}
```

Where <br>
  &ensp;&ensp;`<theme-name>` can be the name of the theme in string format.<br>
  &ensp;&ensp;`<color-code>` can be the color code (eg,. hex,string,etc) in string format.

Run `npm install -g json-server` to intall json-server, or follow [json-server document](https://www.npmjs.com/package/json-server) for more details.<br>
Run `json-server --watch themes.json` to make use of API's to get and store themes.<br>
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.<br>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
