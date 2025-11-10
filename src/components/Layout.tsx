import Canvas from "./Canvas";
import Controls from "./Controls";

function Layout() {
  return (
    <main className="min-h-screen w-full box-border overflow-hidden flex max-md:flex-col">
      <Controls />
      <Canvas />
    </main>
  );
}

export default Layout;
