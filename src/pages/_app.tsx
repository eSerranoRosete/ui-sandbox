import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { AppProvider } from "~/context/context";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <AppProvider>
        <Component {...pageProps} className="debug-screens" />
      </AppProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
