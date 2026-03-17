# Ibanda Glorius Primary School — Website

Static website for Ibanda Glorius Primary School, hosted free on GitHub Pages.

---

## Editing Content

**All text and links live in one file: `content.js`**

Open `content.js` in any text editor and change the values. No coding needed.
Save the file, commit, and push — the website updates automatically.

What you can change there:
- School name, location, contact details
- Hero heading and subheading
- About text and stats
- Founder story paragraphs and quote
- Campaign amounts (goal, raised, donors) and budget breakdown
- Adopt-a-student pricing and benefits
- Volunteer role descriptions
- Gallery image paths and captions
- WhatsApp number and pre-filled messages
- Footer text

---

## Updating Images

1. Drop your photos into the `images/` folder (JPG or PNG, ~1–2 MB max).
2. Open `content.js` and update the file paths, e.g.:
   ```js
   image: "images/myNewPhoto.jpg",
   ```
3. The gallery supports up to 4 images — update the `gallery.images` array.

**Current images:**
| File | Used as |
|------|---------|
| `images/photo1.jpg` | Hero background & gallery |
| `images/photo2.jpg` | About section & gallery |
| `images/photo3.jpg` | Founder photo & gallery |
| `images/photo4.jpg` | Gallery |
| `images/logo.png`   | Browser tab icon |

---

## Deploying to GitHub Pages (Free)

### First time

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new repository — name it `standrewsibanda` (or anything you like).
3. Upload the entire `site/` folder contents to the repository root.
4. Go to **Settings → Pages**, set source to **Deploy from branch → main → / (root)**.
5. Your site will be live at `https://yourusername.github.io/standrewsibanda/`

### Custom domain

### Updating the site after changes

```bash
git add .
git commit -m "Update content"
git push
```
GitHub Pages redeploys automatically within ~1 minute.

---

## File Structure

```
site/
├── index.html       ← The page (do not edit unless you know HTML)
├── content.js       ← ALL editable content lives here ✏️
├── css/
│   └── style.css    ← Styles (do not edit unless you know CSS)
├── js/
│   └── main.js      ← JavaScript (do not edit)
└── images/
    ├── logo.png
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    └── photo4.jpg
```

---

## Links

- **GoFundMe campaign:** https://www.gofundme.com/f/one-more-classroom-give-40-children-in-ibanda-needs-a-class
- **WhatsApp Dr. Andrew:** https://wa.me/256772571975
- **Email:** info@standrewsibanda.org
