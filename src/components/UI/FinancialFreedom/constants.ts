
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Simple, Transparent', 'Pricing'];
export const desktopParagraphPhrase = [
  'We believe that managing your finances should be effortless and cost-effective.',
  "That's why we offer you the freedom you deserve.",
];
export const desktopBriefNotePhrase = [
  'Smart investments,',
  'secure payments, and',
  'expert guidance, all in',
  'one place.',
];

// For mobile
export const mobileHeaderPhrase = ['Simple, Transparent', 'Pricing'];
export const mobileParagraphPhrase = [
  'We believe that managing your finances should be',
  "effortless and cost-effective. That's why we offer",
  ' you the freedom you deserve.',
];

export const mobileBriefNotePhrase = [
  'Smart',
  ' investments,',
  'secure',
  ' payments,',
  'and expert',
  'guidance, all',
  'in one place.',
];

export const edges = [
  {
    point: 'Free - $0/month',
    details: 'Start selling with essential tools and 5% commission',
    icon: ic_banknotes,
  },
  {
    point: 'Pro - $15/month',
    details: 'Advanced tools, 3% commission, email automation',
    icon: ic_circle_stack,
  },
  {
    point: 'Premium - $50/month',
    details: 'Full customization, 1% commission, priority support',
    icon: ic_arrows_left_right,
  },
];
