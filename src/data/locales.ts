export type LocaleType = 'en' | 'kn';

type Locale = {
  groomName: string;
  brideName: string;
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
  yourName: string;
  guests: string;
  willAttend: string;
  willNotAttend: string;
  message: string;
  sendRsvp: string;
  footerNote: string;
};

export const locales: Record<LocaleType, Locale> = {
  en: {
    groomName: 'Gunapal P.',
    brideName: 'Deepthi R.',
    coupleAlt: 'Gunapal & Deepthi',
    choosePrompt: 'Choose your language',
    choosePromptSub: 'Welcome — please pick a language to continue',
    english: 'English',
    kannada: 'ಕನ್ನಡ',
    inviteHeading: 'Gunapal P. & Deepthi R.',
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
    yourName: 'Your name',
    guests: 'Number of guests',
    willAttend: 'Joyfully accepts',
    willNotAttend: 'Regretfully declines',
    message: 'A note for the couple (optional)',
    sendRsvp: 'Send RSVP',
    footerNote: 'Made with love for our families & friends',
  },
  kn: {
    groomName: 'ಗುಣಪಾಲ ಪಿ.',
    brideName: 'ದೀಪ್ತಿ ಆರ್.',
    coupleAlt: 'ಗುಣಪಾಲ ಮತ್ತು ದೀಪ್ತಿ',
    choosePrompt: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    choosePromptSub: 'ಸ್ವಾಗತ — ಮುಂದುವರಿಯಲು ಒಂದು ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    english: 'English',
    kannada: 'ಕನ್ನಡ',
    inviteHeading: 'ಗುಣಪಾಲ ಪಿ. ಮತ್ತು ದೀಪ್ತಿ ಆರ್.',
    inviteSubheading: 'ತಮ್ಮ ಆಗಮನವನ್ನು ಬಯಸುತ್ತಾರೆ',
    withBlessings: '|| ಶ್ರೀ ಬೋರೇಶ್ವರ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ ||',
    saveTheDate: 'ಶುಭ ವಿವಾಹ',
    rsvp: 'ಆರ್‌.ಎಸ್‌.ವಿ.ಪಿ.',
    countdownTitle: 'ನಮ್ಮ ಸುದಿನಕ್ಕೆ ಕಾಲಗಣನೆ',
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
    locationTitle: 'ನಮ್ಮನ್ನು ಇಲ್ಲಿ ಭೇಟಿಯಾಗಿ',
    openInMaps: 'ಗೂಗಲ್ ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆ',
    rsvpTitle: 'ನೀವು ಬರುತ್ತೀರಾ?',
    rsvpSubtitle: 'ದಯವಿಟ್ಟು ೧ ಜೂನ್ ೨೦೨೬ರೊಳಗೆ ಉತ್ತರಿಸಿ',
    yourName: 'ನಿಮ್ಮ ಹೆಸರು',
    guests: 'ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ',
    willAttend: 'ಸಂತೋಷದಿಂದ ಒಪ್ಪುತ್ತೇನೆ',
    willNotAttend: 'ಕ್ಷಮಿಸಿ, ಬರಲಾಗದು',
    message: 'ದಂಪತಿಗಳಿಗೆ ಸಂದೇಶ (ಐಚ್ಛಿಕ)',
    sendRsvp: 'ಆರ್‌.ಎಸ್‌.ವಿ.ಪಿ. ಕಳುಹಿಸಿ',
    footerNote: 'ಪ್ರೀತಿಯಿಂದ ನಮ್ಮ ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರಿಗಾಗಿ',
  },
};
