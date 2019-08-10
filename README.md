<h1 align="center"> Portfolio Generator</h1> <br>
<p align="center">
  <a href="https://gitpoint.co/">
    <img alt="Crafted" title="Crafted Logo" src="https://user-images.githubusercontent.com/3514796/62564296-e6ddcc00-b884-11e9-8f68-da94580e6aed.png" width="150">
  </a>
</p>

<p align="center">
  Display your projects in a simple and beautiful way.
</p>


<br>


## Motivation
I created this _Portfolio Generator_ to satisfy the need to display my own projects in an easy an beautiful way. You can see my own generated portfolio here: [https://crafted.link](https://crafted.link).


<br>


## Screenshots
Here you can see four demo portfolios which were created by using this project.

|  DayNight            |  Light |
|---------------------|----------------------|
|![Screenshot 2019-07-01 at 20 41 24](https://user-images.githubusercontent.com/3514796/62564935-0fb29100-b886-11e9-9f0e-4745e2015099.png) | ![Screenshot 2019-07-01 at 20 02 23](https://user-images.githubusercontent.com/3514796/62564934-0fb29100-b886-11e9-8b10-2ff7a8026c48.png) |

|  Ocean            |  Dark |
|---------------------|----------------------|
| ![Screenshot 2019-08-06 at 19 25 25](https://user-images.githubusercontent.com/3514796/62564936-0fb29100-b886-11e9-8597-65a95d17d609.png) | ![Screenshot 2019-07-01 at 20 01 41](https://user-images.githubusercontent.com/3514796/62564933-0fb29100-b886-11e9-85d0-a0e18e90f3c4.png)  |


<br>


## Tech Stack
- [Vue](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)


<br>


## Features
What makes this project stand out, are the easy and yet powerful options to generate a unique portfolio. This project offers the following features:

- Custom themes
- Pre-configured Themes (daynight, light, ocean, and dark)
- Gradient and patterns option
- Top Lighthouse score
- Custom font support
- Responsive
- Offline support
- Installable (PWA)


<br>


## Installation
To generate your own custom portfolio follow these steps:

#### 1. Clone or fork this repository

```bash
git clone https://github.com/Safi1012/Portfolio-Generator.git
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Start development server

```bash
npm run serve
```

#### 4. Add your own portofolio data.

> Checkout the API reference section for more information.


#### 5. Build production
```bash
npm run build
```

#### 6. Deploy you production build

> Deploy your generated production build folder ```dist/``` to your favorite hosting provider. Some of the better known are: GitHub Page, Netlify, Zeit.sh, and Surge.


<br>


## API Reference

You configure the whole project by adjusting the `./src/config/setup.yml` file. In the following you see what each option does and means:


| Parameter           | Explanation                                                                                                                                                                    | Input Type        | Required                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ----------------------------------------------------------------------------------- |
| portfolio           | Specifies the title of the generate portfolio.                                                                                                                                 | string            | yes                                                                                |
| theme               | The theme name which should be applied. Currently there are four themes available (`daynight`, `light`, `ocean`, and `dark`). <br> You can also create your own theme! Have a look at the section _Theme Creation_. | string            | yes  |
| patternImage        | Specifies which pattern image should be applied to your background. You can select one of the 20 existent images under `./public/assets/images/patterns/`. <br> A complete list of available pattern images can be found below. Just choose on image and enter its name with extension e.g. `circuit.svg`. If you leave this field empty you will get a gradient as background. The gradient colors are taken from the selected theme. | string | yes |
| socialMedia           | Defines your social media icons in your header. Each entry consists of `name`, `url`, and `image`. <br><br> - `name` will be used as aria-label on the icon to increase the accessibility. <br> - `url` link to your social media profile (e.g. GitHub, Twitter). <br> - `image` specifies which social media icon to display. Just enter the icons name with its extension, e.g. `github.svg`. You must first must add your icon to `./public/assets/images/social-media/`.                                                                                                                              | array            | yes  |
| projects           | Defines your projects. Each entry consists of `name`, `url`, `image`, and `backgroundColor`. <br><br> - `name` will appear below the image. <br> - `url` link to your project. <br> - `image` defines the projects logo. Just enter the images name with its extension, e.g. `shrink-me.svg`. You must first add your image to `./public/assets/images/projects/`.                                                                                                                            | array            | yes  | 
| terms           | If you want / need that your portfolio site contains a terms of service page, you can pass the `name` and `website` parameter to the `terms` object. If left empty, no terms page will be generated. You may also edit the `./src/views/Terms.vue` file to contain your own self written terms.  | string            | optional  |
| privacy           | If you want / need that your portfolio site contains a privacy page, you can pass the `name`, `address`, `mail`, and `phone` parameter to the `privacy` object. If left empty, no privacy page will be generated. You may also edit the `./src/views/Privacy.vue` file to contain your own self written privacy.  | string            | optional  |


<br>


## Example configuration

Below you see an example configuration fo the `./src/config/setup.yml` file:

```yaml
portfolio: Filipe Santos Correa

theme: light
patternImage: circuit.svg

socialMedia:
  - name: GitHub
    url: https://github.com/Safi1012
    image: github.svg

  - name: Twitter
    url: https://twitter.com/Safi1012
    image: twitter.svg

projects:
  - name: Shrink Me
    url: https://shrinkme.app
    image: shrink-me.svg
    backgroundColor: FFF

  - name: About Me
    url: https://filipesantoscorrea.com/
    image: about-me.svg
    backgroundColor: FFF

terms:
  name: 'Filipe Santos Correa'
  website: 'https://crafted.link'

privacy:
  name: 'Filipe Santos Correa'
  address: 'Karlsruhe, Germany'
  mail: 'mail@filipesantoscorrea.com'
  phone: '+1-123-456-7890'
```


<br>


## SEO configuration

You should also adjust your sites meta data (important for SEO) before deploying your portfolio site. This can be done by adjusting the options in the `.env` (located in the root folder) file:

```js
#
# Site meta data (important for SEO)
#
VUE_APP_TITLE = "Your site title..."
VUE_APP_DESCRIPTION = "Your site description..."
VUE_APP_NAME = "Your site name..."
VUE_APP_CANONICAL_SITE = "https://..."
```


<br>


## Create your own theme

You can also create your own individual theme. Just open the `./src/styles/themes.css` file and create a new CSS class e.g. `.rainbow`. Next, copy the contents of an already existing theme and paste it inside of your newly created CSS class `.rainbow`. Now you can adjust the settings of your theme (colors and font options) to fit your needs. Finally, open the `./src/config/setup.yml` and load your new theme `rainbow` by adjusting the `theme` parameter.

PS: I'm very happy to receive pull requests with new themes 🤗


<br>


## Install new fonts

You may also install new additional fonts that you desire. To do so, create a new folder under `./public/assets/fonts/` and copy your font  there. Next, create a css font-face by adjusting the `./src/styles/typography.css` file. Last but not least use your newly installed font in your theme.

One service which I highly recommend using when using Google Fonts is the [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts). The _google-webfonts-helper_ site help you to download all files of a selected font and also generated the CSS `@font-face`.



<br>


## Contribute

Just submit an issue, be it a bug report or a feature request. I'm also always happy to accept new pull requests.


<br>


## License
MIT © [Filipe Santos Correa](https://github.com/Safi1012/Portfolio-Generator/blob/master/LICENSE)
