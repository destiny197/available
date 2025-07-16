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
      'Yes! Our Free plan includes everything you need to start selling.',
  },
  {
    question: 'What’s the commission structure?',
    answer:
      'Free plan takes 5%, Pro takes 3%, and Premium only 1% per sale.',
  },
  {
    question: 'Do I need to know how to code?',
    answer: 'Not at all. BizzBuyNow is built for creators, not coders.',
  },
  {
    question: 'Can I customize my store?',
    answer:
      'Yes — Premium users can edit themes, and all plans support logo & text edits.',
  },
];
