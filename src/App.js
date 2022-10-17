import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col font-body justify-center items-center w-screen min-h-screen h-auto overflow-y-auto overflow-x-hidden bg-lm-bg-vlGray dark:bg-dm-bg-vdBlue">
        <div className="relative flex flex-col justify-start items-center gap-12 w-full max-w-[1550px] min-h-screen antialiased h-auto pb-12">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
