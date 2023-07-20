export interface Info {
    timesPerWeek: number,
    exp: number,
    goal: string,
    exercises: [{
        exercise: string,
        imageUrl: string,
    }],
}

export interface Split {
    splitName: string,
    info: Info,
}