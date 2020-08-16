# fix es6 module

```json
{
  "type": "module"
}
```

```sh
node --no-warnings --loader ts-node/esm.mjs --experimental-top-level-await index.ts
```
