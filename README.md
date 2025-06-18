This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

to run the unit tests run 
```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## About the Project

This project is a modern web application built with **Next.js** (App Router) and **Chakra UI** for styling. It leverages **TypeScript** for type safety and **Jest** for testing. Key highlights include:

- **Static Site Generation (SSG)** for the Home page for fast, cacheable loads
- **Server-Side Rendering (SSR)** for the Information page to keep data fresh
- **User Info Modal**: Edit and view user information with React Context for state management
- **Responsive Design**: Mobile-friendly layout using Chakra UI components
- **GraphQL Integration**: Uses Apollo Client for data fetching (see `/src/lib/apollo-client.js`)
- **Testing**: Unit tests with Jest and React Testing Library
- **Accessibility**: Focus on semantic HTML and accessible components
- **Folder Structure**: Organized by feature and component for scalability

## Future improvements

If I had more time, I would’ve made the following improvements:
- Resolve **modal styling** issues and improve the header/footer styling
- Implement more comprehensive error handling using **Next.js** error components
- Increase test coverage and fix existing failing tests
- Fix **Chakra UI** styling issues and apply proper conventions (couldn't do it due to limited familiarity)
- Rename some components for improved clarity and descriptiveness
- Restructure component files into dedicated directories
- Integrate **Storybook** for component documentation and testing
- Clean up `package.json` and remove unused dependencies
- Add end-to-end testing with **Cypress** or **Playwright**
- Improve accessibility features and ensure compliance with WCAG standards
- Move the api endpoints url to an env file
- Moving all the typescript type definitions to type.ts files to keep the code clean
- add some Jsdoc for pagination and some other utility functions
- I create a utility function to return the current version instead of importing the `package.json` file to layout.tsx
