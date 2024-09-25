"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: "class",
    },
    typography: {
      fontFamily: "var(--font-roboto)",
    },
    colorSchemes: {
      light: {},
      dark: {},
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
