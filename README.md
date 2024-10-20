# Headless CMS Blog with Next.js and Contentful

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-blue.svg)](https://nextjs.org/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-green.svg)](https://www.contentful.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

This project is a **Next.js** blog application powered by **Contentful** as a headless CMS. The application features dynamic content fetching, SEO-optimized pages, and category-based blog post navigation. It is designed to be modular, with reusable components, efficient data fetching, and rich text rendering capabilities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Code Quality](#code-quality)
- [SEO and Metadata](#seo-and-metadata)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Blog Post Pages**: Fetches and displays blog posts dynamically from Contentful using slugs.
- **Rich Text Rendering**: Supports rich text content rendering using `@contentful/rich-text-react-renderer`.
- **Category Navigation**: Allows users to filter posts by category, with paginated category pages.
- **Popular Posts Sidebar**: Displays the top 10 most popular posts based on the number of views.
- **Tags Cloud Sidebar**: Displays the popular post tags.
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

The project structure is organized as follows:
bash
```bash
├── app
│ ├── category
│ │ └── [slug]
│ │     └── page.tsx
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ ├── post
│ │ └── [slug]
│ │     └── page.tsx
│ └── tag
│     └── [slug]
│         └── page.tsx
├── components
│ ├── header
│ │ ├── Header.module.css
│ │ └── Header.tsx
│ └── post-preview
│     ├── PostPreview.module.css
│     └── PostPreview.tsx
├── containers
│ ├── category
│ │ ├── CategoryContainer.module.css
│ │ └── CategoryContainer.tsx
│ ├── home
│ │ ├── HomeContainer.module.css
│ │ └── HomeContainer.tsx
│ ├── post
│ │ ├── PostComponent.module.css
│ │ └── PostComponent.tsx
│ └── tag
│     ├── TagContainer.module.css
│     └── TagContainer.tsx
├── lib
│ ├── createMetadata.ts
│ └── parseContentfulImageAsset.ts
├── models
│ ├── Author.ts
│ ├── Category.ts
│ ├── Post.ts
│ └── Tag.ts
├── services
│ ├── categories.ts
│ ├── contentfulClient.ts
│ ├── posts.ts
│ └── tags.ts
└── styles
    └── globals.css
```

## Code Quality
- **ESLint**: Linting is enforced to ensure code consistency.
- **Prettier**: Code is formatted using Prettier, with linting rules to ensure proper formatting before commits.
- **TypeScript**: The project is fully typed, ensuring type safety across the codebase.


## SEO and Metadata
The application supports dynamic metadata generation for each blog post, providing:

- **Title**: The title of the post.
- **Description**: An excerpt from the post.
- **OpenGraph Image**: A featured image for sharing on social media.
- **Canonical URL**: The URL for each post and category page.
- **Tags**: The tags associated with each post.

This is handled in generateMetadata in the Next.js page component, ensuring every post has unique SEO data.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


