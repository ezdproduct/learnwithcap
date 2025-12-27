import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Tiếng Anh Giao Tiếp Chuyên Ngành Xây Dựng - CAP",
  description: "Khóa học Tiếng Anh giao tiếp chuyên ngành Xây dựng, Kiến trúc và Nội thất. Nâng cao kỹ năng giao tiếp, từ vựng và tư duy ngoại ngữ.",
  icons: {
    icon: 'https://learnwithcap.com/wp-content/uploads/2025/06/cap-logo-1.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
