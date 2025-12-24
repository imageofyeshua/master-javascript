console.log("### Array ForEach ###");

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// console.log(socials.__proto__);

// socials.forEach(function (element) {
//   console.log(element);
// });

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObj = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObj.forEach((item, index) => console.log(index, item.url));
