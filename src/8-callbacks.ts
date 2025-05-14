const callBacks =()=>{

    function doHomework(subject: string, callFinished: (subject: string) => string) {
        console.log(`Doing homework for ${subject}`);
       const result = callFinished(subject);
        console.log(result);
    }
    function finishedHomework(subject: string): string {
        return `Finished homework for ${subject}`;
    }
    doHomework("Math", finishedHomework);
}

export default callBacks