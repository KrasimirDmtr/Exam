
export interface Exercise {
    name: string,
    sets: number,
    reps: string,
    day: string,
    target: string,

}

export interface Split {
    splitName: string,
    timesPerWeek: number,
    exp: string,
    goal: string,
    exercises: Exercise,
    key: string,
}
