# AI Tools Directory for Teachers and Students

A searchable, filterable directory of AI tools for teachers and beginner AI students. Built with plain HTML, CSS and JavaScript.

> **Sample dataset:** The 18 tools in `data.js` are a small, hand-written sample, not a complete or ranked list. **Features and pricing change often.** Pricing appears on a card only when it was checked against an official source (the source link and check date are shown). Otherwise the card says pricing is not verified. Always confirm details on the official website. Listing a tool is not an endorsement.

## Features

- Cards showing tool name, purpose, classroom use case, official website link, verified pricing (when available) and limitations
- Search box (matches name, purpose, classroom use and category)
- Category filters: Writing, Research, Presentation, Image generation, Coding, Productivity, Education
- Clear button that resets search and filter
- Result count and a friendly "no results" message
- Responsive layout: 1 column on phones, 2 on tablets, 3 on computers
- No backend, no API keys, no tracking

## Project structure

```
ai-tools-directory/
├── index.html
├── style.css
├── data.js        (sample dataset)
├── script.js      (search and filter logic)
├── README.md
├── LICENSE
└── screenshots/
```

## Setup

1. Download or clone this repository.
2. Open `index.html` in a browser.

## Adding or editing tools

Open `data.js` and copy an existing tool block. Follow these rules:

- `website`: use the tool's real official address. If you are not sure, use `null`.
- `pricing`: keep it `null` unless you have checked an official page. If verified, fill in `text`, `source` (link to the official page) and `checked` (date).
- Re-check links and pricing regularly, because they go out of date.

## Testing checklist

- Page loads with 18 cards and "Showing 18 of 18 tools".
- Typing `coding` shows the coding tools. Typing `zzzz` shows the no-results message.
- Clicking a category button shows only that category.
- Search and category work together (e.g. Research + `sources`).
- Clear resets both search and category.
- Every "Visit official website" link opens in a new tab.
- Only GitHub Copilot shows verified pricing. All other cards say pricing is not verified.
- The layout works on a phone-sized screen.

## Host with GitHub Pages

1. Push the files to a public GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then **Save**.
5. Your site appears at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Limitations

- Small sample, not comprehensive or ranked
- Descriptions are general summaries and may be out of date
- Pricing is verified for one tool only, as of the date shown on its card
- No user accounts, ratings or reviews

## Screenshots

```
![Directory home](screenshots/home.png)
![Filtered results](screenshots/filtered.png)
![Mobile view](screenshots/mobile.png)
```

## License

Released under the [MIT License](LICENSE).
