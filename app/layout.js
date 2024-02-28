import localFont from "next/font/local";
import "./globals.css";
import Nav from "./_components/Nav";

const myFont = localFont({
  src: [
    {
      path: "./_assets/font-amazon-ember/AmazonEmber_W_Bd.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_assets/font-amazon-ember/AmazonEmber_W_Rg.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Welcome to Amazon",
  description: "Amazon: Spend less, smile more",
};

export default function RootLayout({ children }) {
  return (
    <html className={myFont.className} lang="en">
      <body className="text-clr-primary">
        <Nav />
        {children}
      </body>
    </html>
  );
}
