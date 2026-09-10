import './globals.css';

export const metadata = {
  title: "Hibba | Frontend Developer",
  description: "Frontend Developer portfolio of Hibba. Building clean, responsive and useful web experiences, with a growing focus on practical AI-powered applications.",
  keywords: ["Frontend Developer", "Next.js", "React", "JavaScript", "Tailwind CSS", "Web Developer", "AI Web Applications", "Hibba"],
  authors: [{ name: "Hibba" }],
  openGraph: {
    title: "Hibba | Frontend Developer",
    description: "I build clean, responsive and useful web experiences, with a growing focus on practical AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" />
      </head>
      <body className="bg-background text-neutral-900 antialiased min-h-screen selection:bg-brand-100 selection:text-brand-900 font-sans">
        {children}
      </body>
    </html>
  );
}
