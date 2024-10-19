# Project Title

[![Next.js](https://img.shields.io/badge/Next.js-12.x-blue.svg)](https://nextjs.org/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-green.svg)](https://www.contentful.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

This project is a **Next.js** blog application powered by **Contentful** as a headless CMS. The application features dynamic content fetching, SEO-optimized pages, and category-based blog post navigation. It is designed to be modular, with reusable components, efficient data fetching, and rich text rendering capabilities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Contentful Integration](#contentful-integration)
- [Code Quality](#code-quality)
- [SEO and Metadata](#seo-and-metadata)
- [License](#license)

## Features

- **Dynamic Blog Post Pages**: Fetches and displays blog posts dynamically from Contentful using slugs.
- **Rich Text Rendering**: Supports rich text content rendering using `@contentful/rich-text-react-renderer`.
- **Category Navigation**: Allows users to filter posts by category, with paginated category pages.
- **Popular Posts Sidebar**: Displays the top 10 most popular posts based on the number of views.
- **SEO Optimized**: Metadata and Open Graph tags are dynamically generated for each post.
- **Responsive Design**: Fully responsive for mobile and desktop users.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
- [Contentful](https://www.contentful.com/): Headless CMS for managing content.
- [TypeScript](https://www.typescriptlang.org/): Static typing for JavaScript.
- [CSS Modules](https://github.com/css-modules/css-modules): Scoped and modular CSS for component styling.
- [ESLint](https://eslint.org/): Linting for maintaining code quality.
- [Prettier](https://prettier.io/): Code formatter for a consistent code style.

## Setup & Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   cd your-project-name
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn
    ```
   
3. Create a `.env.local` file in the root directory and set the environment variables (see [Environment Variables](#environment-variables)).

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open http://localhost:3000 to view it in your browser.

## Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=your_environment
```

Replace `your_space_id`, `your_access_token`, and `your_environment` with your Contentful space ID, access token, and environment.

## Project Structure

```bash
.
├── components           # Reusable UI components
│   ├── post             # Components related to rendering posts
│   └── common           # Common reusable components (e.g., buttons, headers)
├── containers           # Page-specific container components
├── lib                  # Utility functions (e.g., Contentful image parsing, metadata)
├── pages                # Next.js pages
│   ├── posts            # Dynamic blog post pages
│   └── category         # Category listing pages
├── services             # API calls and data fetching logic
├── styles               # Global and component-specific CSS files
├── public               # Static files (e.g., images)
└── README.md            # Project documentation

```

## Usage

1. **Creating a New Post**: To create a new blog post, log in to your Contentful account and add a new entry to the `Blog Post` content type. Fill in the required fields (e.g., title, slug, category, content) and publish the entry.

2. **Adding Images**: To add images to a blog post, upload the images to the `Images` section in Contentful and reference the image in the blog post content using the `Image` field type.

3. **Updating Categories**: To update the categories, add or remove categories in the `Category` content type in Contentful. The categories will be dynamically fetched and displayed on the category pages.

4. **Customizing Styles**: To customize the styles, modify the CSS files in the `styles` directory. You can also add new CSS modules for component-specific styles.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the Next.js production server.
- `npm run lint`: Lints the project using ESLint.
- `npm run format`: Formats the project using Prettier.
- `npm run type-check`: Checks TypeScript types.
- `npm run test`: Runs the test suite.
- `npm run test:coverage`: Runs the test suite with coverage reporting.
- `npm run test:watch`: Runs the test suite in watch mode.


## Contentful Integration
The project uses the Contentful Delivery API to fetch content dynamically:
* **Contentful Client**: The `createClient` function in `services/contentful.ts` creates a new Contentful client instance with the provided space ID, access token, and environment.
* **Fetching Blog Posts**: The `getPosts` function fetches all blog posts from Contentful and returns them as an array of post objects.
* **Fetching Single Post**: The `getPostBySlug` function fetches a single blog post by its slug from Contentful and returns the post object.
* **Fetching Categories**: The `getCategories` function fetches all categories from Contentful and returns them as an array of category objects.
* **Fetching Posts by Category**: The `getPostsByCategory` function fetches all blog posts in a specific category from Contentful and returns them as an array of post objects.
* **Incrementing Post Views**: The `incrementPostViews` function increments the view count of a blog post in Contentful.
* **Fetching Popular Posts**: The `getPopularPosts` function fetches the top 10 most popular posts based on the number of views from Contentful and returns them as an array of post objects.
* **Parsing Rich Text Content**: The `renderRichText` function parses and renders rich text content from Contentful using `@contentful/rich-text-react-renderer`.
* **Parsing Images**: The `parseImage` function parses and formats image URLs from Contentful for responsive image rendering.
* **Parsing Metadata**: The `parseMetadata` function parses and formats metadata fields (e.g., title, description, image) for SEO and Open Graph tags.
* **Fetching Entry by ID**: The `getEntryById` function fetches a single entry by its ID from Contentful and returns the entry object.
* **Fetching Entries by Content Type**: The `getEntriesByContentType` function fetches all entries of a specific content type from Contentful and returns them as an array of entry objects.
* **Fetching Entries by Field Value**: The `getEntriesByFieldValue` function fetches all entries with a specific field value from Contentful and returns them as an array of entry objects.
* **Fetching Entries by Reference**: The `getEntriesByReference` function fetches all entries that reference a specific entry from Contentful and returns them as an array of entry objects.
* **Fetching Entries by Multiple References**: The `getEntriesByMultipleReferences` function fetches all entries that reference multiple entries from Contentful and returns them as an array of entry objects.

## Code Quality
The project uses ESLint and Prettier for maintaining code quality and consistency:
* **ESLint Configuration**: The ESLint configuration is defined in the `.eslintrc.js` file. It extends the `next` and `next/core-web-vitals` configurations and includes additional rules for TypeScript, React, and JSX.
* **Prettier Configuration**: The Prettier configuration is defined in the `.prettierrc` file. It specifies the code formatting rules and options for Prettier.
* **TypeScript**: The project is fully typed, ensuring type safety across the codebase.

## SEO and Metadata
The project generates SEO and Open Graph tags for each page and post:
* **SEO Tags**: The `Head` component in `components/common/Head.tsx` generates SEO tags (e.g., title, description, canonical URL) for each page using the `next/head` component.
* **Open Graph Tags**: The `Head` component also generates Open Graph tags (e.g., title, description, image) for each post using the `next/head` component.
* **Metadata Parsing**: The `parseMetadata` function in `lib/metadata.ts` parses and formats metadata fields (e.g., title, description, image) for SEO and Open Graph tags.
* **Dynamic Metadata**: The metadata fields are dynamically generated based on the content of each page and post.
* **Rich Snippets**: The project includes structured data for rich snippets to improve search engine visibility.
* **Canonical URLs**: The project uses canonical URLs to avoid duplicate content issues and improve SEO.
* **SEO Best Practices**: The project follows SEO best practices for optimizing page titles, descriptions, and images.
* **SEO Testing**: The project has been tested for SEO using tools like Lighthouse and Google Search Console.
* **SEO Monitoring**: The project includes monitoring tools like Google Analytics and Google Search Console for tracking SEO performance.

## License
This project is open source and available under the [MIT License](LICENSE).

