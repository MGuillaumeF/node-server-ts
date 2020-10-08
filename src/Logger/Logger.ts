import * as colors from 'colors/safe';

const Colors: any = colors;
const Console: any = console;

enum ELOGGER_LEVEL {
  DEBUG = 'debug',
  LOG = 'log',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal',
}

interface LOGGER_THEME {
  backColor?: string;
  mainFontColor: string;
  tagFontColor: string;
  style?: 'italic' | 'bold';
  appenderLevel: string;
}

// type blaaa = {[key in ELOGGER_LEVEL]?: string};
const THEMES = new Map<ELOGGER_LEVEL, LOGGER_THEME>([
  [
    ELOGGER_LEVEL.LOG,
    {
      mainFontColor: 'gray',
      tagFontColor: 'grey',
      appenderLevel: ELOGGER_LEVEL.INFO,
      style: 'bold',
    },
  ],
  [
    ELOGGER_LEVEL.DEBUG,
    {
      mainFontColor: 'cyan',
      tagFontColor: 'magenta',
      appenderLevel: ELOGGER_LEVEL.DEBUG,
      style: 'italic',
    },
  ],
  [
    ELOGGER_LEVEL.INFO,
    {
      mainFontColor: 'blue',
      tagFontColor: 'cyan',
      appenderLevel: ELOGGER_LEVEL.INFO,
      style: 'bold',
    },
  ],
  [
    ELOGGER_LEVEL.WARN,
    {
      mainFontColor: 'yellow',
      tagFontColor: 'white',
      backColor: 'yellow',
      appenderLevel: ELOGGER_LEVEL.WARN,
      style: 'bold',
    },
  ],
  [
    ELOGGER_LEVEL.ERROR,
    {
      mainFontColor: 'red',
      tagFontColor: 'white',
      backColor: 'red',
      appenderLevel: ELOGGER_LEVEL.ERROR,
      style: 'bold',
    },
  ],
  [
    ELOGGER_LEVEL.FATAL,
    {
      mainFontColor: 'red',
      tagFontColor: 'white',
      backColor: 'red',
      appenderLevel: ELOGGER_LEVEL.ERROR,
      style: 'bold',
    },
  ],
]);
class Logger {
  constructor() {}

  trace(level: ELOGGER_LEVEL, ...messages: string[]) {
    const t = THEMES.get(level);
    if (!t) {
      throw Error('Theme not found');
    }

    let traces = messages.map((message) => {
      return Colors[t.mainFontColor](message);
    });
    const tag = Colors[t.tagFontColor](`[${level.toUpperCase()}]`);
    const tagStyled = t.style ? Colors[t.style](tag) : tag;
    Console[t.appenderLevel](tagStyled, ...traces);
  }

  info(...messages: string[]) {
    this.trace(ELOGGER_LEVEL.INFO, ...messages);
  }
}
const LOGGER = new Logger();
export default LOGGER;
