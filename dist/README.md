# fix es6 module

1. index.ts

```sh
../src
├── index.ts
├── package.json
└── welcome.ts
```

```js
import { worldCode } from './welcome.js'
```

```json
{
  "type": "module"
}
```

```sh
node  dist/index.js
```
