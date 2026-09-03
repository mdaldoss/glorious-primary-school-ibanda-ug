# Ibanda Glorious Primary School — Website

Static website for Ibanda Glorious Primary School, hosted free on GitHub Pages.

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
|------|--------|
| `images/photo1.jpg` | Hero background & gallery |
| `images/photo2.jpg` | About section & gallery |
| `images/photo3.jpg` | Founder photo & gallery |
| `images/photo4.jpg` | Gallery |
| `images/logo.png`   | Browser tab icon |

---

## How Dr. Andrew Can Update the Site (No coding needed)

Everything below can be done from a phone or computer at **github.com**, with no app to install.

### Upload a new photo

1. Go to [github.com](https://github.com) and sign in
2. Open this repository, then click the `images/` folder
3. Click **Add file → Upload files**
4. Choose your photo from your phone gallery (JPG or PNG, under 5 MB)
5. Scroll down and click **Commit changes**

Then open `content.js`, find `gallery.images`, and add a new line:
```js
{ src: "images/yourphoto.jpg", caption: "A description of the photo" },
```

### Add a school video

1. Upload your WhatsApp video to YouTube (free — use the YouTube app on your phone)
2. Open the video on YouTube and copy the ID from the link.
   Example: in `youtube.com/watch?v=abc123xyz`, the ID is `abc123xyz`
3. Open `content.js`, find the `videos` section, and add:
   ```js
   { youtube_id: "abc123xyz", caption: "Morning assembly, Term 2 2025" },
   ```
4. Click **Commit changes** — the video appears on the site immediately

### Update the fundraising numbers

1. Open `content.js` in the repository
2. Click the pencil icon (Edit this file)
3. Find `raised: 2325` and change the number to the new total
4. Find `donors: 39` and update the donor count
5. Click **Commit changes**

### Update any other text

Open `content.js`, click the pencil, change the value you want, commit. The website updates within seconds. You can change: school description, founder story, campaign text, adopt-a-student price, volunteer roles, contact details, or anything else.

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
- **Website:** www.glorious-school-ibanda.com
- **Email:** hello@glorious-school-ibanda.com / andak288@yahoo.com
