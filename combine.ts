let global_words: string[] = [];
const files = ["CollinsScrabble.txt","Enable1.txt","Letterpress.txt","UserWords.txt"];

for (const file_name of files) {
    const words = Deno.readTextFileSync(file_name).split("\n");
    global_words = [...new Set([...global_words, ...words])];
}

Deno.writeTextFileSync("Words.txt", global_words.join("\n").toLowerCase());