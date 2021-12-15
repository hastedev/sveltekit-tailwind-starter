# 💻 🟦 SvelteKit + TailwindCSS Starter

A barebones SvelteKit starter that allows you to quickly scaffold a project with TailwindCSS.

[![SvelteKit](https://img.shields.io/badge/built%20with-sveltekit-FF3C02.svg?style=for-the-badge&logo=svelte)](https://kit.svelte.dev/) [![TypeScript](https://img.shields.io/badge/Lang-typescript-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/) [![Tailwindcss](https://img.shields.io/badge/css-TailwindCSS-%2338B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com) [![PostCSS](https://img.shields.io/badge/Styling-PostCSS-%23DD3A0A?style=for-the-badge&logo=postcss)](https://postcss.org) [![Prettier](https://img.shields.io/badge/Formatting-Prettier-%23F7B93E?style=for-the-badge&logo=prettier)](https://prettier.io/) [![Eslint](https://img.shields.io/badge/Linting-ESLint-%234B32C3?style=for-the-badge&logo=eslint)](https://eslint.org/) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge&logo=license)](https://github.com/navneetsharmaui/sveltekit-starter/blob/main/LICENSE)

<p style="text-align:center"><img src="https://i.ibb.co/0y2vkZr/Screen-Shot-2021-12-14-at-9-02-37-PM.png" /></p>

## ⚙️ Installing this starter kit

```zsh
# clone this repository
git clone git@github.com:bmkubia/sveltekit-tailwind-starter.git

# or install with npx degit
npx degit git@github.com:bmkubia/sveltekit-tailwind-starter.git

# enter your cloned folder and install dependencies
cd sveltekit-tailwind-starter && npm i
```

## 🛠 Developing your application

```zsh
# start the development environment
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

> Note: you can also run `npm run dev:host` if you need to access the application on your local network.

### Prettier

The project comes included with a `.prettierrc` file (only because I had the option that requires the file in your project on my VSCode), this may not suit your style and can easily be removed or replaced as needed.

### TailwindCSS Config

I have left the `tailwind.config.cjs` fairly barebones, if you wish to extend the styling or add plugins please refer to the [TailwindCSS documentation](https://tailwindcss.com/docs/plugins#official-plugins).

## ⚗️ Building your application

Before creating a production version of your app, you must install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. This starter kit does not come with an [adapter](https://kit.svelte.dev/docs#adapters) pre-installed and gives you the freedom to add your own.

Once you have chosen your [adapter](https://kit.svelte.dev/docs#adapters) you can build by running the following command:

```bash
# build application for production
npm run build
```

> You can preview your built application with `npm run preview`, regardless of whether you have installed an adapter or not. However, keep in mind that **this should _not_ be used to serve your appplication in production**.

## 📝 Contributing to this project

I built this mainly for myself to use because all of the starter kits that I tend to use are fairly bloated with things I find unnecessary (such as _testing_, **yuck!** /s). If you wish to contribute to the project feel free to open a PR or leave an Issue for something that you would want added in the future.

> All code and contributions are under the **MIT License**.
