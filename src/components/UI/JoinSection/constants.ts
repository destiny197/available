import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  role: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      'I launched my skincare store with BizzBuyNow and made my first sale in 24 hours. Insane!',
    person: 'Amanda O.',
    role: 'Beauty Vendor',
    avatar: robert_fox,
  },
  {
    testimony:
      'The dropshipping integration saved me weeks of setup. Everything just works.',
    person: 'David M.',
    role: 'First-Time Seller',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "RAFT's financial planning services have been a lifeline for me. I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my financial dreams",
    person: 'Esther Howard',
    role: 'Happy RAFT User',
    avatar: esther_howard,
  },
  {
    testimony:
      'The dropshipping integration saved me weeks of setup. Everything just works.',
    person: 'David M.',
    role: 'First-Time Seller',
    avatar: cameron_williamson,
  },
  {
    testimony:
      'I launched my skincare store with BizzBuyNow and made my first sale in 24 hours. Insane!',
    person: 'Amanda O.',
    role: 'Beauty Vendor',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join over 3 million', 'members'];
