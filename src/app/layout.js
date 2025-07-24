import Header from "../components/Header";
import Footer from "../components/Footer";
import './globals.css';

export const metadata = {
  title: 'Allure Home',
  description: 'Sofisticação e tecnologia para seu lar.',
};

export default function RootLayout({children}){
  return (
    <html lang = "pt-br">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />  
      </body>
    </html>
  )
}