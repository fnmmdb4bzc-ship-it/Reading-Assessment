# Deploying your Reading and Phonics Assessment tool on Netlify

This folder is a complete, ready-to-deploy site: the app itself (`public/`)
plus the small "backend" (`netlify/functions/`) that lets an examiner device
and a learner device talk to each other and stay in sync.

**A note on how sure I am about the steps below:** I have tested this app's
logic thoroughly on my end (session creation, cross-device typing showing up
on the examiner's screen a few seconds later, etc.), using a stand-in for
Netlify's real infrastructure, because I don't have a way to actually deploy
to Netlify from here and click through it myself. The general shape of "how
you deploy a site with functions to Netlify" below is accurate to the best
of my knowledge, but Netlify's exact screens do change over time, so if a
button is named slightly differently than I describe, look for the nearest
equivalent - the overall steps should still hold. If anything doesn't match
what you see, it's worth a quick check against Netlify's own current help
docs (docs.netlify.com) rather than assuming I've got the latest screen
layout right.

## Before you deploy: set your password

Open `public/index.html` in a text editor and find this line near the top:

```
const EXAMINER_PASSWORD = "ReadingCircle26";
```

Change `"ReadingCircle26"` to whatever password you want examiners to use to
sign in. Keep the quote marks. This is a light gate to keep casual visitors
out, not real security - so don't use it to protect anything truly
sensitive, and don't reuse a password you care about elsewhere.

## Recommended way to deploy: connect a GitHub repository

This is the most reliable way to deploy a site like this one that has both a
static front end and small server-side functions, because Netlify's normal
build process installs the one small software package the functions need
(`@netlify/blobs`, which is what lets examiner and learner devices share
data) automatically. I'd recommend this over dragging the folder straight
into Netlify's website, because a plain drag-and-drop deploy skips that
install step and the functions may not work without it.

1. Create a free GitHub account at github.com if you don't already have one.
2. Create a new, empty repository (call it something like
   `reading-phonics-assessment`).
3. Upload the entire contents of this `netlify-project` folder into that
   repository (GitHub's website lets you drag and drop files in directly if
   you don't want to use git from the command line - look for "Add file" >
   "Upload files" on the repository page).
4. Go to app.netlify.com and sign up or log in (a free account is enough).
5. Choose "Add new site" > "Import an existing project" and connect it to
   the GitHub repository you just created.
6. Netlify should auto-detect the settings from `netlify.toml` already in
   this folder (publish directory `public`, functions directory
   `netlify/functions`) - it will likely show these to you to confirm rather
   than asking you to type them in. Accept the defaults and deploy.
7. Netlify Blobs (the shared storage that lets examiner and learner devices
   sync) works automatically on any Netlify site with functions - there is
   nothing extra to switch on or pay for on the free tier for the kind of
   usage one examiner doing assessments would generate.
8. Once the deploy finishes, Netlify gives you a web address like
   `https://something-random.netlify.app`. That's the link both the
   examiner and the learner will use. You can change it to something more
   memorable later in Netlify's site settings ("Change site name"), or
   attach your own domain if you have one.

## Using it day to day

- Whoever is examining opens the site link and signs in with the password
  you set above.
- Learner codes and links for reading, phonics, letters, and passages work
  exactly as before - the learner reads what's on their own screen or a
  printed sheet, and you mark it live.
- For **Spelling**, **Dictation**, and **Sentence Writing**, once you've
  opened or started a session, the code and link shown are tied to that
  specific session (you'll see a code like `S5-K3F9QL` - the part after the
  dash ties it to the learner you're currently working with). Give that
  code or link to the learner on their own device (a tablet or laptop next
  to them, or across the room). What they type appears on your screen
  within a few seconds, already checked against the word list, though you
  can still correct any word by hand.
- If you'd rather hand your own screen to the learner instead of using a
  second device, the "Hand this screen to the learner now" button still
  works exactly as before.
- If a learner ever sees a message saying their code isn't tied to a
  session, it usually means the code or link is old, or was typed without
  the session part after the dash - just read them the current code shown
  on your Spelling/Dictation/Writing screen.

## A note on the free tier

Netlify's free tier comfortably covers one examiner running assessments
regularly - this app is lightweight and doesn't come close to typical free
usage limits. If your usage ever grows a lot (many examiners, constant
heavy use), it's worth checking Netlify's current pricing page, since
limits and prices do change over time and I can't promise today's numbers
will still be accurate whenever you read this.
