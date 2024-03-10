import { inter } from "@/utils/fonts";
import { Providers } from "./providers";

import "@radix-ui/themes/styles.css";

import "@/styles/reset.css";
import "@/styles/global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
