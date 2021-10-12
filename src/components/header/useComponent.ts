import { useMemo } from 'react';
import { header_data } from '../../common/samples';

type HeaderDataType = {
  weekday: string;
  greeting: string;
  emoji: string;
};

type UseComponentType = {
  headerData: HeaderDataType;
  title: string;
};

export const useComponent = (): UseComponentType => {
  const { getWeekday, greetings, emojis } = header_data;

  const headerData = useMemo<HeaderDataType>(() => {
    const randomIndex = Math.floor(Math.random() * 10);
    return {
      weekday: getWeekday(),
      greeting: greetings[randomIndex],
      emoji: emojis[randomIndex],
    };
  }, [getWeekday, greetings, emojis]);

  const title = `${headerData.greeting}, it's ${headerData.weekday} ${headerData.emoji}`;

  return {
    headerData,
    title,
  };
};
