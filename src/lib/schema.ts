export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HomeHealthcareService",
  "name": "Comfort Plus 65",
  "description": "Services de soins à domicile personnalisés pour les personnes âgées de 65 ans et plus dans la grande région de Montréal.",
  "url": "https://comfortplus65.com",
  "telephone": "+15142228271",
  "email": "contact@comfortplus65.com",
  "areaServed": {
    "@type": "City",
    "name": "Montréal"
  },
  "availableService": [
    {
      "@type": "Service",
      "name": "Activités de la Vie Quotidienne (AVQ)",
      "description": "Soins personnels, hygiène, habillage et aide aux déplacements",
      "offers": {
        "@type": "Offer",
        "price": "13.99",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "13.99",
          "priceCurrency": "CAD",
          "unitCode": "HUR",
          "unitText": "par heure"
        }
      }
    },
    {
      "@type": "Service",
      "name": "Activités de la Vie Domestique (AVD)",
      "description": "Entretien ménager, préparation des repas, courses et accompagnement",
      "offers": {
        "@type": "Offer",
        "price": "12.99",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "12.99",
          "priceCurrency": "CAD",
          "unitCode": "HUR",
          "unitText": "par heure"
        }
      }
    },
    {
      "@type": "Service",
      "name": "Soins Spécialisés",
      "description": "Activités physiques adaptées, animation, loisirs et accompagnement spécifique",
      "offers": {
        "@type": "Offer",
        "price": "16.99",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "16.99",
          "priceCurrency": "CAD",
          "unitCode": "HUR",
          "unitText": "par heure"
        }
      }
    }
  ],
  "serviceType": "Soins à domicile pour personnes âgées",
  "audience": {
    "@type": "Audience",
    "audienceType": "Personnes âgées de 65 ans et plus"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de soins à domicile",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Soins personnels",
        "itemListElement": [
          "Toilette et hygiène",
          "Habillage et déshabillage",
          "Aide à la mobilité",
          "Soins d'incontinence"
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Services domestiques",
        "itemListElement": [
          "Entretien ménager",
          "Préparation des repas",
          "Courses et commissions",
          "Accompagnement"
        ]
      }
    ]
  }
}; 