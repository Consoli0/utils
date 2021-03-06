export enum CHARACTER_REPLACEMENTS_ID {
  ITALIC_SERIF = 0,
  ITALIC_SANS = 1,
  BOLD_SERIF = 2,
  BOLD_SANS = 3,
  ITALIC_BOLD_SERIF = 4,
  ITALIC_BOLD_SANS = 5,
  DOUBLE_STRUCK = 6,
  CURSIVE = 7,
  BOLD_CURSIVE = 8,
  FULL_WIDTH = 9,
  SMALL = 10,
  BOX = 11,
  BUBBLE = 12,
  INVERTED_BOX = 13,
  MIDEVAL = 14,
  BOLD_MIDEVAL = 15,
  MONOSPACE = 16,
}

export const characterReplacements = {
  len: 16,

  // Lowercase //
  a: ['𝑎', '𝘢', '𝐚', '𝗮', '𝒂', '𝙖', '𝕒', '𝒶', '𝓪', 'ａ', 'ᴀ', '🄰', 'ⓐ', '🅰', '𝔞', '𝖆', '𝚊'],
  b: ['𝑏', '𝘣', '𝐛', '𝗯', '𝒃', '𝙗', '𝕓', '𝒷', '𝓫', 'ｂ', 'ʙ', '🄱', 'ⓑ', '🅱', '𝔟', '𝖇', '𝚋'],
  c: ['𝑐', '𝘤', '𝐜', '𝗰', '𝒄', '𝙘', '𝕔', '𝒸', '𝓬', 'ｃ', 'ᴄ', '🄲', 'ⓒ', '🅲', '𝔠', '𝖈', '𝚌'],
  d: ['𝑑', '𝘥', '𝐝', '𝗱', '𝒅', '𝙙', '𝕕', '𝒹', '𝓭', 'ｄ', 'ᴅ', '🄳', 'ⓓ', '🅳', '𝔡', '𝖉', '𝚍'],
  e: ['𝑒', '𝘦', '𝐞', '𝗲', '𝒆', '𝙚', '𝕖', '𝑒', '𝓮', 'ｅ', 'ᴇ', '🄴', 'ⓔ', '🅴', '𝔢', '𝖊', '𝚎'],
  f: ['𝑓', '𝘧', '𝐟', '𝗳', '𝒇', '𝙛', '𝕗', '𝒻', '𝓯', 'ｆ', 'ꜰ', '🄵', 'ⓕ', '🅵', '𝔣', '𝖋,', '𝚏'],
  g: ['𝑔', '𝘨', '𝐠', '𝗴', '𝒈', '𝙜', '𝕘', '𝑔', '𝓰', 'ｇ', 'ɢ', '🄶', 'ⓖ', '🅶', '𝔤', '𝖌', '𝚐'],
  h: ['ℎ', '𝘩', '𝐡', '𝗵', '𝒉', '𝙝', '𝕙', '𝒽', '𝓱', 'ｈ', 'ʜ', '🄷', 'ⓗ', '🅷', '𝔥', '𝖍', '𝚑'],
  i: ['𝑖', '𝘪', '𝐢', '𝗶', '𝒊', '𝙞', '𝕚', '𝒾', '𝓲', 'ｉ', 'ɪ', '🄸', 'ⓘ', '🅸', '𝔦', '𝖎', '𝚒'],
  j: ['𝑗', '𝘫', '𝐣', '𝗷', '𝒋', '𝙟', '𝕛', '𝒿', '𝓳', 'ｊ', 'ᴊ', '🄹', 'ⓙ', '🅹', '𝔧', '𝖏', '𝚓'],
  k: ['𝑘', '𝘬', '𝐤', '𝗸', '𝒌', '𝙠', '𝕜', '𝓀', '𝓴', 'ｋ', 'ᴋ', '🄺', 'ⓚ', '🅺', '𝔨', '𝖐', '𝚔'],
  l: ['𝑙', '𝘭', '𝐥', '𝗹', '𝒍', '𝙡', '𝕝', '𝓁', '𝓵', 'ｌ', 'ʟ', '🄻', 'ⓛ', '🅻', '𝔩', '𝖑', '𝚕'],
  m: ['𝑚', '𝘮', '𝐦', '𝗺', '𝒎', '𝙢', '𝕞', '𝓂', '𝓶', 'ｍ', 'ᴍ', '🄼', 'ⓜ', '🅼', '𝔪', '𝖒', '𝚖'],
  n: ['𝑛', '𝘯', '𝐧', '𝗻', '𝒏', '𝙣', '𝕟', '𝓃', '𝓷', 'ｎ', 'ɴ', '🄽', 'ⓝ', '🅽', '𝔫', '𝖓', '𝚗'],
  o: ['𝑜', '𝘰', '𝐨', '𝗼', '𝒐', '𝙤', '𝕠', '𝑜', '𝓸', 'ｏ', 'ᴏ', '🄾', 'ⓞ', '🅾', '𝔬', '𝖔', '𝚘'],
  p: ['𝑝', '𝘱', '𝐩', '𝗽', '𝒑', '𝙥', '𝕡', '𝓅', '𝓹', 'ｐ', 'ᴘ', '🄿', 'ⓟ', '🅿', '𝔭', '𝖕', '𝚙'],
  q: ['𝑞', '𝘲', '𝐪', '𝗾', '𝒒', '𝙦', '𝕢', '𝓆', '𝓺', 'ｑ', 'Q', '🅀', 'ⓠ', '🆀', '𝔮', '𝖖', '𝚚'],
  r: ['𝑟', '𝘳', '𝐫', '𝗿', '𝒓', '𝙧', '𝕣', '𝓇', '𝓻', 'ｒ', 'ʀ', '🅁', 'ⓡ', '🆁', '𝔯', '𝖗', '𝚛'],
  s: ['𝑠', '𝘴', '𝐬', '𝘀', '𝒔', '𝙨', '𝕤', '𝓈', '𝓼', 'ｓ', 'ꜱ', '🅂', 'ⓢ', '🆂', '𝔰', '𝖘', '𝚜'],
  t: ['𝑡', '𝘵', '𝐭', '𝘁', '𝒕', '𝙩', '𝕥', '𝓉', '𝓽', 'ｔ', 'ᴛ', '🅃', 'ⓣ', '🆃', '𝔱', '𝖙', '𝚝'],
  u: ['𝑢', '𝘶', '𝐮', '𝘂', '𝒖', '𝙪', '𝕦', '𝓊', '𝓾', 'ｕ', 'ᴜ', '🅄', 'ⓤ', '🆄', '𝔲', '𝖚', '𝚞'],
  v: ['𝑣', '𝘷', '𝐯', '𝘃', '𝒗', '𝙫', '𝕧', '𝓋', '𝓿', 'ｖ', 'ᴠ', '🅅', 'ⓥ', '🆅', '𝔳', '𝖛', '𝚟'],
  w: ['𝑤', '𝘸', '𝐰', '𝘄', '𝒘', '𝙬', '𝕨', '𝓌', '𝔀', 'ｗ', 'ᴡ', '🅆', 'ⓦ', '🆆', '𝔴', '𝖜', '𝚠'],
  x: ['𝑥', '𝘹', '𝐱', '𝘅', '𝒙', '𝙭', '𝕩', '𝓍', '𝔁', 'ｘ', 'x', '🅇', 'ⓧ', '🆇', '𝔵', '𝖝', '𝚡'],
  y: ['𝑦', '𝘺', '𝐲', '𝘆', '𝒚', '𝙮', '𝕪', '𝓎', '𝔂', 'ｙ', 'ʏ', '🅈', 'ⓨ', '🆈', '𝔶', '𝖞', '𝚢'],
  z: ['𝑧', '𝘻', '𝐳', '𝘇', '𝒛', '𝙯', '𝕫', '𝓏', '𝔃', 'ｚ', 'ᴢ', '🅉', 'ⓩ', '🆉', '𝔷', '𝖟', '𝚣'],

  // Uppercase //
  A: ['𝐴', '𝘈', '𝐀', '𝗔', '𝑨', '𝘼', '𝔸', '𝒜', '𝓐', 'Ａ', 'ᴀ', '🄰', 'Ⓐ', '🅰', '𝔄', '𝕬', '𝙰'],
  B: ['𝐵', '𝘉', '𝐁', '𝗕', '𝑩', '𝘽', '𝔹', '𝐵', '𝓑', 'Ｂ', 'ʙ', '🄱', 'Ⓑ', '🅱', '𝔅', '𝕭', '𝙱'],
  C: ['𝐶', '𝘊', '𝐂', '𝗖', '𝑪', '𝘾', 'ℂ', '𝒞', '𝓒', 'Ｃ', 'ᴄ', '🄲', 'Ⓒ', '🅲', 'ℭ', '𝕮', '𝙲'],
  D: ['𝐷', '𝘋', '𝐃', '𝗗', '𝑫', '𝘿', '𝔻', '𝒟', '𝓓', 'Ｄ', 'ᴅ', '🄳', 'Ⓓ', '🅳', '𝔇', '𝕯', '𝙳'],
  E: ['𝐸', '𝘌', '𝐄', '𝗘', '𝑬', '𝙀', '𝔼', '𝐸', '𝓔', 'Ｅ', 'ᴇ', '🄴', 'Ⓔ', '🅴', '𝔈', '𝕰', '𝙴'],
  F: ['𝐹', '𝘍', '𝐅', '𝗙', '𝑭', '𝙁', '𝔽', '𝐹', '𝓕', 'Ｆ', 'ꜰ', '🄵', 'Ⓕ', '🅵', '𝔉', '𝕱', '𝙵'],
  G: ['𝐺', '𝘎', '𝐆', '𝗚', '𝑮', '𝙂', '𝔾', '𝒢', '𝓖', 'Ｇ', 'ɢ', '🄶', 'Ⓖ', '🅶', '𝔊', '𝕲', '𝙶'],
  H: ['𝐻', '𝘏', '𝐇', '𝗛', '𝑯', '𝙃', 'ℍ', '𝐻', '𝓗', 'Ｈ', 'ʜ', '🄷', 'Ⓗ', '🅷', 'ℌ', '𝕳', '𝙷'],
  I: ['𝐼', '𝘐', '𝐈', '𝗜', '𝑰', '𝙄', '𝕀', '𝐼', '𝓘', 'Ｉ', 'ɪ', '🄸', 'Ⓘ', '🅸', 'ℑ', '𝕴', '𝙸'],
  J: ['𝐽', '𝘑', '𝐉', '𝗝', '𝑱', '𝙅', '𝕁', '𝒥', '𝓙', 'Ｊ', 'ᴊ', '🄹', 'Ⓙ', '🅹', '𝔍', '𝕵', '𝙹'],
  K: ['𝐾', '𝘒', '𝐊', '𝗞', '𝑲', '𝙆', '𝕂', '𝒦', '𝓚', 'Ｋ', 'ᴋ', '🄺', 'Ⓚ', '🅺', '𝔎', '𝕶', '𝙺'],
  L: ['𝐿', '𝘓', '𝐋', '𝗟', '𝑳', '𝙇', '𝕃', '𝐿', '𝓛', 'Ｌ', 'ʟ', '🄻', 'Ⓛ', '🅻', '𝔏', '𝕷', '𝙻'],
  M: ['𝑀', '𝘔', '𝐌', '𝗠', '𝑴', '𝙈', '𝕄', '𝑀', '𝓜', 'Ｍ', 'ᴍ', '🄼', 'Ⓜ', '🅼', '𝔐', '𝕸', '𝙼'],
  N: ['𝑁', '𝘕', '𝐍', '𝗡', '𝑵', '𝙉', 'ℕ', '𝒩', '𝓝', 'Ｎ', 'ɴ', '🄽', 'Ⓝ', '🅽', '𝔑', '𝕹', '𝙽'],
  O: ['𝑂', '𝘖', '𝐎', '𝗢', '𝑶', '𝙊', '𝕆', '𝒪', '𝓞', 'Ｏ', 'ᴏ', '🄾', 'Ⓞ', '🅾', '𝔒', '𝕺', '𝙾'],
  P: ['𝑃', '𝘗', '𝐏', '𝗣', '𝑷', '𝙋', 'ℙ', '𝒫', '𝓟', 'Ｐ', 'ᴘ', '🄿', 'Ⓟ', '🅿', '𝔓', '𝕻', '𝙿'],
  Q: ['𝑄', '𝘘', '𝐐', '𝗤', '𝑸', '𝙌', 'ℚ', '𝒬', '𝓠', 'Ｑ', 'Q', '🅀', 'Ⓠ', '🆀', '𝔔', '𝕼', '𝚀'],
  R: ['𝑅', '𝘙', '𝐑', '𝗥', '𝑹', '𝙍', 'ℝ', '𝑅', '𝓡', 'Ｒ', 'ʀ', '🅁', 'Ⓡ', '🆁', 'ℜ', '𝕽', '𝚁'],
  S: ['𝑆', '𝘚', '𝐒', '𝗦', '𝑺', '𝙎', '𝕊', '𝒮', '𝓢', 'Ｓ', 'ꜱ', '🅂, ', 'Ⓢ', '🆂', '𝔖', '𝕾', '𝚂'],
  T: ['𝑇', '𝘛', '𝐓', '𝗧', '𝑻', '𝙏', '𝕋', '𝒯', '𝓣', 'Ｔ', 'ᴛ', '🅃', 'Ⓣ', '🆃', '𝔗', '𝕿', '𝚃'],
  U: ['𝑈', '𝘜', '𝐔', '𝗨', '𝑼', '𝙐', '𝕌', '𝒰', '𝓤', 'Ｕ', 'ᴜ', '🅄', 'Ⓤ', '🆄', '𝔘', '𝖀', '𝚄'],
  V: ['𝑉', '𝘝', '𝐕', '𝗩', '𝑽', '𝙑', '𝕍', '𝒱', '𝓥', 'Ｖ', 'ᴠ', '🅅', 'Ⓥ', '🆅', '𝔙', '𝖁', '𝚅'],
  W: ['𝑊', '𝘞', '𝐖', '𝗪', '𝑾', '𝙒', '𝕎', '𝒲', '𝓦', 'Ｗ', 'ᴡ', '🅆', 'Ⓦ', '🆆', '𝔚', '𝖂', '𝚆'],
  X: ['𝑋', '𝘟', '𝐗', '𝗫', '𝑿', '𝙓', '𝕏', '𝒳', '𝓧', 'Ｘ', 'x', '🅇', 'Ⓧ', '🆇', '𝔛', '𝖃', '𝚇'],
  Y: ['𝑌', '𝘠', '𝐘', '𝗬', '𝒀', '𝙔', '𝕐', '𝒴', '𝓨', 'Ｙ', 'ʏ', '🅈', 'Ⓨ', '🆈', '𝔜', '𝖄', '𝚈'],
  Z: ['𝑍', '𝘡', '𝐙', '𝗭', '𝒁', '𝙕', 'ℤ', '𝒵', '𝓩', 'Ｚ', 'ᴢ', '🅉', 'Ⓩ', '🆉', 'ℨ', '𝖅', '𝚉'],
} as {
  len: number;
  [letter: string]: Array<string> | number;
};

