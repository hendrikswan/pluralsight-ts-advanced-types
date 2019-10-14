function log(message: string, obj: any) {
  const objStr = obj.toString();
  console.log(`${message} ${objStr}`);
}

log("this is the first message", {
  src: "dark.png"
});
