import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "I launched my skincare store with BizzBuyNow and made my first sale in 24 hours. The AI setup wizard made everything so simple. Insane!",
    person: 'Amanda O.',
    avatar: robert_fox,
  },
  {
    testimony:
      "The dropshipping integration saved me weeks of setup. Everything just works seamlessly with multiple suppliers. BizzBuyNow is a game-changer.",
    person: 'David M.',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "As a first-time seller, I was overwhelmed by the options. BizzBuyNow's support team guided me through everything. Now I'm making consistent sales!",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "The fraud protection gives me peace of mind. I can focus on growing my business knowing BizzBuyNow handles the security side perfectly.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "The AI optimization suggestions increased my conversion rate by 40%. BizzBuyNow doesn't just host your store, it helps you succeed.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join over 2,000', 'successful sellers'];
