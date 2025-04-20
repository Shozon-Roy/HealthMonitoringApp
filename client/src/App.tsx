import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CovidScreen from "@/pages/CovidScreen";
import HeartScreen from "@/pages/HeartScreen";
import SleepScreen from "@/pages/SleepScreen";
import DoctorsScreen from "./pages/DoctorsScreen";
import ArticlesScreen from "./pages/ArticlesScreen";
import HealthScreen from "./pages/HealthScreen";
import ProfileScreen from "./pages/ProfileScreen";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/covid" component={CovidScreen} />
      <Route path="/heart" component={HeartScreen} />
      <Route path="/sleep" component={SleepScreen} />
      <Route path="/doctors" component={DoctorsScreen} />
      <Route path="/articles" component={ArticlesScreen} />
      <Route path="/health" component={HealthScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-[#c1f1e0] flex items-center justify-center p-4">
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
