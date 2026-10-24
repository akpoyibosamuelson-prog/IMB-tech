export const metadata = {
  title: 'IMB Tech | Electrical Services & Materials',
  description: 'Professional electrical services, materials supply, quotatons and business support for homes, offices and contractors.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
