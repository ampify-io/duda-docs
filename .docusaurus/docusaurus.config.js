export default {
  "title": "Ampify",
  "tagline": "Identical AMP is now Possible",
  "url": "https://duda-docs.netlify.com",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "ampify-io",
  "projectName": "duda-docs",
  "themeConfig": {
    "hideableSidebar": true,
    "sidebarCollapsible": false,
    "sidebar": {
      "autoCollapseCategories": false
    },
    "colorMode": {
      "disableSwitch": true,
      "defaultMode": "light",
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "algolia": {
      "apiKey": "fb03546ab3209f15a48915837f3cc081",
      "indexName": "ampify",
      "contextualSearch": false,
      "searchParameters": {},
      "appId": "BH4D9OD16A"
    },
    "navbar": {
      "hideOnScroll": true,
      "title": "Ampify",
      "logo": {
        "alt": "Ampify Logo",
        "src": "img/logo.svg",
        "href": "/docs/About_AMP"
      },
      "items": [
        {
          "type": "search",
          "position": "right"
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\omerr\\Desktop\\duda-docs\\sidebars.js"
        },
        "theme": {
          "customCss": "C:\\Users\\omerr\\Desktop\\duda-docs\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};