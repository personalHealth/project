"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import Auth from "./auth";

export default function Provider({ children }) {
  <KindeProvider>
    <Auth>{children}</Auth>
  </KindeProvider>;
}
