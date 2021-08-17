# Image Processing API
### by Michael Eisenbraun

## Projet Setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Runs unit tests
```
npm run test
```

### Lints files
```
npm run lint 
```

## Usage

### Image resize 

`/api/images`

**Query string options**

| Option | Description | Required | 
| :---:  | :---:       | :---:    |
| filename | The name of the image to be resized | yes |
| width | The width of the resized image | no |
| height | The height of the resized image | no | 

**Example End Points**

The following examples demonstrate different ways to use the image resize API. 

- [http://localhost:3000/api/images?filename=fjord&width=300&height=300](http://localhost:3000/api/images?filename=fjord&width=300&height=300)
- [http://localhost:3000/api/images?filename=fjord&width=300](http://localhost:3000/api/images?filename=fjord&width=300)
- [http://localhost:3000/api/images?filename=fjord&height=300](http://localhost:3000/api/images?filename=fjord&height=300)
- [http://localhost:3000/api/images?filename=fjord](http://localhost:3000/api/images?filename=fjord) (No resizing)