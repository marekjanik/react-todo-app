type HeaderDataType = {
  getWeekday: () => string;
  greetings: string[];
  emojis: string[];
};

export const header_data: HeaderDataType = {
  getWeekday: () => {
    const weekday = new Date().toLocaleDateString('en-us', {
      weekday: 'long',
    });
    return weekday;
  },
  greetings: [
    'Aloha',
    'Hi mate',
    "What's up",
    'Hiiii',
    'Hello',
    "G'day",
    'Peek-a-boo',
    'Howdy-doody',
    'Ahoy',
    'Konnichiwa',
  ],
  emojis: [
    '🙃🥁',
    '😍🥂',
    '😌☕️',
    '😁🍍',
    '😜🍕',
    '🤗🍪',
    '😎🍹',
    '🤠🪃',
    '🥸🎬',
    '😊🍫',
  ],
};
