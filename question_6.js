const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const [longestName] = friends.sort((a, b) => b.length - a.length);

console.log(longestName);
