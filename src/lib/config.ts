export type RsvpRole = 'groom' | 'bride';

export type RsvpContact = {
  role: RsvpRole;
  /** WhatsApp number in international format, no '+', no spaces. e.g. '918197215688' */
  whatsapp: string;
  /** Plain email address. e.g. 'foo@bar.com' */
  email: string;
};

export const WEDDING = {
  groomName: 'Gunapal P.',
  brideName: 'Deepthi R.',
  dateIso: '2026-07-02T08:30:00+05:30',
  templeBlessing: 'Sri Boreswara Swamy Prasanna',
  venueName: 'Sri Yoga Narasimha Swami Temple',
  venueShort: 'Vijayanagar 1st Stage, Mysuru',
  venueAddress:
    'Near Aishwarya Petrol Pump, Vijayanagar 1st Stage, Mysuru, Karnataka 570017',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Sri+Yoga+Narasimha+Swami+Temple+Vijayanagar+1st+Stage+Mysuru',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Sri+Yoga+Narasimha+Swami+Temple+Vijayanagar+1st+Stage+Mysuru+570017&output=embed',
  coupleImage: 'assets/couple.png',

  // RSVP contacts. Leave a field as '' to hide that channel for that person.
  // The RSVP section only renders contacts whose fields are non-empty,
  // so you can keep Deepthi's empty until you have her details.
  rsvpContacts: [
    {
      role: 'groom',
      whatsapp: '918197215688',
      email: 'gunapalpgp@gmail.com',
    },
    {
      role: 'bride',
      // Fill in: country-code + number, no '+', no spaces. e.g. '91XXXXXXXXXX'
      whatsapp: '',
      // Fill in: Deepthi's email
      email: '',
    },
  ] as ReadonlyArray<RsvpContact>,
} as const;
