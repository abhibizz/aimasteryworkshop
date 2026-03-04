import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/components/Footer";

// Lazy-load all page routes
const Index = lazy(() => import("./pages/Index"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const CyberSecurity = lazy(() => import("./pages/CyberSecurity"));
const AIMasterclass = lazy(() => import("./pages/AIMasterclass"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const ChatGptAiTools = lazy(() => import("./pages/ChatGptAiTools"));
const HealthcareAiTools = lazy(() => import("./pages/HealthcareAiTools"));
const AiForHrProfessionals = lazy(() => import("./pages/AiForHrProfessionals"));
const DataScienceAnalytics = lazy(() => import("./pages/DataScienceAnalytics"));
const CyberLanding = lazy(() => import("./pages/CyberLanding"));
const CyberUpgrade = lazy(() => import("./pages/CyberUpgrade"));
const CyberV2 = lazy(() => import("./pages/CyberV2"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => <div className="min-h-screen" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<><Index /><Footer /></>} />
            <Route path="/cyber-security" element={<><CyberSecurity /><Footer /></>} />
            <Route path="/ai-masterclass" element={<><AIMasterclass /><Footer /></>} />
            <Route path="/digital-marketing" element={<><DigitalMarketing /><Footer /></>} />
            <Route path="/chatgpt-other-ai-tools" element={<><ChatGptAiTools /><Footer /></>} />
            <Route path="/chatgpt-ai-tools-for-healthcare" element={<><HealthcareAiTools /><Footer /></>} />
            <Route path="/ai-for-hr-professionals" element={<><AiForHrProfessionals /><Footer /></>} />
            <Route path="/data-science-analytics" element={<><DataScienceAnalytics /><Footer /></>} />
            <Route path="/cyber" element={<><CyberLanding /><Footer /></>} />
            <Route path="/upgrade" element={<><CyberUpgrade /><Footer /></>} />
            <Route path="/cyberV2" element={<><CyberV2 /><Footer /></>} />
            <Route path="/thank-you" element={<><ThankYou /><Footer /></>} />
            <Route path="/payment-success" element={<><PaymentSuccess /><Footer /></>} />
            <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer /></>} />
            <Route path="/disclaimer" element={<><Disclaimer /><Footer /></>} />
            <Route path="/terms-and-conditions" element={<><TermsAndConditions /><Footer /></>} />
            <Route path="/cookie-policy" element={<><CookiePolicy /><Footer /></>} />
            <Route path="/refund-and-cancellation" element={<><RefundPolicy /><Footer /></>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
