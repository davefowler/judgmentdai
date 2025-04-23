# Judgment DAI Website

A static website built with Metalsmith for Judgment DAI, focusing on the risks of artificial general intelligence.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/judgmentdai.git
   cd judgmentdai
   ```

2. Install dependencies
   ```bash
   npm install
   ```

### Development

To build the site and start a local development server:

```bash
npm run dev
```

This will:
1. Build the site using Metalsmith
2. Start a local server at http://localhost:3001

### Building for Production

To build the site for production:

```bash
npm run build
```

The built site will be in the `build` directory.

## Deployment

### Deploying to Netlify

This site is configured to deploy easily to Netlify.

#### Option 1: Deploy via Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

#### Option 2: Deploy via netlify.toml (included in this repo)

The included `netlify.toml` file already configures the build settings for Netlify. Just push your code to a Git repository and connect it to Netlify.

#### Option 3: Deploy directly from local machine

You can also deploy directly from your local machine using the Netlify CLI:

1. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Build your site:
   ```bash
   npm run build
   ```

3. Login to Netlify:
   ```bash
   netlify login
   ```

4. Initialize Netlify in your project:
   ```bash
   netlify init
   ```
   - Select "Create & configure a new site"
   - Follow the prompts to select your team and site name

5. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

### Custom Domain Setup

After deploying to Netlify:

1. Go to your site's dashboard on Netlify
2. Navigate to "Domain settings"
3. Click "Add custom domain"
4. Enter your domain (e.g., judgmentdai.com)
5. Follow Netlify's instructions to configure your DNS settings

For more information, see [Netlify's documentation on custom domains](https://docs.netlify.com/domains-https/custom-domains/).

## Project Structure

```
judgmentdai/
├── build/              # Generated site (not in repo)
├── layouts/            # Handlebars templates
│   └── default.hbs     # Main layout template
├── src/                # Source files
│   ├── css/            # CSS styles
│   │   └── style.css   # Main stylesheet
│   ├── about.md        # About page content
│   ├── after.md        # After Intelligence game page
│   ├── index.md        # Home page content
│   └── plan.md         # Plan page content
├── .gitignore          # Git ignore file
├── index.js            # Metalsmith build configuration
├── netlify.toml        # Netlify configuration
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## Built With

* [Metalsmith](https://metalsmith.io/) - Static site generator
* [Handlebars](https://handlebarsjs.com/) - Templating engine

## License

This project is licensed under the MIT License - see the LICENSE file for details.
