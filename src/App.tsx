import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LetterProvider } from "./Context/LetterContext";
import LetterList from "./Components/LetterList";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import AboutMe  from "./Components/AboutMe";
import Tecnologias from "./Components/Tecnologias";
import Experiencia from "./Components/Experiencia";
import Proyectos from "./Components/Proyectos";
import YouTubeVideos from "./YouTubeAPI/YouTubeVideos";
import LetterForm from "./Components/LetterForm";

function App() 
{
  return (
    <div className="overflow-x-hideen text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
          {/* <h1 className=''>Contáctame!</h1> */}
        </div>
      </div>
      <div className="container mx-auto px-8">
        {/* <Navbar/>
        <Landing/>
        <AboutMe/>
        <Tecnologias/>
        <Experiencia/>
        <Proyectos/>
        <YouTubeVideos/>
        <LetterForm/> */}
        <LetterProvider>
            <BrowserRouter>
              <Routes>
                <Route index path="/list" element={<LetterList/>} />
              </Routes>
            </BrowserRouter>
        </LetterProvider>
      </div>
    </div>
  );
}
export default App

{/* <div className='bg-zinc-900 h-screen text-white flex items-center justify-center'>
      <div className='bg-gray-950 p-4 w-5/5'>
        <h1 className='text-3xl font-bold text-center block my-2'>Contáctame!</h1> */}

