
import Header from "@/components/Header";
import Temple from "@/components/Temple";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-divine-purple-light/5">
      <Header />
      <main className="flex-1 flex flex-col">
        <Temple />
      </main>
    </div>
  );
};

export default Index;
