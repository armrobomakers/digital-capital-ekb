import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Цифровой капитал — Екатеринбург, 13 июня',
  description: 'Конференция для предпринимателей, инвесторов и экспертов: капитал, инвестиции, ИИ, личный бренд и деловое окружение.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
