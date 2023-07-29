export interface Split {
    splitName: string,
    timesPerWeek: number,
    exp: string,
    goal: string,
    exercises: [{name:string,
        sets:number,
        reps:number
    }],
    key:string;
}
