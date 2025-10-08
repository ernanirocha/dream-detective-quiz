import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import bgMobile from "@/assets/quiz-bg-mobile.webp";
import bgDesktop from "@/assets/quiz-bg-desktop.webp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative min-h-screen">
        {/* Background images with low opacity */}
        <div className="fixed inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] md:hidden"
            style={{ backgroundImage: `url(${bgMobile})` }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] hidden md:block"
            style={{ backgroundImage: `url(${bgDesktop})` }}
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
