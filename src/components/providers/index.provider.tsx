import { ReactNode } from "react";
import { ThemeProvider } from "./modules/theme.provider";

/**
 * Root Provider component to wrap your app with all required context providers.
 *
 * @param children - React nodes to be wrapped by providers.
 * @returns A component tree wrapped in all app-level providers.
 */
export default function Provider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
