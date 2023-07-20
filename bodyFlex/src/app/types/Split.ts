export interface Info {
    splitName: string,
    timesPerWeek: number,
    exp: string,
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