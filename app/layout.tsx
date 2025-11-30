import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { NotificationProvider } from "./providers/NotificationProvider";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Local Event Hub - Discover Amazing Events",
  description: "Find and bookmark local events in your area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <AuthProvider>
            <NotificationProvider>
              <Navigation />
              <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                {children}
              </main>
            </NotificationProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
