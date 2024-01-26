# Re-Portfolio

By: Stella Marie

Collection of portfolios since 2015
View on [Github Pages](smkou.github.io/re-portfolio)

## Description

Re-Portfolio is a static portfolio website where every page has its own design. It features various versions done of my portfolio over the years, grouped by year and interface type.

**In-Development**
Homepage
- Commands: find, more, searchable, stat
- Test commands

v0 Profile
personalization redesign: [User Interfaces with Big-5 Personality Traits](https://www.kamranhughes.com/how-to-tailor-designs-using-the-big-5-personality-traits/)
- Add questionaire
- Gather content per question
  - chart or bar graph
  - progress bars
  - stock image, credits and sources
  - bullet points
  - personal facts
  - statements
  - summaries
  - analyses

v1 Magazine
- Add images for stories: 640 clr-opt, bw
- Edit and redesign smjoker.com -> slate

v2 Design Index
- Redesign for actual handbook aesthetic (change layout)
- What is this handbook for?
- Add content

v3 Slideshows
- Switch mechanism
- Add content

Art
- image mosaic
  - nodejs generator
  - canvas feature
- Upload recent works (ongoing)

Calendar
- auto-population
- Update recent events (ongoing)

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
Features slideshows, consists of: 
1. notes on identity
2. magazine, newspaper, documentation designs
3. shows (backgrounds)

**v4: People Pages**
2021 - 2022
Features pages based on people's clothing

**v5: Epicodus**
2023
Features resume and profile

```
Containerize and Deploy C#/.Net apps
https://www.codeguru.com/dotnet/asp-net-docker/
https://learn.microsoft.com/en-us/dotnet/framework/deployment/
```

### Art files

1. Upload image of artwork to dev/Art
2. Convert HEIC to PNG (if necessary)
3. Optimizilla: add to app/art/assets
4. Convert to mosaic
5. Add to app/art

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