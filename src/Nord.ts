import {CodeStyle} from 'code-fns';

export class Nord {
  public static readonly Colors = {
    PolarNight0: '#2E3440',
    PolarNight1: '#3B4252',
    PolarNight2: '#434C5E',
    PolarNight3: '#4C566A',
    SnowStorm0: '#D8DEE9',
    SnowStorm1: '#E5E9F0',
    SnowStorm2: '#ECEFF4',
    Frost0: '#8FBCBB',
    Frost1: '#88C0D0',
    Frost2: '#81A1C1',
    Frost3: '#5E81AC',
    Aurora0: '#BF616A',
    Aurora1: '#D08770',
    Aurora2: '#EBCB8B',
    Aurora3: '#A3BE8C',
    Aurora4: '#B48EAD',
  };

  public static readonly Theme: CodeStyle = {
    stringContent: {
      text: Nord.Colors.Aurora3,
    },
    stringPunctuation: {
      text: Nord.Colors.SnowStorm1,
    },
    keyword: {
      text: Nord.Colors.Frost2,
    },
    entityName: {
      text: Nord.Colors.Frost1,
    },
    comment: {
      text: Nord.Colors.PolarNight3,
    },
    variable: {
      text: Nord.Colors.SnowStorm2,
    },
    parameter: {
      text: Nord.Colors.SnowStorm2,
    },
    literal: {
      text: Nord.Colors.Aurora4,
    },
    regexpContent: {
      text: Nord.Colors.Aurora2,
    },
  };
}
