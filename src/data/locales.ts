export type LocaleType = 'en' | 'kn';

type Locale = {
  groomName: string;
  brideName: string;
  nameJoiner: string;
  coupleAlt: string;
  choosePrompt: string;
  choosePromptSub: string;
  english: string;
  kannada: string;
  inviteHeading: string;
  inviteSubheading: string;
  withBlessings: string;
  saveTheDate: string;
  rsvp: string;
  countdownTitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  detailsTitle: string;
  ceremony: string;
  ceremonyDate: string;
  ceremonyTime: string;
  venue: string;
  venueName: string;
  venueAddress: string;
  locationTitle: string;
  openInMaps: string;
  rsvpTitle: string;
  rsvpSubtitle: string;
  rsvpWhatsApp: string;
  rsvpEmail: string;
  rsvpWhatsAppMessage: string;
  rsvpEmailSubject: string;
  rsvpEmailBody: string;
  musicOn: string;
  musicOff: string;
  dannyHeroMessages: ReadonlyArray<string>;
  dannyRsvpMessages: ReadonlyArray<string>;
  dannyAlt: string;
  footerNote: string;
};

export const locales: Record<LocaleType, Locale> = {
  en: {
    groomName: 'Gunapal P',
    brideName: 'Deepthi R',
    nameJoiner: '&',
    coupleAlt: 'Gunapal & Deepthi',
    choosePrompt: 'Choose your language',
    choosePromptSub: 'Welcome — please pick a language to continue',
    english: 'English',
    kannada: 'ಕನ್ನಡ',
    inviteHeading: 'Gunapal P & Deepthi R',
    inviteSubheading: 'request the pleasure of your company',
    withBlessings: '|| Sri Boreswara Swamy Prasanna ||',
    saveTheDate: 'Wedding of',
    rsvp: 'RSVP',
    countdownTitle: 'Counting down to our big day',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    detailsTitle: 'Wedding ceremony',
    ceremony: 'Dhāra Muhūrta',
    ceremonyDate: 'Thursday, 2nd July 2026',
    ceremonyTime: '8:30 AM – 9:00 AM',
    venue: 'Venue',
    venueName: 'Sri Yoga Narasimha Swami Temple',
    venueAddress:
      'Near Aishwarya Petrol Pump, Vijayanagar 1st Stage, Mysuru, Karnataka 570017',
    locationTitle: 'Find us here',
    openInMaps: 'Open in Google Maps',
    rsvpTitle: 'Will you join us?',
    rsvpSubtitle: 'Please respond by 1 June 2026',
    rsvpWhatsApp: 'RSVP via WhatsApp',
    rsvpEmail: 'or send us an email',
    rsvpWhatsAppMessage: `Hi Gunapal & Deepthi!

I'd like to RSVP to your wedding:

• Name:
• Attending: Yes / No
• Number of guests:
• Message:

Best wishes!`,
    rsvpEmailSubject: 'Wedding RSVP — Gunapal & Deepthi',
    rsvpEmailBody: `Hi Gunapal & Deepthi,

I'd like to RSVP to your wedding.

Name:
Attending: Yes / No
Number of guests:
Message:

Best wishes!`,
    musicOn: 'Mute music',
    musicOff: 'Play music',
    dannyAlt: 'Danny',
    dannyHeroMessages: [
      'Woof! Welcome!',
      'So happy you came! 🐾',
      'Save the date!',
      'Best day ever! 🎉',
      'Pet me later, okay?',
    ],
    dannyRsvpMessages: [
      "Woof! I'm Danny 🐾",
      'Please RSVP!',
      "Don't keep me waiting!",
      "I'm watching… 👀",
      'Did you tell us yet?',
      'Woof woof — respond pls!',
    ],
    footerNote: 'Made with love for our families & friends',
  },
  kn: {
  groomName: 'ಗುಣಪಾಲ್ ಪಿ',
  brideName: 'ದೀಪ್ತಿ ಆರ್',
  nameJoiner: 'ಮತ್ತು',
  coupleAlt: 'ಗುಣಪಾಲ್ ಮತ್ತು ದೀಪ್ತಿ',  // added halant for consistency
  choosePrompt: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
  choosePromptSub: 'ಸ್ವಾಗತ — ಮುಂದುವರಿಯಲು ಒಂದು ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
  english: 'English',
  kannada: 'ಕನ್ನಡ',
  inviteHeading: 'ಗುಣಪಾಲ್ ಪಿ ಮತ್ತು ದೀಪ್ತಿ ಆರ್',
  inviteSubheading: 'ತಮ್ಮ ಸಪರಿವಾರ ಆಗಮನವನ್ನು ಬಯಸುತ್ತಾರೆ',  // added "ಸಪರಿವಾರ" for warmth
  withBlessings: '|| ಶ್ರೀ ಬೋರೇಶ್ವರ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ ||',
  saveTheDate: 'ಶುಭ ವಿವಾಹ',
  rsvp: 'ಆರ್‌.ಎಸ್‌.ವಿ.ಪಿ.',
  countdownTitle: 'ನಮ್ಮ ಶುಭ ದಿನಕ್ಕೆ ಕಾಲಗಣನೆ',  // "ಶುಭ ದಿನ" reads more natural than "ಸುದಿನ"
  days: 'ದಿನಗಳು',
  hours: 'ಗಂಟೆಗಳು',
  minutes: 'ನಿಮಿಷಗಳು',
  seconds: 'ಸೆಕೆಂಡುಗಳು',
  detailsTitle: 'ವಿವಾಹ ಸಮಾರಂಭ',
  ceremony: 'ಧಾರಾ ಮುಹೂರ್ತ',
  ceremonyDate: 'ಗುರುವಾರ, ೨ ಜುಲೈ ೨೦೨೬',
  ceremonyTime: 'ಬೆಳಿಗ್ಗೆ ೮:೩೦ – ೯:೦೦',
  venue: 'ಸ್ಥಳ',
  venueName: 'ಶ್ರೀ ಯೋಗ ನರಸಿಂಹ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ',
  venueAddress:
    'ಐಶ್ವರ್ಯ ಪೆಟ್ರೋಲ್ ಪಂಪ್ ಬಳಿ, ವಿಜಯನಗರ ೧ನೇ ಹಂತ, ಮೈಸೂರು, ಕರ್ನಾಟಕ ೫೭೦೦೧೭',
  locationTitle: 'ಇಲ್ಲಿ ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ',  // cleaner word order
  openInMaps: 'ಗೂಗಲ್ ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ',  // polite imperative
  rsvpTitle: 'ತಾವು ಬರುತ್ತೀರಾ?',  // ತಾವು more respectful than ನೀವು
  rsvpSubtitle: 'ದಯವಿಟ್ಟು ೧ ಜೂನ್ ೨೦೨೬ರ ಒಳಗೆ ತಿಳಿಸಿ',
  rsvpWhatsApp: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಪ್ರತಿಕ್ರಿಯಿಸಿ',
  rsvpEmail: 'ಅಥವಾ ಇಮೇಲ್ ಕಳುಹಿಸಿ',
  rsvpWhatsAppMessage: `ನಮಸ್ಕಾರ ಗುಣಪಾಲ್ ಮತ್ತು ದೀಪ್ತಿ!

ನಿಮ್ಮ ವಿವಾಹಕ್ಕೆ ನಾನು ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಲು ಬಯಸುತ್ತೇನೆ:

• ಹೆಸರು:
• ಬರುತ್ತಿದ್ದೇನೆ: ಹೌದು / ಇಲ್ಲ
• ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ:
• ಸಂದೇಶ:

ಶುಭಾಶಯಗಳು!`,
  rsvpEmailSubject: 'ವಿವಾಹ ಆರ್‌.ಎಸ್‌.ವಿ.ಪಿ. — ಗುಣಪಾಲ್ ಮತ್ತು ದೀಪ್ತಿ',
  rsvpEmailBody: `ನಮಸ್ಕಾರ ಗುಣಪಾಲ್ ಮತ್ತು ದೀಪ್ತಿ,

ನಿಮ್ಮ ವಿವಾಹಕ್ಕೆ ನಾನು ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಲು ಬಯಸುತ್ತೇನೆ.

ಹೆಸರು:
ಬರುತ್ತಿದ್ದೇನೆ: ಹೌದು / ಇಲ್ಲ
ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ:
ಸಂದೇಶ:

ಶುಭಾಶಯಗಳು!`,
  musicOn: 'ಸಂಗೀತವನ್ನು ನಿಲ್ಲಿಸಿ',
  musicOff: 'ಸಂಗೀತವನ್ನು ಪ್ಲೇ ಮಾಡಿ',
  dannyAlt: 'ಡ್ಯಾನಿ',
  dannyHeroMessages: [
    'ಬೌ ಬೌ! ಸ್ವಾಗತ!',
    'ಬಂದಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದ! 🐾',
    'ದಿನಾಂಕ ನೆನಪಿಡಿ!',
    'ಸಂತೋಷದ ದಿನ! 🎉',
  ],
  dannyRsvpMessages: [
    'ಬೌ ಬೌ! ನಾನು ಡ್ಯಾನಿ 🐾',
    'ಆರ್‌.ಎಸ್‌.ವಿ.ಪಿ. ಮಾಡಿ!',
    'ನನ್ನನ್ನು ಕಾಯಿಸಬೇಡಿ!',
    'ನಾನು ನೋಡ್ತಾ ಇದ್ದೀನಿ… 👀',
    'ತಿಳಿಸಿದ್ರಾ?',
    'ಬೌ ಬೌ — ಉತ್ತರ ಕಳುಹಿಸಿ!',
  ],
  footerNote: 'ನಮ್ಮ ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರಿಗೆ ಪ್ರೀತಿಯಿಂದ', 
},
};
