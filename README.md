# Aboutme
Personal site hosted on Vercel, rendered using [static site generation (SSG) via Vite and React Router v7](https://github.com/remix-run/react-router-templates/tree/main/vercel). Access the site below!

<div align = center>
<a target="_blank" 
   href="https://btja.vercel.app" 
   style="font-weight: bold; font-size: 1.5rem; padding: 0.5rem; border: 1px solid white"
>
   btja.vercel.app
</a>
</div>


## Getting Started

### Installation
Install the dependencies:

```bash
npm install
```

### Development
Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Building for Production
Create a production build:

```bash
npm run build
```

## Deployment
Pull requests to the `main` branch automatically trigger Vercel deployments.

## Rendering
To change the rendering strategies ([SPA](https://reactrouter.com/how-to/spa)/SSR/[SSG](https://reactrouter.com/how-to/pre-rendering)), [edit the `react-router.config.ts` file](https://reactrouter.com/start/framework/rendering) at the root of the project.