# Andre Ganske - AI Product Manager Portfolio

Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 About

This is the personal portfolio website of Andre Ganske, a Senior Product Manager specializing in Risk & Anti-Fraud Intelligence, AI Gen & Data-Driven Strategy with 15+ years in tech.

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

## 🏃‍♂️ Running Locally

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Building for Production

The site uses Next.js static export for deployment:

```bash
npm run build
```

This generates a static site in the `out/` directory, ready for deployment to GitHub Pages or any static hosting service.

## 🚢 Deployment

### Quick Start

1. **Configure GitHub Pages** (Settings → Pages)
   - Set Source to **GitHub Actions** (not "Deploy from branch")

2. **Merge to main and push**
   ```bash
   git checkout main
   git merge claude/ai-pm-portfolio-site-011CUoQhEfCnLMEjtjc5nMQx
   git push
   ```

3. **Done!** GitHub Actions will automatically build and deploy.

The site will be live at https://andreganske.com.br

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Features

- ✅ Automated deployment via GitHub Actions
- ✅ Static export (no server required)
- ✅ Custom domain support (andreganske.com.br)
- ✅ Optimized for performance

## 📄 License

See [LICENSE](LICENSE) file for details.

## 📧 Contact

- Email: andre.g.ganske@gmail.com
- LinkedIn: [andreganske](https://linkedin.com/in/andreganske)
- GitHub: [andreganske](https://github.com/andreganske)

---

Built with ❤️ using Next.js
