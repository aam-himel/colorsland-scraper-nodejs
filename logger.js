import colors from "colors";

export default function logger(content) {
  const date = new Date().toISOString();
  console.log(`${date} :`.blue.italic.bold, `${content}`.green);
}
