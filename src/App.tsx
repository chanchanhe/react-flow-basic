import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Workflow } from "./Workflow/Workflow.tsx";

function App() {
  return (
    <>
      <ChakraProvider value={defaultSystem}>
        <Workflow />
      </ChakraProvider>
    </>
  );
}

export default App;
