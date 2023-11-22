import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Header />

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6"></main>
      </div>

      <Footer />
    </div>
  );
}
