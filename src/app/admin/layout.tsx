import Navbar from "@/components/ui/dashboard/navbar";
import Sidebar from "@/components/ui/dashboard/sidebar";

// interface LayoutProps {
//   children: ReactNode; // Ensures children is valid JSX content
// }

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-4 gap-1 bg-slate-700 relative min-h-screen">
      {/* Sidebar - Takes 1 column */}
      <div className="col-span-1 relative">
        <Sidebar />
      </div>

      {/* Main Content - Takes 3 columns */}
      <div className="col-span-3 m-2">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

// : React.FC<LayoutProps>
