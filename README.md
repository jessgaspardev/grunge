# Grunge 
Grunge is a portfolio Astro theme with a grunge aesthetic, perfect for developers, designers and any other creative who wants to stand out and show their love for the 90s music scene. 

## Tech stack
- Astro
- Tailwind v4
- JavaScript
- TypeScript

## Pages
- Home
- Works
- Individual Work
- About
- Contact
- 404

## Features
- Content collections
- Reusable components
- Tailwind theme
- Pagination
- Sitemap
- Ongoing updates

If you have any questions, feel free to reach out:
- [Bluesky](https://bsky.app/profile/gasparjs.bsky.social)
- [jessgaspardev@gmail.com](mailto:jessgaspardev@gmail.com)


## 🚀 Project Structure

Inside of your template, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── images
│   │   └── ui
│   │   └── work-card
│   ├── components
│   │   ├── elements     # elements that can be used across the website
│   │   │   └── Container.astro
│   │   │   └── ContainerBottom.astro
│   │   │   └── Heading.astro
│   │   │   └── ImageContainer.astro
│   │   │   └── Link.astro
│   │   │   └── Text.astro
│   │   │   └── Dropdown.astro
│   │   │   └── ResumeDropdown.astro
│   │   │   └── Work.astro
│   │   ├── global       # elements used on every page
│   │   │   └── BaseHead.astro
│   │   │   └── Footer.astro
│   │   │   └── Navigation.astro
│   │   │   └── Wrapper.astro
│   │   ├── sections    # components used on each section of each page
│   │   │   └── about
│   │   │   │   └── Education.astro 
│   │   │   │   └── Experience.astro 
│   │   │   │   └── Intro.astro 
│   │   │   ├── contact
│   │   │   │   └── ContactDetails.astro 
│   │   │   │   └── ContactItem.astro 
│   │   │   │   └── Intro.astro 
│   │   │   ├── home
│   │   │   │   └── About.astro 
│   │   │   │   └── Faq.astro 
│   │   │   │   └── Hero.astro 
│   │   │   │   └── SelectedWorks.astro 
│   │   │   │   └── Services.astro 
│   │   │   ├── works
│   │   │   │   └── Pagination.astro 
│   │   │   │   └── Works.astro
│   ├── components
│   │   ├── images
│   │   │   └── (folders for each post - add your project images here)
│   │   └── project-title.md
│   │   └── (add your projects here)
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── works
│   │   │   └── [...page].astro
│   │   │   └── [page].astro
│   │   └── index.astro
│   │   └── 404.astro
│   │   └── about.astro
│   │   └── contact.astro
│   ├── styles
│   │   └── global.css  # global styling and tailwind theme configuration
│   │   └── markdown.css  # markdown files styling
│   └── content.config.ts
└── .gitignore
└── astro.config.ts
└── LICENSE
└── package-lock.json
└── README.md
└── tsconfig.json
```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

