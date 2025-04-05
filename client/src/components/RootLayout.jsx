import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

function RootLayout() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "90vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;