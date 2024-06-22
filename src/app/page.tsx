import Footer from "@/components/footer";
import MainScreen from "@/pages/screen";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto">
        <MainScreen />
      </div>
      <Footer />
    </div>
  );
}
