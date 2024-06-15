import { PropsWithChildren } from "react";
import NavBar from "./_components/navbar";
import Navigation from "./_components/navigation";
import Footer from "./_components/footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-6">
        <Navigation />
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
