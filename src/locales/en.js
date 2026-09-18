export const en = {
  meta: { title: 'boothcat — photo strips in your browser' },
  nav: { home: 'Home', features: 'Features', faq: 'FAQ', about: 'About', contact: 'Contact', privacy: 'Privacy' },
  footer: { tagline: 'runs 100% in your browser' },
  common: { back: '← Back', startOver: 'Start over', tryNow: 'Try it now' },

  home: {
    titleA: 'A photo booth',
    titleB: 'in your browser.',
    lead: 'Snap four photos with your webcam or upload your own, pick a filter and a frame, and download a strip you can print, share or stick on the fridge.',
    start: 'Start the booth',
    see: 'See what it does',
    how: 'How it works',
    steps: [
      ['Choose a source', 'Live camera or four pictures from your gallery.'],
      ['Take the shots', 'A 3-second countdown fires four times. Pick a filter while you pose.'],
      ['Frame it', 'Pick one of ten frames and add a caption.'],
      ['Download', 'Grab the strip as a JPEG and print it anywhere.'],
    ],
    perks: [
      ['Nothing leaves your device', 'Photos are processed with the canvas API and kept in your browser. No uploads, no accounts.'],
      ['Four shots, ten seconds', 'A countdown, a flash, and a strip. It feels like the real thing, minus the coins.'],
      ['Filters and frames', 'Eight film-inspired filters and ten frames drawn on the fly, from plain white to hearts and stars.'],
      ['Print-ready strip', 'Download a high-resolution JPEG sized like a classic 2×6 booth strip.'],
    ],
  },

  start: {
    titleA: 'How do you want to',
    titleB: 'shoot?',
    lead: 'Both options end with the same strip. Nothing is uploaded either way.',
    camera: 'Use my camera',
    cameraSub: 'Four shots with a countdown, like a real booth.',
    upload: 'Upload photos',
    uploadSub: 'Pick four pictures you already have.',
  },

  upload: {
    titleA: 'Pick',
    titleB: 'four',
    titleC: 'photos',
    full: 'All four slots are full',
    reading: 'Reading…',
    tap: 'Tap to choose images',
    hint: 'Landscape shots work best.',
    left: 'left.',
    remove: 'Click a thumbnail to remove it.',
    error: 'One of those files could not be read. Try a JPEG or PNG.',
    next: 'Choose a frame →',
  },

  shoot: {
    titleA: 'Strike a',
    titleB: 'pose',
    waking: 'Waking up the camera…',
    blocked: 'Camera access was blocked. Allow it in your browser, or upload photos instead.',
    start: 'Start countdown',
    smile: 'Smile…',
    cancel: 'Cancel',
    retake: 'Retake',
    next: 'Choose a frame →',
    uploadInstead: 'Upload instead',
  },

  filter: {
    title: 'Filter',
    names: { none: 'Natural', mono: 'Mono', warm: 'Warm film', cool: 'Cool film', fade: 'Faded', pop: 'Pop', noir: 'Noir', vintage: 'Vintage' },
  },

  frames: {
    titleA: 'Pick a',
    titleB: 'frame',
    next: 'Print my strip →',
    names: { classic: 'Classic white', night: 'Midnight', butter: 'Butter', mint: 'Mint', blush: 'Blush', hearts: 'Hearts', stars: 'Stars', doodle: 'Doodle', cat: 'Boothcat', film: 'Film' },
  },

  print: {
    titleA: "Here's your",
    titleB: 'strip',
    developing: 'Developing…',
    caption: 'Caption',
    date: "Print today's date",
    frame: 'Frame',
    download: 'Download JPEG',
    share: 'Share',
    toFrames: '← Frames',
    tip: 'Tip: print at 2×6 inches (5×15 cm) for the classic booth size.',
    alt: 'Your photo strip',
  },

  features: {
    titleA: 'Everything the',
    titleB: 'booth',
    titleC: 'does',
    items: [
      ['Live camera booth', 'A 3-second countdown fires four times with a flash between shots, exactly like a coin-op booth. The preview is mirrored so you can pose naturally.'],
      ['Bring your own photos', 'No webcam? Pick four images from your gallery. They are resized in the browser before anything is stored.'],
      ['Eight filters, ten frames', 'Filters are CSS filter presets applied both to the live preview and the final canvas render, so what you see is what you get. Frames are drawn procedurally: hearts, stars, doodles, film sprockets, and a cat.'],
      ['Print-ready output', 'The strip is rendered on a 600×1832 canvas, the proportions of a 2×6 inch strip, and exported as a high-quality JPEG.'],
      ['Private by design', 'No server, no analytics, no cookies. Session data lives in localStorage and is cleared when you start over.'],
      ['Works offline', 'Once the page has loaded it needs nothing from the network. Every feature runs on the canvas and MediaDevices APIs.'],
    ],
  },

  faq: {
    titleA: 'Questions,',
    titleB: 'answered',
    items: [
      ['Is it free?', 'Yes. There is nothing to buy, no watermark, and no sign-up.'],
      ['Where do my photos go?', 'Nowhere. They are captured with the canvas API and kept in your browser\'s localStorage until you press "Start over". You can verify this in the network tab: no requests are made after the page loads.'],
      ['Why is the camera preview mirrored?', 'Because that is how a mirror works and it makes posing easier. The captured photos are mirrored to match the preview.'],
      ['Can I use it on my phone?', 'Yes. It works in any modern mobile browser that supports getUserMedia. On iOS use Safari.'],
      ['The camera does not turn on.', 'Your browser needs permission to use the camera. Look for the camera icon in the address bar, allow access, and reload. Camera access also requires HTTPS (or localhost).'],
      ['What size should I print at?', 'The strip has 2:6 proportions. Print it at 2×6 inches or 5×15 cm; most photo labs offer this as a "photo strip" option.'],
      ['Can I change the filter after shooting?', 'The filter chosen while shooting is baked into the final render. Press "Retake" to shoot again with a different one; the frame and caption can be changed at any time.'],
    ],
  },

  about: {
    titleA: 'About',
    titleB: 'boothcat',
    p1: 'boothcat started as a weekend experiment: could the whole photo-booth experience, from the countdown to the printed strip, run inside a browser tab with no backend at all?',
    p2: 'It turns out it can. The camera comes from getUserMedia, the shots are frozen onto a <canvas>, filters are ordinary CSS filter functions that the canvas API happens to understand too, and the frames are drawn with a few dozen lines of path code instead of image files. The result is a small, fast site that keeps your photos where they belong: with you.',
    builtWith: 'Built with',
    stack: ['React 19 and React Router 7', 'Vite', 'The Canvas 2D and MediaDevices web APIs', 'Hand-written CSS with a sketchbook look'],
    openSource: 'Open source',
    openSourceText: 'The code is published on GitHub under the MIT licence. Bug reports and pull requests are welcome.',
  },

  contact: {
    titleA: 'Say',
    titleB: 'hello',
    p1: 'Found a bug, have a frame idea, or printed a strip you are proud of? The best place to reach me is the GitHub repository: open an issue and I will get back to you.',
    p2: 'There is no contact form on purpose: this site has no server to send it to.',
  },

  privacy: {
    title: 'Privacy',
    lead: 'The short version: boothcat does not collect anything.',
    sections: [
      ['Photos', 'Photos taken or uploaded are processed in your browser and stored in localStorage under keys starting with "boothcat:". They are never transmitted. "Start over" deletes them; clearing site data in your browser does too.'],
      ['Camera', 'Camera access is requested only on the shooting page and released as soon as you leave it.'],
      ['Tracking', 'There are no analytics scripts, advertising tags, or cookies. Fonts are loaded from Google Fonts, which may log the request as any web font host would.'],
      ['Language preference', 'Your language choice is remembered in localStorage so the site opens the same way next time.'],
    ],
  },

  notFound: { title: '404', text: 'That page wandered off. Cats do that.', home: 'Back home' },
  error: { title: 'Something broke', reload: 'Reload' },
}
