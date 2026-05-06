import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const defaultTranslations = {
    fr: {
      title: "Page non trouvée",
      description: "La page que vous cherchez n'existe pas ou a été déplacée.",
      backHome: "Retour à l'accueil"
    },
    en: {
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to home"
    }
  };

  const language = "fr";
  const t = defaultTranslations[language] || defaultTranslations.fr;

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="font-raleway text-8xl font-bold text-primary">404</h1>
        <h2 className="font-raleway text-2xl font-semibold">{t.title}</h2>
        <p className="text-muted-foreground max-w-md">{t.description}</p>
        <Button asChild>
          <Link to="/">{t.backHome}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;