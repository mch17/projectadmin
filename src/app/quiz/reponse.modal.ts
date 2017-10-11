export class QuizReponse {
    constructor(
        public id?: number,
        public name?: string,
        public isAnswer?: boolean
    ){
        this.isAnswer = false;
    }
}
