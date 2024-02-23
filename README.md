# Re-Portfolio

By: Stella Marie

Collection of portfolios since 2015
View on [Github Pages](smkou.github.io/re-portfolio)

## Description

Re-Portfolio is a static portfolio website where every page has its own design. It features various versions done of my portfolio over the years, grouped by year and interface type.

**In-Development**
Homepage
- cal: show calendar information
- cd: change working path
- cls: clear terminal and collapse aside
- clear: clear terminal
- date: show date or time to date
- dir: show contained categories and items
- echo: show messages of item
- find: search items for property name or value
- help: show command information
- hostname: display name of host
- ls: list categories, items and properties
- lynx: open item url
- man: show manual page for commands
- more: show contained information in item
- msg: view contact information
- pwd: show working path
- stat: show details of item
- tree: show path structure of category
- whatis: show what a command does
- whoami: show developer name

Art
- image mosaic
  - nodejs generator
  - canvas feature
- Upload recent works (ongoing)

Calendar
- auto-population
- Sample events
- Input

Documentation

### Versions

**v0: Profile**
2015 - 2017: Features block colors and styling, consists of portraits and personality
- Answer questions
- Format content
- Add questionnaire

**v1: Magazine**
2015-2022: Features writings
- Add images: color, bw

**v2: Design Index**
2018 - 2019: Features designer backgrounds using block styling, consists of css colors, shapes, and fonts
- Add content: colors, shapes, html tags

**v3: Slideshow**
2020 - 2022: Features slideshows consisting of
1. notes on identity
2. magazine, newspaper, documentation designs
3. shows (backgrounds)

**v4: People Pages**
2021 - 2022: Features pages based on people's clothing

**v5: Epicodus**
2023: Features resume and profile

```
Containerize and Deploy C#/.Net apps
https://www.codeguru.com/dotnet/asp-net-docker/
https://learn.microsoft.com/en-us/dotnet/framework/deployment/
```

### Art files

1. Upload image of artwork to dev/Art
2. Convert HEIC to PNG (if necessary)
3. Optimizilla: add to app/art/assets
4. _Convert to mosaic_
5. Add to app/art

### Documentation
- What does it do?
- Working example
- Full code
- Chunks of code interspersed with explanations

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
- test commands: cd, count, descript
- commands: find, go, help, ls, more, pwd, stat
- add functionality to view versions page

**versions**
- link button appends undefined to url
- commands given path vs cd => command
- multi-arg commands
- v0, v1, v2, v3

## License

Re-Portfolio © 2023 by Stella Marie (Sm Kou) is licensed under CC BY-NC-ND 4.0 

Re-Portfolio is licensed under a
Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License

[License](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[Legal Code](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.en)