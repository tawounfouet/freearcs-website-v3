import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <h1 className="font-raleway text-4xl font-bold text-destructive">
              Oops! Une erreur s'est produite
            </h1>
            <p className="text-muted-foreground">
              {this.state.error?.message || "Quelque chose a mal tourné."}
            </p>
            <Button asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;