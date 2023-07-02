# chat-gpt-nodejs-app

Speak with the chat gpt.

## Installation

* [Node.js](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/).

```bash
  # Get an api key here:
  # https://beta.openai.com/signup/
  cp .env.example .env
  yarn install

  # Install typescript
  npm i -g typescript

  # Compile our .ts files to the dist/ directory
  tsc
```

## Usage

```bash
  # http://localhost:3000
  node dist/app.js 
```

Send a POST to our server like

```json
  {
    "prompt": "list the first 15 prime numbers"
  }
```

with headers `Content-type application/json`.

Our response should look like

```json
{
    "response": "Sure! Here is a list of the first 15 prime numbers:\n\n2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47"
}

```

and

```json
{
    "response": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47"
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
