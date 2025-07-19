# Jin's Portfolio 🚀

A modern, responsive portfolio website built with Next.js, featuring smooth animations and an elegant design.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Engaging user experience with motion effects
- **Contact Form**: Integrated email functionality using React Email and Resend
- **Interactive Globe**: 3D globe component using Cobe
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Performance Optimized**: Uses Next.js 15 with Turbopack for fast development
- **Accessibility**: Following modern web accessibility standards

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **3D Graphics**: [Cobe](https://cobe.vercel.app/) for interactive globe
- **Email**: [React Email](https://react.email/) + [Resend](https://resend.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Iconify](https://iconify.design/) + [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font) by Vercel
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/JIN-0205/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── magicui/          # Magic UI components
│   ├── sections/         # Page sections
│   │   ├── about/        # About section
│   │   ├── contact/      # Contact section
│   │   ├── hero/         # Hero section
│   │   ├── project/      # Projects section
│   │   └── skill/        # Skills section
│   └── ui/               # Shared UI components
├── lib/                  # Utility functions
└── public/               # Static assets
    └── videos/           # Project demo videos
```

## 🎨 Sections

- **Hero**: Animated introduction with typewriter effect
- **About**: Personal introduction and background
- **Projects**: Showcase of featured projects with demos
- **Skills**: Technical skills and expertise
- **Contact**: Contact form with email integration

## 📝 Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## 🌐 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JIN-0205/portfolio)

### Manual Deployment

1. Build the project:

```bash
pnpm build
```

2. Deploy the `out` folder to your hosting platform.

## 📧 Contact Setup

To enable the contact form functionality:

1. Sign up for [Resend](https://resend.com/)
2. Get your API key
3. Set environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

## 🎭 Customization

Feel free to customize this portfolio for your own use:

1. Update personal information in the components
2. Replace project data and assets
3. Modify color scheme in `tailwind.config.ts`
4. Add or remove sections as needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/JIN-0205/portfolio/issues).

---

**Made with ❤️ by [Jin](https://github.com/JIN-0205)**
