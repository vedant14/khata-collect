import { Header } from "@/components";
export function Application_Layout({ title, children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title || "Dashboard"}
            </h1>
          </div>
        </div>
        <div className="mx-auto  max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
}
