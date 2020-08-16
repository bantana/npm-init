# npm-init

npm project init

run \*.ts file

```sh
node --loader ts-node/esm.mjs --experimental-top-level-await --no-warnings ./src/index.ts
```

package.json:

```json
{
  "scripts": {
    "test": "jest --watch --onlyChanged",
    "dev": "node --loader ts-node/esm.mjs --experimental-top-level-await --no-warnings "
  },
```

```sh
npm run -s dev ./src/index.ts
```
