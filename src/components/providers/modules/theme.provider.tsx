"use client";
import { ThemeProvider as NextThemesProvider } from "next-theme";
import { ComponentProps } from "react";

/**
 * ThemeProvider component wraps its children with the NextThemesProvider from next-theme.
 * This enables theme management across your application.
 *
 * @param children - The content to be wrapped by the theme provider.
 * @param props - Additional props passed to NextThemesProvider.
 */
export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
