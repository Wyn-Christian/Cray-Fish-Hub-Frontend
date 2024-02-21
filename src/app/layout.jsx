import "../styles/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "../utils/theme";

export const metadata = {
  title: "Cray Fish Hub",
  icons: {
    icon: "/assets/logo-2.svg",
    shortcut: "/assets/logo-2.svg",
    apple: "/assets/logo-2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
