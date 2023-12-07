# Re-Portfolio

By: Stella Marie

Showcase portfolio: view on [Github Pages](smkou.github.io/re-portfolio)

## Description

### Versions

**v0: Profile**
2015 - 2017
Features block colors and styling, consists of portraits and personality

**v1: Magazine**
2015-2022
Features writings

**v2: Design Index**
2018 - 2019
Features designer backgrounds using block styling, consists of css colors, shapes, and fonts

**v3: Slideshow**
2020 - 2022
Features slideshows, consists of four: 1. notes on identity, 2. magazine, newspaper, documentation designs, 3. shows, 4. shows with backgrounds

**v4: People Pages**
2021 - 2022
Features pages based on people's clothing

**v5: Epicodus**
2023
Features resume and profile

### Art files

1. Upload image of artwork to dev/Art
2. Convert HEIC to PNG (if necessary)
3. Optimizilla: add to app/art/assets
4. Add to art.js: ```node update-art.js```

**Note:** First 66 images are in reverse chronological order. Until update-art.js is rewritten to accommodate the images in reverse chronological order and the images added thereafter, which must be in chronological order, here is correct chronological order of first 66 images:

```js
"20231204_202512-min.png":"portrait","20231204_202457-min.png":"portrait","20231204_202446-min.png":"portrait","20231204_202432-min.png":"portrait","20231204_202419-min.png":"portrait","20231204_202404-min.png":"portrait","20231204_202350-min.png":"portrait","20231204_202337-min.png":"portrait","20231204_202316-min.png":"portrait","20231204_202054-min.png":"landscape","20231204_202039-min.png":"portrait","20231204_202025-min.png":"portrait","20231204_202004-min.png":"portrait","20231204_201946-min.png":"portrait","20231204_201935-min.png":"portrait","20231204_201919-min.png":"portrait","20231204_201907-min.png":"portrait","20231204_201854-min.png":"portrait","20231204_201838-min.png":"portrait","20231204_200756-min.png":"landscape","20231204_200736-min.png":"portrait","20231204_200721-min.png":"portrait","20231204_200707-min.png":"landscape","20231204_200642-min.png":"portrait","20231204_200629-min.png":"portrait","20231204_200558-min.png":"portrait","20231204_200543-min.png":"portrait","20231204_200531-min.png":"portrait","20231204_200517-min.png":"portrait","20231204_200459-min.png":"portrait","20231204_200442-min.png":"portrait","20231204_200426-min.png":"portrait","20231204_200253-min.png":"portrait","20231204_200239-min.png":"portrait","20231204_200227-min.png":"portrait","20231204_200210-min.png":"portrait","20231204_195457-min.png":"portrait","20231204_195442-min.png":"portrait","20231204_195422-min.png":"portrait","20231204_195405-min.png":"portrait","20231204_195350-min.png":"portrait","20231204_195330-min.png":"portrait","20231204_195021-min.png":"portrait","20231204_194941-min.png":"landscape","20231204_194916-min.png":"portrait","20231204_194847-min.png":"portrait","20231204_194142-min.png":"portrait","20231204_194122-min.png":"portrait","20231204_194042-min.png":"portrait","20231204_194023-min.png":"portrait","20231204_193941-min.png":"portrait","20231204_193908-min.png":"portrait","20231204_193838-min.png":"portrait","20231204_193715-min.png":"portrait","20231204_193634-min.png":"portrait","20231204_193549-min.png":"portrait","20231204_193519-min.png":"portrait","20231204_193452-min.png":"landscape","20231204_193423-min.png":"portrait","20231204_193259-min.png":"portrait","20231204_193216-min.png":"portrait","20231204_193141-min.png":"portrait","20231204_193119-min.png":"portrait","20231204_193055-min.png":"portrait","20231204_193012-min.png":"landscape","20231204_191156-min.png":"landscape"
```

## Complete Setup

Use for CSS minification: [Toptal](https://www.toptal.com/developers/cssminifier)
Use for JS minification: [Minify](https://minify-js.com/)
Use for image compression: [Optimizilla](https://imagecompressor.com/)

Deploy to Github Pages from subdirectory
```bash
git subtree push --prefix app origin gh-pages
```
Note: Do not merge from main or checkout the gh-pages branch

## Known Bugs

**Homepage**
- commands: count, go, more, search, 
- command: stat on type='qna'
- add functionality to view versions page

**versions**
- link button appends undefined to url
- commands given path vs cd => command
- multi-arg commands
- v0, v1, v2, v3

## License

Re-Portfolio © 2023 by Stella Marie is licensed under CC BY-NC-ND 4.0 

Copyright (c) 2023 Sm Kou