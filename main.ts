const words_file = Deno.readTextFileSync("Words.txt");
const words = words_file.split("\n");

const config = new Map<string, number>();
config.set("max words", 20);

while (true) {
    const letters = prompt("Prompt:") ?? "ab";
    if (letters.startsWith("set ")) {
        const fields = letters.split(" ");
        const n = Number(fields[fields.length-1]);
        config.set(fields.slice(1,fields.length-1).join(" "), n);

        continue;
    }
    const filtered = words
        .filter(str => str.includes(letters))
        .sort((a, b) => b.length - a.length)
        .slice(0, (config.get("max words") as number)+1)
        .sort((a, b) => a.length - b.length);
    filtered.forEach((word, i) => {
        console.log(i, word, "["+word.length+"]");
    });
}