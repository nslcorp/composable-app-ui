import dotenv from 'dotenv'
dotenv.config();
import "./globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/store/ReduxProvider";
import Bootstrap from "@/app/Bootstrap";

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Bootstrap>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </Bootstrap>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
