import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container py-5">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AR-based eCommerce Platform",
              "applicationCategory": "ShoppingApplication",
              "operatingSystem": "Android, iOS",
              "creator": {
                "@type": "Person",
                "name": "Muhammad Tahir Mansoor,Rimsha Ashraf,Ayesha Tariq",
                "affiliation": "University Of Sargodha",
                "email": "tahirmansoor1231@gmail.com"
              },
              "datePublished": "2025-05-15",
              "description": "An augmented reality based eCommerce platform allowing users to preview products in real-world environments before purchasing.",
              "url": "https://github.com/mtahirmansoor/AR_ecommerce-fyp.git",
              "version": "1.0.0",
              "license": "https://opensource.org/licenses/MIT",
              "programmingLanguage": "JavaScript",
              "keywords": [
                "Augmented Reality",
                "eCommerce",
                "AR Shopping",
                "FYP",
                "RetailTech"
              ],
             
              "isAccessibleForFree": true
            })
          }}
        />
      </head>
      <h1 className="text-center mb-4">AR-based eCommerce </h1>
      <p>
       This Final Year Project (FYP) is developed as part of the BSCS program and introduces an innovative way to shop online using Augmented Reality (AR). With this platform, users can place and preview products in their actual environment through their smartphone — helping them make confident, informed buying decisions before they ever click “buy.”
      </p>
      <h3 className="mt-4">GitHub Repository</h3>
      <a
        href="https://github.com/mtahirmansoor/AR_ecommerce-fyp.git"
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>

      <h3 className="mt-5">FAIR Principles Mapping</h3>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>Principle</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Findable</td>
            <td>Code and documentation hosted on GitHub with metadata using JSON-LD.</td>
          </tr>
          <tr>
            <td>Accessible</td>
            <td>Repository and resources are publicly accessible over HTTPS.</td>
          </tr>
          <tr>
            <td>Interoperable</td>
            <td>Follows web standards (HTML, JSON-LD, JavaScript) and schema.org vocabulary.</td>
          </tr>
          <tr>
            <td>Reusable</td>
            <td>Licensed under MIT, documented, and designed for reuse in similar projects.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
