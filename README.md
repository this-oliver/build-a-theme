# `Vue3` template

This is a template for Vue3. It includes:

- [vue3](https://vuejs.org/) - The core framework
- [vue-router](https://router.vuejs.org/) - Router for navigating between pages
- [pinia](https://pinia.vuejs.org/) - State management for persisting data
- [vuetify](https://vuetifyjs.com/en/) - UI library/framework for styling and components
- [custom base components](src/components/base/) - Custom base components for common UI elements

## Project structure

- `public` - static files that will be copied to the output directory (e.g. favicon)
- `src` - source code
  - `assets` - styles (e.g. css) and static assets (e.g. images)
  - `components` - the components used by the pages
  - `router` - Vue router
  - `store` - Pinia store
  - `pages` - the page components
  - `App.vue` - root component
  - `main.ts` - entry point

## Usage

> If you don't have pnpm installed, you can also use `npm` or `yarn` instead.

```bash
npx degit this-oliver/template-vue3 new-project
cd new-project
pnpm i
```

## Contributing

Contributions are welcome! Please open an issue or PR.

Some things to note:

- Understandable code beats one-liners by a long shot
- This project uses [pnpm](https://pnpm.io/), a fast and efficient package manager. If you don't have it installed, you can run `npm i -g pnpm` to install it.

## License

This repository is licensed under the [MIT License](LICENSE).
