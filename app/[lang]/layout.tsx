import { notFound } from "next/navigation";
import { isSupportedLang, Lang } from "../../lib/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isSupportedLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;

  return (
    <>
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
