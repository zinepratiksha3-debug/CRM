import { LanguageProvider } from "./context/LanguageContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  );
};

export default App;