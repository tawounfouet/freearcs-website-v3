import { Loader2 } from "lucide-react";

export const LoadingSpinner = ({ className = "", size = "h-8 w-8", ...props }) => (
  <div
    className={`flex items-center justify-center min-h-[200px] ${className}`}
    {...props}
  >
    <Loader2 className={`${size} animate-spin text-primary`} />
  </div>
);

export const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-12 w-12 animate-spin text-primary" />
  </div>
);

export default LoadingSpinner;