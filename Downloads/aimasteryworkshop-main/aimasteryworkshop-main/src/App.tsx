import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"; // <--- 1. Import useEffect
import ReactPixel from 'react-facebook-pixel'; // <--- 2. Import the Pixel library
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // <--- 3. Initialize Pixel Here
  useEffect(() => {
    const pixelId = '982260423348681'; 
    
    const options = {
      autoConfig: true,
      debug: false,
    };

    // Initialize the pixel
    ReactPixel.init(pixelId, undefined, options);
    
    // Track the initial page view (Standard PageView event)
    ReactPixel.pageView(); 
  }, []);
  // ---------------------------

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;