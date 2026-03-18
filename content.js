/**
 * ============================================================
 *  IBANDA GLORIUS PRIMARY SCHOOL — WEBSITE CONTENT
 *
 *  Edit this file to update all text on the website.
 *  No coding knowledge required — just change the text values.
 *
 *  IMAGES: drop your photos into the /images folder and update
 *  the file paths below (e.g. "images/myPhoto.jpg").
 * ============================================================
 */

const CONTENT = {

  // ── SCHOOL IDENTITY ───────────────────────────────────────
  school: {
    name: "Ibanda Glorius Primary School",
    org_name: "St. Andrew's School Project For The Young",
    cbo_number: "CBO No. 529",
    tagline: "Quality Education for Every Child",
    location: "Ibanda Town Council, Western Uganda",
    founded: "2022",
    students: "50+",
    classrooms: "4",
    email: "andak288@yahoo.com",
    phone: "+256 752 978 287",
    postal: "P.O. Box 356, Ibanda, Uganda",
    logo: "images/logo.png",
  },

  // ── HERO SECTION ──────────────────────────────────────────
  hero: {
    heading: "Building Futures,\nOne Classroom at a Time",
    subheading:
      "Ibanda Glorius Primary School brings quality, affordable education to orphans and children from poor backgrounds in rural Uganda — powered by community, compassion, and global solidarity.",
    cta_primary:  { label: "Support the Campaign",  href: "#campaign" },
    cta_secondary:{ label: "Adopt a Student",        href: "#adopt" },
    // ↓ Replace with your own image. Drop the file in /images and update the path.
    image: "images/photo1.jpg",
  },

  // ── ABOUT SECTION ─────────────────────────────────────────
  about: {
    heading: "About the School",
    body: [
      "Ibanda Glorius Primary School is a private primary school located in Ibanda Town Council, Western Uganda. We are registered as a Community Based Organisation (CBO No. 529) and our mission is simple: give every local child access to quality education at a price their family can afford.",
      "We serve orphans, children from poor backgrounds, and bright young learners who would otherwise be locked out of education. Many of our families have been devastated by poverty and HIV/AIDS. The school is gender-sensitive and welcomes children regardless of religion, tribe, or background.",
      "Today we house <strong>more than 50 students</strong> across Primary 1, 2, and 3. Four classrooms have been built on the ground floor — a direct result of donations from generous supporters around the world. Our long-term vision is to grow to over <strong>400 students</strong> and become a lasting institution for the people of Ibanda.",
    ],
    stats: [
      { number: "50+",  label: "Students Enrolled" },
      { number: "4",    label: "Classrooms Built" },
      { number: "400",  label: "Students — Long-term Vision" },
      { number: "2022", label: "Year Founded" },
    ],
    // ↓ Replace with a school photo
    image: "images/photo2.jpg",
  },

  // ── FOUNDER STORY ─────────────────────────────────────────
  story: {
    heading: "Our Story",
    founder_name: "Dr. Andrew Akampurira",
    founder_title: "Founder & Director, PhD",
    founder_whatsapp: "+256772571975",
    body: [
      "Dr. Andrew Akampurira grew up in Ibanda and experienced first-hand how poverty robs children of their future. Watching bright young minds drop out of school because their families could not afford the fees drove him to dedicate his life to change.",
      "After years of planning and earning his PhD, Andrew launched <em>St. Andrew's School Project For The Young</em> — a community-based organisation with one goal: build a school that would still be serving the children of Ibanda a hundred years from now. Thanks to early supporters around the world, the first ground floor became a reality.",
      "\"By sacrificing the cost of a bottle of beer you would be contributing a lot to the welfare of an African child. Our assumption is that if 8,687 people can donate €25+, the project would be accomplished in the shortest possible time.\"",
    ],
    quote: "Every child deserves a classroom. Education is not a privilege — it is a right. I have dedicated my life to making that right a reality for the children of Ibanda.",
    // ↓ Replace with Andrew's photo
    image: "images/photo3.jpg",
  },

  // ── CAMPAIGN SECTION ──────────────────────────────────────
  campaign: {
    heading: "Help Us Build One More Classroom",
    subheading: "40 Children in Ibanda Need a New Room",
    body: [
      "The first floor is complete, but demand keeps growing. More children are enrolling every term and we are running out of space. We need to build <strong>two new classrooms on the second floor</strong> to accommodate more students and secure the school's future.",
      "Based on the engineer's official estimate, the full construction costs <strong>44,526,000 Ugandan Shillings — approximately €11,132</strong>. Every euro goes directly to the building site.",
    ],
    goal: 11132,
    raised: 2325,
    donors: 39,
    currency: "€",
    ugx_total: "44,526,000 UGX",
    gofundme_url:
      "https://www.gofundme.com/f/one-more-classroom-give-40-children-in-ibanda-needs-a-class",
    gofundme_label: "Donate on GoFundMe",
    budget_items: [
      { item: "Superstructure (walls, columns, slab)", cost: "24,051,000 UGX (~€6,010)" },
      { item: "Roofing",                               cost: "11,475,000 UGX (~€2,867)" },
      { item: "Windows, doors & balcony work",         cost: " 9,000,000 UGX (~€2,250)" },
    ],
    // ── BANK TRANSFER (via WISE or direct) ────────────────
    bank: {
      name:    "St. Andrews Project for the Young",
      account: "0035363001",
      bank:    "Diamond Trust Bank Uganda Limited",
      wise_url: "https://wise.com",
    },
  },

  // ── ADOPT A STUDENT SECTION ───────────────────────────────
  adopt: {
    heading: "Adopt a Student",
    subheading: "Change a Child's Life for €60 a Year",
    body: [
      "For just <strong>€60 per year</strong> — less than €5 a month — you can sponsor a child's full education at Ibanda Glorius Primary School. Your contribution covers tuition, learning materials, and basic school supplies for an entire school year.",
      "You will receive updates about your sponsored student and the school's progress. Your support gives a child — perhaps an orphan, perhaps a first-generation learner — the chance at a better future.",
    ],
    price_per_year: "€60",
    price_per_month: "~€5",
    benefits: [
      "Full tuition for one school year",
      "Learning materials & school supplies",
      "Regular progress updates from the school",
      "Connection to our global supporter community",
    ],
    cta_label: "Adopt a Student via WhatsApp",
    whatsapp_number: "+256772571975",
    whatsapp_message:
      "Hello Dr. Andrew, I would like to adopt/sponsor a student at Ibanda Glorius Primary School. Please let me know how to proceed.",
  },

  // ── VOLUNTEER SECTION ─────────────────────────────────────
  volunteer: {
    heading: "Volunteer With Us",
    subheading: "Your Skills Can Transform a Community",
    body: [
      "We welcome volunteers from all over the world. Whether you can offer a week or a month, your presence makes a real difference to the children and staff of Ibanda Glorius Primary School. No prior experience in Africa required — only enthusiasm and a good heart.",
    ],
    roles: [
      {
        icon: "📚",
        title: "Teaching",
        description:
          "Support our teachers in the classroom across all subjects — literacy, numeracy, science, English, and more.",
      },
      {
        icon: "⚽",
        title: "Sports & Activities",
        description:
          "Run sports sessions, games, and after-school activities to keep children engaged, healthy, and happy.",
      },
      {
        icon: "🏗️",
        title: "Construction",
        description:
          "Join on-site volunteers helping build the new classroom and future school facilities.",
      },
      {
        icon: "📱",
        title: "Social Media & Comms",
        description:
          "Help us tell our story — photography, video, copywriting, and fundraising campaigns to reach more donors.",
      },
      {
        icon: "💶",
        title: "Financial Support",
        description:
          "Can't travel? Support us financially. Every contribution, large or small, goes directly to the children.",
      },
      {
        icon: "🌍",
        title: "Other Skills",
        description:
          "Have a skill we haven't listed? Get in touch — we'd love to hear how you can contribute.",
      },
    ],
    cta_label: "Express Interest via WhatsApp",
    whatsapp_number: "+256772571975",
    whatsapp_message:
      "Hello Dr. Andrew, I am interested in volunteering at Ibanda Glorius Primary School. Here is a little about me and how I can help: ",
  },

  // ── GALLERY SECTION ───────────────────────────────────────
  gallery: {
    heading: "Life at the School",
    // Add up to 4 images. Drop files in /images and update paths.
    // Set caption to "" to hide the caption.
    images: [
      { src: "images/photo1.jpg", caption: "The school building — Ibanda, Uganda" },
      { src: "images/photo2.jpg", caption: "Our classrooms in progress" },
      { src: "images/photo3.jpg", caption: "Students and staff" },
      { src: "images/photo4.jpg", caption: "The community behind the school" },
    ],
  },

  // ── CONTACT SECTION ───────────────────────────────────────
  contact: {
    heading: "Get in Touch",
    body: "Have questions, want to donate, volunteer, or sponsor a student? Dr. Andrew is available on WhatsApp and responds personally to every message.",
    whatsapp_number: "+256772571975",
    whatsapp_label: "Message Dr. Andrew on WhatsApp",
    whatsapp_message:
      "Hello Dr. Andrew, I would like to learn more about Ibanda Glorius Primary School.",
    email: "info@standrewsibanda.org",
    phone: "+256 752 978 287",
    address: "Ibanda Town Council, Western Uganda",
    postal: "P.O. Box 356, Ibanda, Uganda",
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    tagline: "Educating Uganda's future — one child, one classroom at a time.",
    gofundme_url:
      "https://www.gofundme.com/f/one-more-classroom-give-40-children-in-ibanda-needs-a-class",
    copyright_year: "2025",
  },
};
