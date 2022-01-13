### Install
```sh
yarn
```

## Build share package:

```sh
lerna run webpack:build --scope=@tmhao/share
```

### Use in client

```sh
lerna run start

// OR

cd packages/client
yarn start
```


### Known issues

#### `peerDedepencies`

A shared library like `share` is setting `React >= 16` as its peer dep and install `17` as devDep for testing purpose. Then we use the package to the `client` which
install React `16` as its dependency and it ends up with 2 version of React into the webpack build :)

