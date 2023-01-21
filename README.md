# feedback-form
Mock project of a feedback form. Powered by nextJs.

### Demo
Live at: https://feedback-form-arikanmstf.vercel.app/
Note that, live demo won't work when submitting the form, the reason is nextJs deployment runs with static assets. So mock service worker can not be initialized.

It'll work only when you run locally. See `Development` section at the bottom.

* Fill out the form and submit;
* You'll see your data at the next page.
* Click back button and fill out another review
* You'll see both of the data you entered, and chart is updated.
* Since app is running on mocks, data will reset once you refresh the page.

#### Storybook
https://arikanmstf.github.io/feedback-form

### Tests
https://user-images.githubusercontent.com/13220774/213797905-9635ca0a-2a0a-4ca8-9c08-fc80691e2aa7.mov

This project uses following tools for testing;
* Eslint for code quality & readability,
* Typescript for static type checking
* Jest and RTL for unit testing
* Cypress for e2e testing
* Storybook for visual regression testing
* MSW for mocking api: works at app itself, storybook, jest, and cypress

Note: Visual regression testing is not automated. This can be done with percy integration in a real project.

### Styling
* Used `styled-components` in this app just for a demonstration, but in fact I'd prefer css modules with tokens.
* Styled components causes some unexpected behaviours at times; i.e: page opening styles are flaky, it required extra config for next to fix such issues.

### Automation
* This app tests, builds, and deploys to the production (vercel.com) once it's pushed to master branch.

### Accessibility
This app works compatible with screen readers such as VoiceOver
* There is no any `font-size` css attribute used; instead html tags used. This feature automatically comes with the design system (material ui)
* Inputs and texts has `aria-label` tag.
* Source code is 100% compatible with `eslint-plugin-jsx-a11y` recommended settings
* This is a responsive website which supports min screen size from: `320px`

### Contribute

* Recommended node version: `^16`
* Pull the repository and install dependencies using yarn;

`$: yarn install --frozen-lockfile`

* You can set up your environment variables by editing `.env.dev.local`
* Simply run the app

`$: yarn dev`



