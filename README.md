## Next Js Portofolio with simple static json data

![next portofolio template image](https://raw.githubusercontent.com/erickow/next-portofolio-template/master/public/next-portofolio-starter.png "next portofolio template image")

project demo visit this [vercel demo link](https://next-portofolio-template.vercel.app/)

## Feature
 - [Next Js Tailwind template](https://github.com/taylorbryant/next-starter-tailwind)
 - Google Analytic Setting
 - Static sitemap Generator
 - Customize data responsive Layout
 - SEO meta social sharing 
 
 ## How to Run
 ```
 - yarn install
 - yarn dev
 ```

  ## How to Start
 ```
 - yarn start
 ```

 ## How to Build
 ```
 - yarn build
 ```

## Important Notes
for static images, icon, thumbnail see the public root folder in the project

## Sample Image Object
```
image: {
  ratio: {
      width: '960',
      height: '540'
  },
  url: '/critter.svg' -> check public folder
}
```

 ## Homepage Page
   ```
 - open folder content
 - open file homepage
 ```
| Varialble      | Mandatory | Value | 
| ----------- |:----:| ----------- |
| title      |yes| String       |
| description   |yes| Array, new index = new paragraph        |
| image   |no| Image Object        |

 ## Portofolio Page
  ```
 - open folder content
 - open file portofolio
 ```

| Varialble      | Mandatory | Value | 
| ----------- |:----:| ----------- |
| title      |No| String       |
| description   |yes| Array String, new index = new paragraph        |
| data   |yes| Array Object (type: image, and video)        |
| desc_position   |no| Image Object        |

 ## Contact Page
   ```
 - open folder content
 - open file homepage
 ```

| Varialble      | Mandatory | Value | 
| ----------- |:----:| ----------- |
| title      |yes| String       |
| image   |no| Image Object        |
| list   |yes| Array Object, new index = new paragraph        |

 ## Seo meta social sharing
  ```
 - open folder content
 - open file portofolio
 ```

| Varialble      | Mandatory | Value | 
| ----------- |:----:| ----------- |
| title      |yes| String       |
| description   |yes| String        |
| url   |yes| String, (website domain)        |
| site_name   |yes| String       |
| link_image   |yes| String, (website domain image that will show when shared)        |

 ## How to Setting Google Analytic
 ```
 - open folder content
 - open file constant
 - change data id with your Google Analytics ID
 ```

  ## How to Setting Sitemap
 ```
 - open folder content
 - open file constant
 - change data website_url with your domain url
 ```
