import { RouterProvider } from "react-router";
import { MotionProvider } from "./motion/MotionContext";
import { MotionKernel } from "./motion/MotionKernel";
import { LanguageProvider } from "./i18n/LanguageContext";
import { router } from "./routes";

export default function App() {
  return (
    <LanguageProvider>
      <MotionProvider>
        <MotionKernel>
          <RouterProvider router={router} />
        </MotionKernel>
      </MotionProvider>
    </LanguageProvider>
  );
}