export enum SPACE_ID {
  SPACE = 0, // Standard space // 1/4 em //
  NON_BREAKING_SPACE, // Standard space, will not be used in line break // 1/4 em //
  MONGOLIAN_VOWEL_SEPERATOR, // Zero width // 0 //
  EN_QUAD, // Twice as wide as normal // 1/2 em //
  EM_QUAD, // Normall the height of font // 1 em //
  EN_SPACE, // Twice as wide as normal // 1/2 em //
  EM_SPACE, // Normall the height of font // 1 em //
  THREE_PER_EM_SPACE, // Thicc space // 1/3 em //
  FOUR_PER_EM_SPACE, // Mid space // 1/4 em //
  SIX_PER_EM_SPACE, // Thicc space // 1/3 em //
  FIGURE_SPACE, // Digit width //
  PUNCTUATION_SPACE, // Period width //
  THIN_SPACE, // 1/5 or 1/6 em //
  HAIR_SPACE, // Narrower than THIN_SPACE //
  ZERO_WIDTH_SPACE, // 0 em //
  NARROW_NO_BREAK_SPACE, // Typically the width of a thin space or a mid space // 1/4 em //
  MEDIUM_MATHEMATICAL_SPACE, // 4/18 em //
  IDEOGRAPHIC_SPACE, // Width of ideographic (CJK) characters //
  ZERO_WIDTH_NO_BREAK_SPACE, // 0 em //
}

export const space = [
  '\u0020',
  '\u00A0',
  '\u180E',
  '\u2000',
  '\u2001',
  '\u2002',
  '\u2003',
  '\u2004',
  '\u2005',
  '\u2006',
  '\u2007',
  '\u2008',
  '\u2009',
  '\u200A',
  '\u200B',
  '\u202F',
  '\u205F',
  '\u3000',
  '\uFEFF',
];
