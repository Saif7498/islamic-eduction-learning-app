const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

const newTranslations = {
  en: { formCity: "City / Village" },
  hi: { formCity: "शहर / गाँव" },
  ur: { formCity: "شہر / گاؤں" },
  ar: { formCity: "المدينة / القرية" },
  bn: { formCity: "শহর / গ্রাম" },
  id: { formCity: "Kota / Desa" },
  tr: { formCity: "Şehir / Köy" },
  fr: { formCity: "Ville / Village" },
  es: { formCity: "Ciudad / Pueblo" },
  mr: { formCity: "शहर / गाव" },
  te: { formCity: "నగరం / గ్రామం" },
  ta: { formCity: "நகரம் / கிராமம்" },
  gu: { formCity: "શહેર / ગામ" },
  kn: { formCity: "ನಗರ / ಗ್ರಾಮ" },
  ml: { formCity: "നഗരം / ഗ്രാമം" },
  pa: { formCity: "ਸ਼ਹਿਰ / ਪਿੰਡ" },
  or: { formCity: "ସହର / ଗ୍ରାମ" },
  as: { formCity: "চহৰ / গাওঁ" }
};

for (const [lang, trans] of Object.entries(newTranslations)) {
  const transStr = `    formCity: "${trans.formCity}",`;
  const langRegex = new RegExp(`(${lang}:\\s*{[^}]*?formState:\\s*"[^"]+",?)`, 's');
  content = content.replace(langRegex, `$1\n${transStr}`);
}

fs.writeFileSync('src/translations.ts', content);
