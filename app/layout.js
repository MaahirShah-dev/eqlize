// app/layout.js

import './globals.css';

export const metadata = {
  title: 'Eqlize',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
