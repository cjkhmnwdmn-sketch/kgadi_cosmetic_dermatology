# Kgadi's Cosmetic Dermatology Website

## Project overview
This project adapts the original FlowFix Plumbing Services coursework structure into **Kgadi's Cosmetic Dermatology**. The website uses the supplied dermatology proposal as its main content source.

## Folder and file structure
```
flowfix_plumbing/
└── flowfix_plumbing/
    ├── index.html
    ├── about.html
    ├── services.html
    ├── inquiries.html
    ├── contact.html
    ├── css_assets/
    │   └── style.css
    ├── js_assets/
    │   └── .gitkeep
    ├── _images/
    │   ├── dermatology-treatment-480.jpg
    │   ├── dermatology-treatment-960.jpg
    │   ├── dermatology-treatment-1440.jpg
    │   ├── dermatology-treatment-original.png
    │   ├── cosmetic-treatment-480.jpg
    │   ├── cosmetic-treatment-960.jpg
    │   ├── cosmetic-treatment-1440.jpg
    │   ├── cosmetic-treatment-original.png
    │   └── testing-screenshots/
    ├── private/
    │   ├── BUSINESS PROPOSAL OF MY DERMATOLOGY.docx
    │   └── ...
    └── README.md
```

The five original page filenames and the original folder structure are retained. The `js_assets` folder is kept only to preserve the project structure; it contains no JavaScript.

## Design palette
The site uses four requested brand colours:
- **Aquamarine** for fresh accents, focus states and visual highlights.
- **Light pink** for soft accents and feminine visual details.
- **Beige** for warm backgrounds and content panels.
- **Purple** for headings, navigation and primary actions.

## Responsive images
Images use `srcset` and `sizes`. This allows the browser to select a suitable 480px, 960px or 1440px image depending on the available screen width. CSS also prevents images from overflowing their containers.

## Responsive layout
The CSS includes tablet and mobile breakpoints. Multi-column grids collapse to fewer columns and then to one column on smaller screens. The navigation also wraps for small displays.

## JavaScript
JavaScript is used for interactive elements, lightbox galleries, and custom client-side form validation.

## Source material
The supplied dermatology business proposal is the source for the business description, service list and treatment-process descriptions used by the website.

## Part 3 Overview
- Implemented an interactive image lightbox modal for the treatment gallery supporting click-to-open, close button, and Esc key interactions.
- Added AJAX-based client-side form validation and asynchronous submission for improved user experience.

## Changelog
- **Part 2 Feedback Updates:** Fixed image file paths and standardized folder directory structure (`images/`).
- **Lightbox Feature:** Implemented an interactive JavaScript lightbox gallery for treatment photos supporting mouse clicks and `Esc` key navigation.
- **AJAX Form Submission:** Replaced default form handling with asynchronous `fetch()` API submission and custom client-side validation.

## References
- MDN Web Docs: Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- MDN Web Docs: Form Validation (https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)