import { RouterProvider } from "react-router";
import { MotionProvider } from "./motion/MotionContext";
import { MotionKernel } from "./motion/MotionKernel";
import { router } from "./routes";

export default function App() {
  return (
    <MotionProvider>
      <MotionKernel>
        <RouterProvider router={router} />
      </MotionKernel>
    </MotionProvider>
  );
}
