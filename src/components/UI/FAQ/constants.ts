type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Can I use BizzBuyNow for free?',
    answer:
      'Yes! Our Free plan includes everything you need to start selling with essential tools and 5% commission.',
  },
  {
    question: "What's the commission structure?",
    answer:
      'Free plan takes 5% commission, Pro takes 3%, and Premium only takes 1% per sale. No hidden fees.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'Not at all. BizzBuyNow is built for creators and entrepreneurs, not coders. Our AI handles the technical setup.',
  },
  {
    question: 'Can I customize my store?',
    answer:
      'Yes! Premium users get full theme customization, and all plans support logo uploads and text editing.',
  },
];
