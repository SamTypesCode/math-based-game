import Canvas from "./Canvas";
import Controls from "./Controls";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./Resizable";

function Layout() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen w-full box-border overflow-hidden flex max-md:flex-col"
    >
      <ResizablePanel defaultSize={25}>
        <Controls />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <Canvas />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Layout;
