# Property Details

This is a prototype
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

---

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

```
 sincePurchase = `recentValuation - originalPurchasePrice`
 sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
 annualAppreciation =`sincePurchasePercentage / number of years since purchase`
 colours used for the positive change in the image are #c2f7e1 and #006b57
```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility

- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions

1. Given more time, what other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

---

**Optional**: If you have time, show us some more by fetching the data from the api

- Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
- Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
- Use whichever method or library you are comfortable with to fetch the data

---

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

---

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

### Notes

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, please only spend a few hours working on it.

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

Note: if yo get an error when you try run development server
Use node version 16 and

```bash
rm -rf node_modules
npm i
npm run dev
```

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## UI reasoning, assumptions & implementations

I have used the useMemo hook to avoid calculating the sincePurchaseValue, sincePurchasePercentage, dateOfPurchase, and noOfYearsSincePurchase on every render.

The design mock ups show value changes without pence.
The other amounts on the page are with pence. Hence for uniformity and amount accuracy, I have rendered 'Valuation Changes' amount with pence.

Based on 'Mobile first', I have used flex-basis: 50% on both Since Purchase and Annual Appreciation items, so the text and the amount and percent change are clearly visible and look uniform. They occupy half of the total width for screen size below 768px and and one-third above.

## Possible refactors


1. Given more time, what other changes you would have liked to make?

    Make accessibility improvements - tabbing [Control focus with tab-index](https://web.dev/control-focus-with-tabindex/)

    Dynamically fetch data and add error handling.

    Add jest unit tests for calculation functions in util.

    Add React testing library tests for Details component


2. What UX or design improvements or alterations might you suggest?

    Accessibility & SEO improvements
    - Background and foreground colours do not have a sufficient contrast ratio. I would check with design team if that could be improved.
    - Document doesn't have a <title> element.
    - <html> element does not have a [lang] attribute.

    Separate ticket for extracting "Theme" components for responsive layout, fonts, sizes, colours into separate components; in conjunction with team and UX designer.
