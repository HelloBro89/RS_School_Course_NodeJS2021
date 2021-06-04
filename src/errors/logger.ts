export default (text: string, err?: Error) => {
    if (err) {
        console.log(`${text} ${err.stack}`);
    } else {
        console.log(text);
    }
};