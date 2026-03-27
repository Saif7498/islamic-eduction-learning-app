const fs = require('fs');

const file = 'src/translations.ts';
let content = fs.readFileSync(file, 'utf8');

// Remove terms3Title and terms3Desc
content = content.replace(/\s*terms3Title:\s*".*?",\n/g, '\n');
content = content.replace(/\s*terms3Desc:\s*".*?",\n/g, '\n');

// Replace 4 with 3 in terms4Title
content = content.replace(/(terms4Title:\s*")4\./g, '$13.');
content = content.replace(/(terms4Title:\s*")٤\./g, '$1٣.');
content = content.replace(/(terms4Title:\s*")৪\./g, '$1৩.');
content = content.replace(/(terms4Title:\s*")୪\./g, '$1୩.');

// Replace 5 with 4 in terms5Title
content = content.replace(/(terms5Title:\s*")5\./g, '$14.');
content = content.replace(/(terms5Title:\s*")٥\./g, '$1٤.');
content = content.replace(/(terms5Title:\s*")৫\./g, '$1৪.');
content = content.replace(/(terms5Title:\s*")୫\./g, '$1୪.');

fs.writeFileSync(file, content);
console.log('Done');
