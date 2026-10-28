/* SAMPLE DATASET - hand-written for this demo.
   Rules for editing this file:
   - "website" must be the tool's real official address, or null if you are not sure.
   - "pricing" must stay null unless you checked an official source.
     When verified, fill in: text, source (a link to the official page), checked (date).
   - Descriptions are general summaries and may become out of date. */

const CATEGORIES = {
  writing: "Writing",
  research: "Research",
  presentation: "Presentation",
  image: "Image generation",
  coding: "Coding",
  productivity: "Productivity",
  education: "Education"
};

const TOOLS = [
  {
    name: "ChatGPT", category: "writing",
    purpose: "General-purpose AI chatbot for drafting, brainstorming and explaining ideas.",
    classroomUse: "Teachers draft reading passages at different levels, then review and edit them before use.",
    website: "https://chatgpt.com", pricing: null,
    limitations: "Can produce confident but incorrect or made-up information. Features and limits vary by plan and region."
  },
  {
    name: "Claude", category: "writing",
    purpose: "AI assistant for writing, summarising and answering questions.",
    classroomUse: "Teachers draft feedback comments or discussion questions, then personalise them.",
    website: "https://claude.ai", pricing: null,
    limitations: "Can make mistakes or invent details, so outputs need checking. Features and limits vary by plan and region."
  },
  {
    name: "Grammarly", category: "writing",
    purpose: "Suggests grammar, spelling, clarity and tone improvements as you write.",
    classroomUse: "Students edit their own drafts and discuss why each suggestion was accepted or rejected.",
    website: "https://www.grammarly.com", pricing: null,
    limitations: "Suggestions may not suit every writing style. Students may accept changes without understanding them. Check your school's AI policy."
  },
  {
    name: "QuillBot", category: "writing",
    purpose: "Paraphrasing, grammar checking and summarising tools.",
    classroomUse: "Teach the difference between paraphrasing and plagiarism by comparing original and reworded text.",
    website: "https://quillbot.com", pricing: null,
    limitations: "Rewording can change the meaning. Using it to disguise copied work is academic misconduct."
  },
  {
    name: "Perplexity", category: "research",
    purpose: "AI answer engine that gives answers with links to sources.",
    classroomUse: "Students practise opening each cited source and checking whether it really supports the answer.",
    website: "https://www.perplexity.ai", pricing: null,
    limitations: "Sources can be low quality or misread by the AI. Always verify claims in the original source."
  },
  {
    name: "Elicit", category: "research",
    purpose: "Helps find and summarise academic research papers.",
    classroomUse: "Older students explore a research question and compare summaries with the original abstracts.",
    website: "https://elicit.com", pricing: null,
    limitations: "Does not cover every paper. Summaries can miss detail and must be checked against the paper."
  },
  {
    name: "NotebookLM", category: "research",
    purpose: "Answers questions and creates summaries based on documents you upload.",
    classroomUse: "Upload class readings and generate study questions, then check them against the text.",
    website: "https://notebooklm.google.com", pricing: null,
    limitations: "Can still misstate what a source says. Uploading student work or personal data needs school approval. Availability may vary."
  },
  {
    name: "Canva", category: "presentation",
    purpose: "Design platform for presentations, posters and social graphics, with AI-assisted features.",
    classroomUse: "Students build visual presentations or posters about a topic they have researched.",
    website: "https://www.canva.com", pricing: null,
    limitations: "AI features and templates vary by plan. Generated text and images need fact-checking and accessibility checks."
  },
  {
    name: "Gamma", category: "presentation",
    purpose: "Generates slide decks, documents and web pages from a text prompt.",
    classroomUse: "Teachers create a first draft of a lesson deck, then edit it for accuracy and level.",
    website: "https://gamma.app", pricing: null,
    limitations: "Generated content can be inaccurate or generic. Layouts often need manual fixing."
  },
  {
    name: "Adobe Firefly", category: "image",
    purpose: "Creates images from text descriptions.",
    classroomUse: "Create illustrations for stories or vocabulary cards, and discuss how the prompt shaped the image.",
    website: "https://www.adobe.com/products/firefly.html", pricing: null,
    limitations: "Images may contain odd details or errors, so they are unsuitable for accurate diagrams. Check usage terms before sharing."
  },
  {
    name: "Microsoft Designer", category: "image",
    purpose: "Creates images and designs from text prompts.",
    classroomUse: "Students design covers or visuals for projects and write short captions explaining their choices.",
    website: "https://designer.microsoft.com", pricing: null,
    limitations: "Generated images may be inaccurate or inappropriate. Features and availability vary. Check usage terms."
  },
  {
    name: "GitHub Copilot", category: "coding",
    purpose: "AI assistant that suggests code and answers coding questions inside a code editor.",
    classroomUse: "Older students predict what suggested code does, then test it and explain it in their own words.",
    website: "https://github.com/features/copilot",
    pricing: {
      text: "GitHub's documentation says verified students, teachers and maintainers of popular open source projects may be eligible for free access. Prices for other plans are not listed here.",
      source: "https://docs.github.com/en/copilot/concepts/billing/individual-plans",
      checked: "2026-10-28"
    },
    limitations: "Suggestions can be wrong or insecure. Over-reliance can slow learning, so students should test and explain all code."
  },
  {
    name: "Replit", category: "coding",
    purpose: "Browser-based coding environment with AI assistance.",
    classroomUse: "Students write and run code without installing software, and share projects with the teacher.",
    website: "https://replit.com", pricing: null,
    limitations: "Requires an account. AI features and usage limits vary. Check your school's rules on student accounts."
  },
  {
    name: "Otter.ai", category: "productivity",
    purpose: "Transcribes meetings and lectures and creates summaries.",
    classroomUse: "Provide transcripts to support students who need captions or revision notes.",
    website: "https://otter.ai", pricing: null,
    limitations: "Transcripts can contain errors, especially with accents or noise. Get consent and follow privacy rules before recording."
  },
  {
    name: "Notion", category: "productivity",
    purpose: "Workspace for notes, documents and planning, with AI features.",
    classroomUse: "Organise lesson plans, or let student teams keep a shared project notebook.",
    website: "https://www.notion.so", pricing: null,
    limitations: "AI features and availability vary. Review privacy and sharing settings before using it with students."
  },
  {
    name: "Khanmigo", category: "education",
    purpose: "AI tutor and teaching assistant from Khan Academy.",
    classroomUse: "Students get step-by-step hints on practice problems while the teacher monitors progress.",
    website: "https://www.khanmigo.ai", pricing: null,
    limitations: "Access depends on region and programme. It supports, but does not replace, a teacher. Answers still need checking."
  },
  {
    name: "MagicSchool", category: "education",
    purpose: "AI tools designed for teachers, such as lesson, rubric and feedback generators.",
    classroomUse: "Draft a rubric or differentiated activity, then adjust it to your curriculum and class.",
    website: "https://www.magicschool.ai", pricing: null,
    limitations: "Outputs may not match your curriculum standards and must be reviewed for accuracy."
  },
  {
    name: "Duolingo", category: "education",
    purpose: "Language-learning app with short, game-style lessons.",
    classroomUse: "Set it as extra practice for vocabulary and listening alongside classroom teaching.",
    website: "https://www.duolingo.com", pricing: null,
    limitations: "Not a full curriculum, and speaking practice is limited. AI features differ by language and plan."
  }
];
